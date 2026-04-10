console.log("BENCHMARK 2 MAIN LOADED");

import { GameContext, GameState } from "./types";
import { drawBackground, drawLogo, drawGameplayFrame, drawBottomPanel } from "./renderer";
import { drawMainMenu } from "./screens/MainMenu";
import { drawLevelSelect } from "./screens/LevelSelect";
import { drawLevel } from "./screens/Level";
import { drawPauseOverlay } from "./overlays/PauseOverlay";
import { drawControlsOverlay } from "./overlays/ControlsOverlay";
import { drawGameOverOverlay } from "./overlays/GameOverOverlay";
import { getLayout } from "./layout";

import { EventEmitter } from "../Helpers/Events/EventEmitter";
import { InputManager } from "../Helpers/InputManager";
import { PlayerControl } from "../Helpers/PlayerControl";

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

  const gc: GameContext = {
    ctx,
    state,
    hitAreas: [],
    render: () => {},
    loseLife: () => {},
    resetPlayerName: () => {},
    displayFont: `"Trebuchet MS", "Verdana", sans-serif`,
    bodyFont: `"Trebuchet MS", "Arial", sans-serif`,
    logo: new Image(),
    gameplayFrame: new Image(),
    logoLoaded: false,
    gameplayFrameLoaded: false,
    player,
  };

  const isMovementLevel = (level: number) => level >= 11 && level <= 20;

  const syncPlayerToLayout = (resetPosition = false) => {
    const { topInnerX, topInnerY, topInnerWidth, topInnerHeight } = getLayout(ctx);
    const minX = topInnerX;
    const minY = topInnerY;
    const maxX = topInnerX + topInnerWidth - player.width;
    const maxY = topInnerY + topInnerHeight - player.height;

    player.setBounds(minX, minY, maxX, maxY);

    if (resetPosition) {
      player.resetPosition(
        minX + (topInnerWidth - player.width) / 2,
        minY + (topInnerHeight - player.height) / 2,
      );
    }
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
    gc.render();
  };

  gc.render = () => {
    const enteringMovementLevel =
      gc.state.currentScreen === "level" &&
      isMovementLevel(gc.state.currentLevel) &&
      (previousScreen !== "level" || previousLevel !== gc.state.currentLevel);

    if (enteringMovementLevel) {
      syncPlayerToLayout(true);
    } else if (gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel)) {
      syncPlayerToLayout(false);
    }

    gc.hitAreas = [];
    drawBackground(gc);
    drawLogo(gc);
    drawGameplayFrame(gc);

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
    syncPlayerToLayout(false);
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

  gc.logo.src = "/benchmark2/assets/logo.png";

  resizeCanvases();
  gc.render();

  const gameLoop = () => {
    if (
      gc.state.currentScreen === "level" &&
      isMovementLevel(gc.state.currentLevel) &&
      !gc.state.paused &&
      !gc.state.controlsOpen &&
      !gc.state.gameOver
    ) {
      input.update();
      player.update();
      gc.render();
    }

    requestAnimationFrame(gameLoop);
  };

  gameLoop();
};
