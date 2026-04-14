console.log("BENCHMARK 2 MAIN LOADED");

import { GameContext, GameState, MovementArea } from "./types";
import { drawBackground, drawLogo, drawGameplayFrame, drawBottomPanel } from "./renderer";
import { LEVEL_DATA } from "./levelData";
import { drawMainMenu } from "./screens/MainMenu";
import { drawLevelSelect } from "./screens/LevelSelect";
import { drawLevel } from "./screens/Level";
import { drawPauseOverlay } from "./overlays/PauseOverlay";
import { drawControlsOverlay } from "./overlays/ControlsOverlay";
import { drawGameOverOverlay } from "./overlays/GameOverOverlay";
import { getLayout, getMovementLayout } from "./layout";
import { SoundManager } from "./audio";

import { EventEmitter } from "./Helpers/Events/EventEmitter";
import { InputManager } from "./Helpers/InputManager";
import { PlayerControl } from "./Helpers/PlayerControl";
import { NormalBlock } from "./Helpers/objects/NormalBlock";
import { InvisibleBlock } from "./Helpers/objects/InvisibleBlock";
import { CountdownNumberBlock } from "./Helpers/objects/CountdownNumberBlock";
import { HeavyBlock } from "./Helpers/objects/HeavyBlock";
import { GlassBlock } from "./Helpers/objects/GlassBlock";
import { Block } from "./Helpers/objects/Block";
import { MOVEMENT_LEVEL_CONFIG } from "./movementLevelConfig";

