console.log("BENCHMARK 2 MAIN LOADED");

import { GameContext, GameState } from './types';
import { drawBackground, drawLogo, drawGameplayFrame, drawBottomPanel } from './renderer';
import { LEVEL_DATA } from './levelData';
import { drawMainMenu }       from './screens/MainMenu';
import { drawLevelSelect }    from './screens/LevelSelect';
import { drawLevel }          from './screens/Level';
import { drawPauseOverlay }   from './overlays/PauseOverlay';
import { drawControlsOverlay } from './overlays/ControlsOverlay';
import { drawGameOverOverlay } from './overlays/GameOverOverlay';

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
    storyTitle:    "Exam Briefing",
    storyLines: [
      "Welcome, candidate. I will be guiding you through this assessment.",
      "Complete all questions to earn your OtB Thinking Certificate.",
      "Unconventional thinking is not just permitted — it is required.",
    ],
    playerName:  "Box",
    nameInput:   "",
    nameFocused: false,
    playMode:       "play",
    gameOver:       false,
    levelTimerEnd:  0,
    skips:          0,
    levelSubPhase:  "",
    guideTarget:    "",
    guideReveal:    0,
    guideCursor:    false,
  };

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
    mouseX:      0,
    mouseY:      0,
    mouseDown:   false,
    keysDown:    new Set<string>(),
    wheelDeltaY: 0,
  };

  gc.resetPlayerName = () => {
    gc.state.playerName    = "Box";
    gc.state.nameInput     = "";
    gc.state.nameFocused   = false;
    gc.state.levelTimerEnd = 0;
    gc.state.skips         = 0;
    gc.state.levelSubPhase = "";
  };

  gc.loseLife = () => {
    gc.state.lives--;
    if (gc.state.lives <= 0) {
      gc.state.lives    = 0;
      gc.state.gameOver = true;
    }
    gc.render();
  };

  // Helper: resolve the current lines the guide should be speaking
  const resolveGuideLines = (): string[] => {
    if (gc.state.currentScreen === "level") {
      return LEVEL_DATA[gc.state.currentLevel - 1]?.lines ?? [];
    }
    return gc.state.storyLines;
  };

  gc.render = () => {
    gc.hitAreas = [];

    // Detect guide text change → reset typewriter
    const newTarget = resolveGuideLines().join("\n");
    if (newTarget !== gc.state.guideTarget) {
      gc.state.guideTarget = newTarget;
      gc.state.guideReveal = 0;
    }

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
    gc.mouseX = x;
    gc.mouseY = y;
    const over = gc.hitAreas.some(
      (a) => !a.noCursor && x >= a.x && x <= a.x + a.w && y >= a.y && y <= a.y + a.h,
    );
    gameCanvas.style.cursor = over ? "pointer" : "default";
    // Re-render during drag (for eraser) and for button flee (level 5)
    if (gc.mouseDown) gc.render();
  });

  gameCanvas.addEventListener("mousedown", (e) => {
    const { x, y } = toCanvas(e);
    gc.mouseX    = x;
    gc.mouseY    = y;
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

  window.addEventListener("keyup", (e) => {
    gc.keysDown.delete(e.key);
  });

  window.addEventListener("resize", () => {
    resizeCanvases();
    gc.render();
  });

  // ── typewriter loop ───────────────────────────────────────────────────────────

  setInterval(() => {
    const totalChars = resolveGuideLines().reduce((s, l) => s + l.length, 0);
    if (gc.state.guideReveal < totalChars) {
      gc.state.guideReveal++;
      gc.render();
    }
  }, 22);

  // ── cursor blink loop ─────────────────────────────────────────────────────────

  setInterval(() => {
    gc.state.guideCursor = !gc.state.guideCursor;
    const totalChars = resolveGuideLines().reduce((s, l) => s + l.length, 0);
    // Only re-render for cursor blink once typewriter is done
    if (gc.state.guideReveal >= totalChars) gc.render();
    // Also handle name input cursor
    if (gc.state.nameFocused) gc.render();
  }, 530);

  // ── image loading ─────────────────────────────────────────────────────────────

  gc.logo.onload  = () => { gc.logoLoaded = true;  gc.render(); };
  gc.logo.onerror = () => { gc.logoLoaded = false; gc.render(); };

  gc.gameplayFrame.onload  = () => { gc.gameplayFrameLoaded = true;  gc.render(); };
  gc.gameplayFrame.onerror = () => { gc.gameplayFrameLoaded = false; gc.render(); };

  gc.logo.src          = "/benchmark2/assets/logo.png";
  gc.gameplayFrame.src = "/benchmark2/assets/gameplay-frame.png";

  // ── startup ───────────────────────────────────────────────────────────────────

  resizeCanvases();
  gc.render();
};
