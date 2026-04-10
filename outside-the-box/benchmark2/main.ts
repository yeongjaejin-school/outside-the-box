console.log("BENCHMARK 2 MAIN LOADED");

import { GameContext, GameState } from './types';
import { drawBackground, drawLogo, drawGameplayFrame, drawBottomPanel } from './renderer';
import { drawMainMenu }       from './screens/MainMenu';
import { drawLevelSelect }    from './screens/LevelSelect';
import { drawLevel }          from './screens/Level';
import { drawPauseOverlay }   from './overlays/PauseOverlay';
import { drawControlsOverlay } from './overlays/ControlsOverlay';
import { drawGameOverOverlay } from './overlays/GameOverOverlay';

// Event system and Player input handling
import { EventEmitter } from "../Helpers/Events/EventEmitter";
import { InputManager } from "../Helpers/InputManager";
import { PlayerControl } from "../Helpers/PlayerControl";

window.onload = () => {
  const gameCanvas  = document.getElementById("game-canvas")  as HTMLCanvasElement | null;
  const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement | null;
  const textCanvas  = document.getElementById("text-canvas")  as HTMLCanvasElement | null;

  if (!gameCanvas || !debugCanvas || !textCanvas) {
    console.error("Missing one or more canvas elements.");
    return;
  }

  const ctx = gameCanvas.getContext("2d");
  if (!ctx) {
    console.error("Could not get 2D context.");
    return;
  }

  // ── initial state ─────────────────────────────────────────────────────────────

  const state: GameState = {
    currentScreen: "mainmenu",
    currentLevel:  1,
    lives:         3,
    paused:        false,
    controlsOpen:  false,
    darkMode:      true,
    storyTitle:    "Outside-the-Box Thinking Certification",
    storyLines: [
      "Complete this assessment to earn your OtB Thinking Certificate.",
      "Demonstrate your ability to approach problems from unconventional angles.",
      "Candidates who pass may list this credential on their LinkedIn or résumé.",
    ],
    playerName:  "Box",
    nameInput:   "",
    nameFocused: false,
    playMode:    "play",
    gameOver:    false,
  };

  // Varaibles for player control and input handling
  const emitter = new EventEmitter();
  const input = new InputManager(emitter);
  const player = new PlayerControl(emitter);

  // ── game context ──────────────────────────────────────────────────────────────
  // gc is passed to every draw function so they share ctx, state, and helpers
  // without globals or circular imports.

  const gc: GameContext = {
    ctx,
    state,
    hitAreas:            [],
    render:              () => {},   // assigned below
    loseLife:            () => {},   // assigned below
    resetPlayerName:     () => {},   // assigned below
    displayFont:         `"Trebuchet MS", "Verdana", sans-serif`,
    bodyFont:            `"Trebuchet MS", "Arial", sans-serif`,
    logo:                new Image(),
    gameplayFrame:       new Image(),
    logoLoaded:          false,
    gameplayFrameLoaded: false,
  };

  gc.resetPlayerName = () => {
    gc.state.playerName  = "Box";
    gc.state.nameInput   = "";
    gc.state.nameFocused = false;
  };

  gc.loseLife = () => {
    gc.state.lives--;
    if (gc.state.lives <= 0) {
      gc.state.lives    = 0;
      gc.state.gameOver = true;
    }
    gc.render();
  };

  gc.render = () => {
    gc.hitAreas = [];
    drawBackground(gc);
    drawLogo(gc);
    drawGameplayFrame(gc);

    switch (gc.state.currentScreen) {
      case "mainmenu":    drawMainMenu(gc);    break;
      case "levelselect": drawLevelSelect(gc); break;
      case "level":       drawLevel(gc);       break;
    }

    drawBottomPanel(gc);

    if (gc.state.paused)       drawPauseOverlay(gc);
    if (gc.state.controlsOpen) drawControlsOverlay(gc);
    if (gc.state.gameOver)     drawGameOverOverlay(gc);
  };

  // ── canvas resize ─────────────────────────────────────────────────────────────

  const resizeCanvases = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    gameCanvas.width  = debugCanvas.width  = w;
    gameCanvas.height = debugCanvas.height = h;
  };

  // ── input ─────────────────────────────────────────────────────────────────────

  const toCanvas = (e: MouseEvent) => {
    const rect   = gameCanvas.getBoundingClientRect();
    const scaleX = gameCanvas.width  / rect.width;
    const scaleY = gameCanvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY,
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
      (a) => x >= a.x && x <= a.x + a.w && y >= a.y && y <= a.y + a.h,
    );
    gameCanvas.style.cursor = over ? "pointer" : "default";
  });

  window.addEventListener("keydown", (e) => {
    // Name input typing — intercept all keys when focused
    if (gc.state.nameFocused && !gc.state.paused && !gc.state.controlsOpen) {
      if (e.key === "Escape") {
        gc.state.nameFocused = false;
        gc.render();
        return;
      }
      if (e.key === "Enter") {
        gc.state.playerName   = gc.state.nameInput.trim() || "Box";
        gc.state.nameFocused  = false;
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
      if (gc.state.controlsOpen) { gc.state.controlsOpen = false; gc.render(); }
      else if (gc.state.paused)  { gc.state.paused = false;       gc.render(); }
    }
  });

  window.addEventListener("resize", () => {
    resizeCanvases();
    gc.render();
  });

  // ── cursor blink loop ─────────────────────────────────────────────────────────

  setInterval(() => {
    if (gc.state.nameFocused) gc.render();
  }, 530);

  // ── image loading ─────────────────────────────────────────────────────────────

  gc.logo.onload  = () => { gc.logoLoaded = true;  gc.render(); };
  gc.logo.onerror = () => { gc.logoLoaded = false; gc.render(); };

  gc.logo.src          = "/benchmark2/assets/logo.png";

  // ── startup ───────────────────────────────────────────────────────────────────

  resizeCanvases();
  gc.render();

  function gameLoop() {
  if (gc.state.currentScreen === "level" && !gc.state.paused) {
      input.update();
      player.update();
      gc.render(); // force redraw after movement
    }

    requestAnimationFrame(gameLoop);
  }

  gameLoop();
};