window.onload = () => {
  const gameCanvas = document.getElementById("game-canvas") as HTMLCanvasElement | null;
  const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement | null;
  const textCanvas = document.getElementById("text-canvas") as HTMLCanvasElement | null;

  if (!gameCanvas || !debugCanvas || !textCanvas) {
    console.error("Missing one or more canvas elements.");
    return;
  }

  const ctx = gameCanvas.getContext("2d");
  if (!ctx) {
    console.error("Could not get 2D context.");
    return;
  }

  const state: GameState = {
    currentScreen: "mainmenu",
    currentLevel: 1,
    lives: 3,
    paused: false,
    controlsOpen: false,
    darkMode: true,
    storyTitle: "Exam Briefing",
    storyLines: [
      "Welcome, candidate. I will be guiding you through this assessment.",
      "Complete all questions to earn your OtB Thinking Certificate.",
      "Unconventional thinking is not just permitted - it is required.",
    ],
    playerName: "Box",
    nameInput: "",
    nameFocused: false,
    playMode: "play",
    gameOver: false,
    levelTimerEnd: 0,
    skips: 0,
    levelSubPhase: "",
    guideTarget: "",
    guideReveal: 0,
    guideCursor: false,
    movementIntroSeen: false,
    level21IntroSeen:  false,
  };

  const emitter = new EventEmitter();
  const input = new InputManager(emitter);
  const player = new PlayerControl(emitter);
  let previousLevel = state.currentLevel;
  let previousScreen = state.currentScreen;
  let needsMovementReset = false;
  let flashOpacity = 0;
  let lastTimerTick = performance.now();
  let lastFrameTick = performance.now();

  const defaultMovementArea: MovementArea = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  const gc: GameContext = {
    ctx,
    state,
    hitAreas: [],
    render: () => {},
    loseLife: () => {},
    resetPlayerName: () => {},
    resetMovementLevel: () => {},
    submitMovementAnswer: () => {},
    getCurrentAnswer: () => "",
    displayFont: `"Trebuchet MS", "Verdana", sans-serif`,
    bodyFont: `"Trebuchet MS", "Arial", sans-serif`,
    logo: new Image(),
    gameplayFrame: new Image(),
    logoLoaded: false,
    gameplayFrameLoaded: false,
    mouseX: 0,
    mouseY: 0,
    mouseDown: false,
    keysDown: new Set<string>(),
    wheelDeltaY: 0,
    sounds: new SoundManager(),
    player,
    blocks: [],
    answerSlots: [],
    movementArea: defaultMovementArea,
    quizPrompt: MOVEMENT_LEVEL_CONFIG[11].prompt,
    quizAnswer: MOVEMENT_LEVEL_CONFIG[11].answer,
    timeLeftSeconds: MOVEMENT_LEVEL_CONFIG[11].time,
  };

  const isMovementLevel = (level: number) => level >= 11 && level <= 20;

  const resolveGuideLines = (): string[] => {
    if (gc.state.currentScreen === "level") {
      return LEVEL_DATA[gc.state.currentLevel - 1]?.lines ?? [];
    }

    return gc.state.storyLines;
  };

  const syncMovementArea = (resetSlots = false) => {
    const movementLayout = getMovementLayout(ctx);
    const slotGap = 10;
    const slotSize = player.width;
    const answerCount = 10;
    const answerZoneWidth = answerCount * slotSize + (answerCount - 1) * slotGap;
    const answerZoneX = movementLayout.gameFrameX + (movementLayout.gameFrameWidth - answerZoneWidth) / 2;
    const answerZoneY = movementLayout.gameFrameY + 28;
    const previousSlots = gc.answerSlots;

    gc.answerSlots = Array.from({ length: answerCount }, (_, index) => ({
      x: answerZoneX + index * (slotSize + slotGap),
      y: answerZoneY,
      size: slotSize,
      block: resetSlots ? null : previousSlots[index]?.block ?? null,
    }));

    gc.movementArea = {
      x: movementLayout.movementAreaX,
      y: movementLayout.movementAreaY,
      width: movementLayout.movementAreaWidth,
      height: movementLayout.movementAreaHeight,
    };
  };

  const buildMovementBlocks = () => {
    const config = MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel] ?? MOVEMENT_LEVEL_CONFIG[11];
    const { x, y, width, height } = gc.movementArea;
    const size = player.width;

    return config.blocks.map((block): Block => {
      const blockX = x + width * block.x;
      const blockY = y + height * block.y;

      switch (block.type) {
        case "invisible":
          return new InvisibleBlock(blockX, blockY, size, block.value);
        case "countdown":
          return new CountdownNumberBlock(blockX, blockY, size, block.value);
        case "heavy":
          return new HeavyBlock(blockX, blockY, size, block.value);
        case "glass":
          return new GlassBlock(blockX, blockY, size, block.value);
        case "normal":
        default:
          return new NormalBlock(blockX, blockY, size, block.value);
      }
    });
  };

  const syncMovementScene = (resetScene = false) => {
    const config = MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel] ?? MOVEMENT_LEVEL_CONFIG[11];
    gc.quizPrompt = config.prompt;
    gc.quizAnswer = config.answer;
    syncMovementArea(resetScene);

    const minX = gc.movementArea.x;
    const minY = gc.movementArea.y;
    const maxX = gc.movementArea.x + gc.movementArea.width - player.width;
    const maxY = gc.movementArea.y + gc.movementArea.height - player.height;

    player.setBounds(minX, minY, maxX, maxY);
    player.setAnswerSlots(gc.answerSlots);

    if (resetScene) {
      gc.blocks = buildMovementBlocks();
      player.setBlocks(gc.blocks);
      player.resetPosition(
        minX + player.width,
        minY + gc.movementArea.height / 2 - player.height / 2,
      );
      return;
    }

    player.setBlocks(gc.blocks);
  };

  gc.getCurrentAnswer = () => {
    let answer = "";

    for (const slot of gc.answerSlots) {
      if (!slot.block) {
        break;
      }

      answer += slot.block.value;
    }

    return answer;
  };

  gc.resetPlayerName = () => {
    gc.state.playerName = "Box";
    gc.state.nameInput = "";
    gc.state.nameFocused = false;
    gc.state.levelTimerEnd = 0;
    gc.state.skips = 0;
    gc.state.levelSubPhase = "";
  };

  gc.loseLife = () => {
    gc.state.lives--;
    if (gc.state.lives <= 0) {
      gc.state.lives = 0;
      gc.state.gameOver = true;
    }
    flashOpacity = 1;
  };

  gc.submitMovementAnswer = () => {
    const currentAnswer = gc.getCurrentAnswer();
    const config = MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel] ?? MOVEMENT_LEVEL_CONFIG[11];

    if (currentAnswer !== gc.quizAnswer) {
      gc.loseLife();
      needsMovementReset = true;
      gc.timeLeftSeconds = config.time;
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
      gc.render();
      return;
    }

    if (gc.state.currentLevel < 20) {
      gc.state.currentLevel++;
      needsMovementReset = true;
      gc.state.levelSubPhase = "";
      gc.state.levelTimerEnd = 0;
      const nextConfig = MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel] ?? MOVEMENT_LEVEL_CONFIG[11];
      gc.timeLeftSeconds = nextConfig.time;
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
      gc.render();
      return;
    }

    gc.state.currentScreen = "levelselect";
    gc.render();
  };

  gc.resetMovementLevel = () => {
    if (!isMovementLevel(gc.state.currentLevel)) {
      return;
    }

    needsMovementReset = true;
    gc.render();
  };

  gc.render = () => {
    gc.hitAreas = [];

    const newTarget = resolveGuideLines().join("\n");
    if (newTarget !== gc.state.guideTarget) {
      gc.state.guideTarget = newTarget;
      gc.state.guideReveal = 0;
    }

    const movementLevelActive = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel);
    const enteringMovementLevel =
      movementLevelActive && (previousScreen !== "level" || previousLevel !== gc.state.currentLevel);

    if (movementLevelActive) {
      if (enteringMovementLevel) {
        const config = MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel] ?? MOVEMENT_LEVEL_CONFIG[11];
        gc.timeLeftSeconds = config.time;
        lastTimerTick = performance.now();
        lastFrameTick = performance.now();
      }

      syncMovementScene(enteringMovementLevel || gc.blocks.length === 0 || needsMovementReset);
      needsMovementReset = false;
    } else {
      gc.blocks = [];
      gc.answerSlots = [];
      player.setBlocks([]);
      player.setAnswerSlots([]);
      gc.timeLeftSeconds = MOVEMENT_LEVEL_CONFIG[11].time;
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();

      const { movementAreaX, movementAreaY, movementAreaWidth, movementAreaHeight } = getLayout(ctx);
      gc.movementArea = {
        x: movementAreaX,
        y: movementAreaY,
        width: movementAreaWidth,
        height: movementAreaHeight,
      };
    }

    drawBackground(gc);

    if (!movementLevelActive) {
      drawLogo(gc);
      drawGameplayFrame(gc);
    }

    switch (gc.state.currentScreen) {
      case "mainmenu":
        drawMainMenu(gc);
        break;
      case "levelselect":
        drawLevelSelect(gc);
        break;
      case "level":
        drawLevel(gc);
        break;
    }

    drawBottomPanel(gc);

    if (gc.state.paused) {
      drawPauseOverlay(gc);
    }

    if (gc.state.controlsOpen) {
      drawControlsOverlay(gc);
    }

    if (gc.state.gameOver) {
      drawGameOverOverlay(gc);
    }

    // Red flash overlay on life lost
    if (flashOpacity > 0) {
      ctx.fillStyle = `rgba(220, 30, 30, ${flashOpacity * 0.45})`;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    previousLevel = gc.state.currentLevel;
    previousScreen = gc.state.currentScreen;
  };

  const resizeCanvases = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    gameCanvas.width = debugCanvas.width = w;
    gameCanvas.height = debugCanvas.height = h;
    needsMovementReset = true;
  };

  const toCanvas = (e: MouseEvent) => {
    const rect = gameCanvas.getBoundingClientRect();
    const scaleX = gameCanvas.width / rect.width;
    const scaleY = gameCanvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  gameCanvas.addEventListener("click", (e) => {
    const { x, y } = toCanvas(e);
    for (const area of gc.hitAreas) {
      if (x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h) {
        area.action();
        break;
      }
    }
  });

  gameCanvas.addEventListener("mousemove", (e) => {
    const { x, y } = toCanvas(e);
    gc.mouseX = x;
    gc.mouseY = y;
    const over = gc.hitAreas.some(
      (area) => !area.noCursor && x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h,
    );
    gameCanvas.style.cursor = over ? "pointer" : "default";
    if (gc.mouseDown) {
      gc.render();
    }
  });

  gameCanvas.addEventListener("mousedown", (e) => {
    const { x, y } = toCanvas(e);
    gc.mouseX = x;
    gc.mouseY = y;
    gc.mouseDown = true;
    gc.render();
  });

  gameCanvas.addEventListener("mouseup", () => {
    gc.mouseDown = false;
  });

  gameCanvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    gc.wheelDeltaY = e.deltaY;
    gc.render();
    gc.wheelDeltaY = 0;
  }, { passive: false });

  window.addEventListener("keydown", (e) => {
    gc.keysDown.add(e.key);

    if (gc.state.nameFocused && !gc.state.paused && !gc.state.controlsOpen) {
      if (e.key === "Escape") {
        gc.state.nameFocused = false;
        gc.render();
        return;
      }

      if (e.key === "Enter") {
        gc.state.playerName = gc.state.nameInput.trim() || "Box";
        gc.state.nameFocused = false;
        gc.state.currentLevel = 2;
        gc.render();
        return;
      }

      if (e.key === "Backspace") {
        gc.state.nameInput = gc.state.nameInput.slice(0, -1);
        gc.render();
        return;
      }

      if (e.key.length === 1 && gc.state.nameInput.length < 24) {
        gc.state.nameInput += e.key;
        gc.render();
        return;
      }

      return;
    }

    if (e.key === "Escape") {
      if (gc.state.controlsOpen) {
        gc.state.controlsOpen = false;
        gc.render();
      } else if (gc.state.paused) {
        gc.state.paused = false;
        gc.render();
      }
    }
  });

  window.addEventListener("keyup", (e) => {
    gc.keysDown.delete(e.key);
  });

  window.addEventListener("resize", () => {
    resizeCanvases();
    gc.render();
  });

  setInterval(() => {
    const totalChars = resolveGuideLines().reduce((sum, line) => sum + line.length, 0);
    if (gc.state.guideReveal < totalChars) {
      gc.state.guideReveal++;
      gc.render();
    }
  }, 22);

  setInterval(() => {
    gc.state.guideCursor = !gc.state.guideCursor;
    const totalChars = resolveGuideLines().reduce((sum, line) => sum + line.length, 0);
    if (gc.state.guideReveal >= totalChars || gc.state.nameFocused) {
      gc.render();
    }
  }, 530);

  gc.logo.onload = () => {
    gc.logoLoaded = true;
    gc.render();
  };
  gc.logo.onerror = () => {
    gc.logoLoaded = false;
    gc.render();
  };

  gc.gameplayFrame.onload = () => {
    gc.gameplayFrameLoaded = true;
    gc.render();
  };
  gc.gameplayFrame.onerror = () => {
    gc.gameplayFrameLoaded = false;
    gc.render();
  };

  gc.logo.src = "./assets/GameLogo.png";
  gc.gameplayFrame.src = "./assets/gameplay-frame.png";

  resizeCanvases();
  gc.render();

  const gameLoop = () => {
    const movementLevelActive = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel);

    if (
      movementLevelActive &&
      !gc.state.paused &&
      !gc.state.controlsOpen &&
      !gc.state.gameOver &&
      gc.state.movementIntroSeen
    ) {
      const now = performance.now();
      const deltaSeconds = Math.max(0, (now - lastFrameTick) / 1000);
      lastFrameTick = now;

      if (now - lastTimerTick >= 1000) {
        const elapsedSeconds = Math.floor((now - lastTimerTick) / 1000);
        gc.timeLeftSeconds = Math.max(0, gc.timeLeftSeconds - elapsedSeconds);
        lastTimerTick += elapsedSeconds * 1000;

        if (gc.timeLeftSeconds === 0) {
          gc.loseLife();
          needsMovementReset = true;
          const config = MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel] ?? MOVEMENT_LEVEL_CONFIG[11];
          gc.timeLeftSeconds = config.time;
          lastTimerTick = performance.now();
          lastFrameTick = performance.now();
        }
      }

      for (const block of gc.blocks) {
        block.update(deltaSeconds, gc.blocks);
      }

      gc.blocks = gc.blocks.filter((block) => !block.destroyed);
      gc.answerSlots = gc.answerSlots.map((slot) => ({
        ...slot,
        block: slot.block && !slot.block.destroyed ? slot.block : null,
      }));

      player.setBlocks(gc.blocks);
      player.setAnswerSlots(gc.answerSlots);
      input.update();
      player.update();
      gc.render();
    } else {
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
    }

    // Fade out red flash (works on all screens, not just movement levels)
    if (flashOpacity > 0) {
      flashOpacity = Math.max(0, flashOpacity - 0.04);
      gc.render();
    }

    requestAnimationFrame(gameLoop);
  };

  gameLoop();
};
