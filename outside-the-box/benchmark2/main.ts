console.log("BENCHMARK 2 MAIN LOADED");

import { GameContext, GameState, MovementArea } from "./types";
import { drawBackground, drawLogo, drawGameplayFrame, drawBottomPanel } from "./renderer";
import { drawMainMenu } from "./screens/MainMenu";
import { drawLevelSelect } from "./screens/LevelSelect";
import { drawLevel } from "./screens/Level";
import { drawPauseOverlay } from "./overlays/PauseOverlay";
import { drawControlsOverlay } from "./overlays/ControlsOverlay";
import { drawGameOverOverlay } from "./overlays/GameOverOverlay";
import { getLayout, getMovementLayout } from "./layout";

import { EventEmitter } from "./Helpers/Events/EventEmitter";
import { InputManager } from "./Helpers/InputManager";
import { PlayerControl } from "./Helpers/PlayerControl";
import { NormalBlock } from "./Helpers/objects/NormalBlock";

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
    storyTitle: "Outside-the-Box Thinking Certification",
    storyLines: [
      "Complete this assessment to earn your OtB Thinking Certificate.",
      "Demonstrate your ability to approach problems from unconventional angles.",
      "Candidates who pass may list this credential on their LinkedIn or resume.",
    ],
    playerName: "Box",
    nameInput: "",
    nameFocused: false,
    playMode: "play",
    gameOver: false,
  };

  const emitter = new EventEmitter();
  const input = new InputManager(emitter);
  const player = new PlayerControl(emitter);
  let previousLevel = state.currentLevel;
  let previousScreen = state.currentScreen;
  let needsMovementReset = false;
  let lastTimerTick = performance.now();

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
    submitMovementAnswer: () => {},
    getCurrentAnswer: () => "",
    displayFont: `"Trebuchet MS", "Verdana", sans-serif`,
    bodyFont: `"Trebuchet MS", "Arial", sans-serif`,
    logo: new Image(),
    gameplayFrame: new Image(),
    logoLoaded: false,
    gameplayFrameLoaded: false,
    player,
    blocks: [],
    answerSlots: [],
    movementArea: defaultMovementArea,
    quizAnswer: "AB7",
    timeLeftSeconds: 30,
  };

  const isMovementLevel = (level: number) => level >= 11 && level <= 20;

  const syncMovementArea = () => {
    const movementLayout = getMovementLayout(ctx);
    const slotGap = 10;
    const slotSize = player.width;
    const answerCount = 10;
    const answerZoneWidth = answerCount * slotSize + (answerCount - 1) * slotGap;
    const answerZoneX = movementLayout.gameFrameX + (movementLayout.gameFrameWidth - answerZoneWidth) / 2;
    const answerZoneY = movementLayout.gameFrameY + 28;

    gc.answerSlots = Array.from({ length: answerCount }, (_, index) => ({
      x: answerZoneX + index * (slotSize + slotGap),
      y: answerZoneY,
      size: slotSize,
      block: null,
    }));

    gc.movementArea = {
      x: movementLayout.movementAreaX,
      y: movementLayout.movementAreaY,
      width: movementLayout.movementAreaWidth,
      height: movementLayout.movementAreaHeight,
    };
  };

  const buildMovementBlocks = () => {
    const { x, y, width, height } = gc.movementArea;
    const size = player.width;
    const startX = x + width * 0.18;
    const startY = y + height * 0.22;

    return [
      new NormalBlock(startX, startY, size, "#ffffff", "A"),
      new NormalBlock(startX + size * 2.2, startY, size, "#ffffff", "B"),
      new NormalBlock(startX + size * 4.4, startY, size, "#ffffff", "7"),
      new NormalBlock(startX + size * 1.1, startY + size * 2.1, size, "#ffffff", "C"),
      new NormalBlock(startX + size * 3.5, startY + size * 2.1, size, "#ffffff", "5"),
    ];
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

  gc.submitMovementAnswer = () => {
    const currentAnswer = gc.getCurrentAnswer();
    if (currentAnswer !== gc.quizAnswer) {
      gc.loseLife();
      needsMovementReset = true;
      gc.timeLeftSeconds = 30;
      lastTimerTick = performance.now();
      gc.render();
      return;
    }

    if (gc.state.currentLevel < 20) {
      gc.state.currentLevel++;
      needsMovementReset = true;
      gc.timeLeftSeconds = 30;
      lastTimerTick = performance.now();
      gc.render();
      return;
    }

    gc.state.currentScreen = "levelselect";
    gc.render();
  };

  const syncMovementScene = (resetScene = false) => {
    syncMovementArea();

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

  gc.resetPlayerName = () => {
    gc.state.playerName = "Box";
    gc.state.nameInput = "";
    gc.state.nameFocused = false;
  };

  gc.loseLife = () => {
    gc.state.lives--;
    if (gc.state.lives <= 0) {
      gc.state.lives = 0;
      gc.state.gameOver = true;
    }
  };

  gc.render = () => {
    const movementLevelActive = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel);
    const enteringMovementLevel =
      movementLevelActive && (previousScreen !== "level" || previousLevel !== gc.state.currentLevel);

    if (movementLevelActive) {
      syncMovementScene(enteringMovementLevel || gc.blocks.length === 0 || needsMovementReset);
      needsMovementReset = false;
    } else {
      gc.blocks = [];
      gc.answerSlots = [];
      player.setBlocks([]);
      player.setAnswerSlots([]);
      gc.timeLeftSeconds = 30;
      lastTimerTick = performance.now();
      const { movementAreaX, movementAreaY, movementAreaWidth, movementAreaHeight } = getLayout(ctx);
      gc.movementArea = {
        x: movementAreaX,
        y: movementAreaY,
        width: movementAreaWidth,
        height: movementAreaHeight,
      };
    }

    gc.hitAreas = [];
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

    if (gc.state.paused) drawPauseOverlay(gc);
    if (gc.state.controlsOpen) drawControlsOverlay(gc);
    if (gc.state.gameOver) drawGameOverOverlay(gc);

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
    const over = gc.hitAreas.some(
      (area) => x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h,
    );
    gameCanvas.style.cursor = over ? "pointer" : "default";
  });

  window.addEventListener("keydown", (e) => {
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

  window.addEventListener("resize", () => {
    resizeCanvases();
    gc.render();
  });

  setInterval(() => {
    if (gc.state.nameFocused) gc.render();
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
      !gc.state.gameOver
    ) {
      const now = performance.now();
      if (now - lastTimerTick >= 1000) {
        const elapsedSeconds = Math.floor((now - lastTimerTick) / 1000);
        gc.timeLeftSeconds = Math.max(0, gc.timeLeftSeconds - elapsedSeconds);
        lastTimerTick += elapsedSeconds * 1000;

        if (gc.timeLeftSeconds === 0) {
          gc.loseLife();
          needsMovementReset = true;
          gc.timeLeftSeconds = 30;
          lastTimerTick = performance.now();
        }
      }

      input.update();
      player.update();
      gc.render();
    } else {
      lastTimerTick = performance.now();
    }

    requestAnimationFrame(gameLoop);
  };

  gameLoop();
};
