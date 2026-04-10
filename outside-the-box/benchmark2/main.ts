console.log("BENCHMARK 2 MAIN LOADED");

type GameScreen = "mainmenu" | "levelselect" | "level";

interface GameState {
  currentScreen: GameScreen;
  currentLevel: number;
  controlsOpen: boolean;
  storyTitle: string;
  storyLines: string[];
}

interface HitArea {
  x: number;
  y: number;
  w: number;
  h: number;
  action: () => void;
}

window.onload = () => {
  const gameCanvas = document.getElementById(
    "game-canvas",
  ) as HTMLCanvasElement | null;
  const debugCanvas = document.getElementById(
    "debug-canvas",
  ) as HTMLCanvasElement | null;
  const textCanvas = document.getElementById(
    "text-canvas",
  ) as HTMLCanvasElement | null;

  if (!gameCanvas || !debugCanvas || !textCanvas) {
    console.error("Missing one or more canvas elements.");
    return;
  }

  const ctx = gameCanvas.getContext("2d");
  if (!ctx) {
    console.error("Could not get 2D context.");
    return;
  }

  const logo = new Image();
  const gameplayFrame = new Image();
  let logoLoaded = false;
  let gameplayFrameLoaded = false;

  const state: GameState = {
    currentScreen: "mainmenu",
    currentLevel: 1,
    controlsOpen: false,
    storyTitle: "WELCOME TO OUTSIDE-THE-BOX",
    storyLines: [
      "Nothing in this world is as straightforward as it first appears.",
      "Each level presents what looks like a simple task, question, or instruction.",
      "But the obvious answer is often the wrong one.",
      "Read carefully. Think differently. Break the pattern.",
    ],
  };

  const LEVEL_COUNT = 10;

  let hitAreas: HitArea[] = [];

  const displayFont = `"Trebuchet MS", "Verdana", sans-serif`;
  const bodyFont = `"Trebuchet MS", "Arial", sans-serif`;

  // ── canvas helpers ──────────────────────────────────────────────────────────

  const resizeCanvases = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    gameCanvas.width  = debugCanvas.width  = w;
    gameCanvas.height = debugCanvas.height = h;
  };

  const getLayout = () => {
    const w = gameCanvas.width;
    const h = gameCanvas.height;

    const contentWidth = w * 0.84;
    const contentX = (w - contentWidth) / 2;
    const logoY = h * 0.08;

    const topBoxWidth = contentWidth;
    const topBoxHeight = h * 0.48;
    const topBoxX = contentX;
    const topBoxY = h * 0.18;

    // Safe content area inside the decorative frame
    const topInnerWidth = topBoxWidth * 0.42;
    const topInnerHeight = topBoxHeight * 0.62;
    const topInnerX = w / 2 - topInnerWidth / 2;
    const topInnerY = topBoxY + topBoxHeight * 0.16;

    const gap = h * 0.04;
    const bottomBoxY = topBoxY + topBoxHeight + gap;
    const bottomBoxHeight = h * 0.22;

    return {
      w,
      h,
      contentWidth,
      contentX,
      logoY,
      topBoxX,
      topBoxY,
      topBoxWidth,
      topBoxHeight,
      topInnerX,
      topInnerY,
      topInnerWidth,
      topInnerHeight,
      bottomBoxY,
      bottomBoxHeight,
    };
  };

  /** Map a mouse event's client position to canvas pixel coordinates. */
  const toCanvas = (e: MouseEvent) => {
    const rect = gameCanvas.getBoundingClientRect();
    const scaleX = gameCanvas.width / rect.width;
    const scaleY = gameCanvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  // ── drawing primitives ──────────────────────────────────────────────────────

  const drawBackground = () => {
    ctx.fillStyle = "#111111";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  };

  const drawLogo = () => {
    const { w, logoY } = getLayout();
    if (logoLoaded && logo.naturalWidth > 0) {
      const logoW = w * 0.15;
      const logoH = logoW * (logo.naturalHeight / logo.naturalWidth);
      ctx.drawImage(logo, w / 2 - logoW / 2, logoY - logoH / 2, logoW, logoH);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold 54px ${displayFont}`;
      ctx.fillText("Outside-the-Box", w / 2, logoY);
    }
  };

  const drawGameplayFrame = () => {
    const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout();
    if (gameplayFrameLoaded && gameplayFrame.naturalWidth > 0) {
      // Source region clipped to the actual frame corners (analysed: TL 440,180 → BR 1128,752)
      ctx.drawImage(
        gameplayFrame,
        440,
        180,
        688,
        572,
        topBoxX,
        topBoxY,
        topBoxWidth,
        topBoxHeight,
      );
    } else {
      // Fallback white border when image hasn't loaded
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.strokeRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
    }
  };

  const drawBottomPanel = () => {
    const { w, contentX, contentWidth, bottomBoxY, bottomBoxHeight } =
      getLayout();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.strokeRect(contentX, bottomBoxY, contentWidth, bottomBoxHeight);

    const centerX = w / 2;
    const textWidth = contentWidth * 0.74;

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    ctx.font = `bold 30px ${displayFont}`;
    ctx.fillText(state.storyTitle, centerX, bottomBoxY + 18, textWidth);

    ctx.font = `20px ${bodyFont}`;
    const lineGap = 30;
    for (let i = 0; i < state.storyLines.length; i++) {
      ctx.fillText(
        state.storyLines[i],
        centerX,
        bottomBoxY + 68 + i * lineGap,
        textWidth,
      );
    }
  };

  /** Draw a labelled button and register it as a hit area. */
  const drawButton = (
    label: string,
    x: number,
    y: number,
    w: number,
    h: number,
    action: () => void,
    fontSize = 22,
  ) => {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${fontSize}px ${displayFont}`;
    ctx.fillText(label, x + w / 2, y + h / 2, w - 16);
    hitAreas.push({ x, y, w, h, action });
  };

  // ── screens ─────────────────────────────────────────────────────────────────

  const drawMainMenu = () => {
    const { w, topInnerX, topInnerY, topInnerWidth, topInnerHeight } =
      getLayout();
    const cx = w / 2;

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = `bold 42px ${displayFont}`;
    ctx.fillText("MAIN MENU", cx, topInnerY + topInnerHeight * 0.08);

    ctx.font = `20px ${bodyFont}`;
    ctx.fillText(
      "A game built around misdirection, observation, and weird logic.",
      cx,
      topInnerY + topInnerHeight * 0.22,
      topInnerWidth * 0.95,
    );

    const btnW = Math.min(300, topInnerWidth * 0.78);
    const btnH = 50;
    const btnX = cx - btnW / 2;
    const startY = topInnerY + topInnerHeight * 0.36;
    const btnGap = 14;
    const stride = btnH + btnGap;

    drawButton("PLAY", btnX, startY, btnW, btnH, () => {
      state.currentLevel = 1;
      state.currentScreen = "level";
      render();
    });
    drawButton("LEVEL SELECT", btnX, startY + stride, btnW, btnH, () => {
      state.currentScreen = "levelselect";
      render();
    });
    drawButton("CONTROLS", btnX, startY + stride * 2, btnW, btnH, () => {
      state.controlsOpen = true;
      render();
    });
  };

  const drawLevelSelect = () => {
    const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout();
    const cx = w / 2;

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 36px ${displayFont}`;
    ctx.fillText("LEVEL SELECT", cx, topBoxY + topBoxHeight * 0.1);

    // 5-column × 2-row grid
    const cols = 5;
    const rows = 2;
    const tileW = topBoxWidth * 0.13;
    const tileH = topBoxHeight * 0.24;
    const hGap = (topBoxWidth * 0.78 - tileW * cols) / (cols - 1);
    const vGap = topBoxHeight * 0.07;
    const gridW = tileW * cols + hGap * (cols - 1);
    const gridX = cx - gridW / 2;
    const gridY = topBoxY + topBoxHeight * 0.21;

    for (let i = 0; i < LEVEL_COUNT; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const tx = gridX + col * (tileW + hGap);
      const ty = gridY + row * (tileH + vGap);
      const lvl = i + 1;

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.strokeRect(tx, ty, tileW, tileH);

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = `bold 28px ${displayFont}`;
      ctx.fillText(`${lvl}`, tx + tileW / 2, ty + tileH * 0.38);

      ctx.font = `12px ${bodyFont}`;
      ctx.fillStyle = "#bbbbbb";
      ctx.fillText(`LEVEL ${lvl}`, tx + tileW / 2, ty + tileH * 0.7);

      const captured = lvl;
      hitAreas.push({
        x: tx,
        y: ty,
        w: tileW,
        h: tileH,
        action: () => {
          state.currentLevel = captured;
          state.currentScreen = "level";
          render();
        },
      });
    }

    // Back button
    const backH = 42;
    const backW = 150;
    const backX = topBoxX + topBoxWidth * 0.04;
    const backY = topBoxY + topBoxHeight * 0.82;
    drawButton(
      "← BACK",
      backX,
      backY,
      backW,
      backH,
      () => {
        state.currentScreen = "mainmenu";
        render();
      },
      18,
    );
  };

  const drawLevel = () => {
    const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout();
    const cx = w / 2;
    const lvl = state.currentLevel;

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = `bold 34px ${displayFont}`;
    ctx.fillText(`LEVEL ${lvl}`, cx, topBoxY + topBoxHeight * 0.16);

    ctx.font = `22px ${bodyFont}`;
    ctx.fillStyle = "#dddddd";
    ctx.fillText(
      "This level is under construction.",
      cx,
      topBoxY + topBoxHeight * 0.38,
      topBoxWidth * 0.6,
    );

    ctx.font = `16px ${bodyFont}`;
    ctx.fillStyle = "#888888";
    ctx.fillText(
      "Questions, choices, and interactions will be wired in here.",
      cx,
      topBoxY + topBoxHeight * 0.52,
      topBoxWidth * 0.6,
    );

    // ── bottom nav row ──
    const navBtnH = 42;
    const navBtnW = 150;
    const navY = topBoxY + topBoxHeight * 0.79;

    // PREV (only if not first level)
    if (lvl > 1) {
      drawButton(
        "← PREV",
        topBoxX + topBoxWidth * 0.05,
        navY,
        navBtnW,
        navBtnH,
        () => {
          state.currentLevel--;
          render();
        },
        18,
      );
    }

    // Centre: back to level select
    drawButton(
      "LEVEL SELECT",
      cx - navBtnW / 2,
      navY,
      navBtnW,
      navBtnH,
      () => {
        state.currentScreen = "levelselect";
        render();
      },
      16,
    );

    // NEXT (only if not last level)
    if (lvl < LEVEL_COUNT) {
      drawButton(
        "NEXT →",
        topBoxX + topBoxWidth * 0.77,
        navY,
        navBtnW,
        navBtnH,
        () => {
          state.currentLevel++;
          render();
        },
        18,
      );
    }
  };

  const drawControlsOverlay = () => {
    const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout();

    // Overlay rect — slightly inset from the playing field
    const pad = topBoxWidth * 0.05;
    const ox = topBoxX + pad;
    const oy = topBoxY + pad;
    const ow = topBoxWidth - pad * 2;
    const oh = topBoxHeight - pad * 2;
    const cx = ox + ow / 2;

    // Semi-transparent dark fill (game shows behind it)
    ctx.fillStyle = "rgba(10, 10, 10, 0.88)";
    ctx.fillRect(ox, oy, ow, oh);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.strokeRect(ox, oy, ow, oh);

    // Title
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 30px ${displayFont}`;
    ctx.fillText("BASIC CONTROLS", cx, oy + oh * 0.11);

    // Divider
    ctx.strokeStyle = "#444444";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ox + ow * 0.06, oy + oh * 0.2);
    ctx.lineTo(ox + ow * 0.94, oy + oh * 0.2);
    ctx.stroke();

    // Controls list
    const controls = [
      { key: "W / A / S / D", desc: "Move / Navigate" },
      { key: "CLICK", desc: "Interact / Select answer" },
      { key: "ESC", desc: "Close this panel" },
    ];

    const listY = oy + oh * 0.29;
    const rowH = oh * 0.15;
    const keyBoxW = ow * 0.3;
    const keyBoxH = rowH * 0.7;
    const keyBoxX = ox + ow * 0.08;
    const descX = ox + ow * 0.5;

    for (let i = 0; i < controls.length; i++) {
      const rowY = listY + i * rowH;
      const boxCenterY = rowY + keyBoxH / 2;

      // Key pill
      ctx.fillStyle = "#2a2a2a";
      ctx.strokeStyle = "#666666";
      ctx.lineWidth = 1;
      ctx.fillRect(keyBoxX, rowY, keyBoxW, keyBoxH);
      ctx.strokeRect(keyBoxX, rowY, keyBoxW, keyBoxH);

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold 16px ${displayFont}`;
      ctx.fillText(
        controls[i].key,
        keyBoxX + keyBoxW / 2,
        boxCenterY,
        keyBoxW - 8,
      );

      // Description
      ctx.fillStyle = "#cccccc";
      ctx.textAlign = "left";
      ctx.font = `17px ${bodyFont}`;
      ctx.fillText(controls[i].desc, descX, boxCenterY);
    }

    // Note
    ctx.fillStyle = "#666666";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `13px ${bodyFont}`;
    ctx.fillText("Controls may vary between levels.", cx, oy + oh * 0.84);

    // Close button — clear all hit areas first so underlying buttons are blocked
    hitAreas = [];
    const closeW = 140;
    const closeH = 40;
    drawButton(
      "CLOSE  ✕",
      cx - closeW / 2,
      oy + oh * 0.9,
      closeW,
      closeH,
      () => {
        state.controlsOpen = false;
        render();
      },
      17,
    );
  };

  // ── render ──────────────────────────────────────────────────────────────────

  const render = () => {
    hitAreas = [];
    drawBackground();
    drawLogo();
    drawGameplayFrame();

    switch (state.currentScreen) {
      case "mainmenu":
        drawMainMenu();
        break;
      case "levelselect":
        drawLevelSelect();
        break;
      case "level":
        drawLevel();
        break;
    }

    drawBottomPanel();

    if (state.controlsOpen) drawControlsOverlay();
  };

  // ── input ────────────────────────────────────────────────────────────────────

  gameCanvas.addEventListener("click", (e) => {
    const { x, y } = toCanvas(e);
    const rect = gameCanvas.getBoundingClientRect();
    console.log(
      `[click] client(${e.clientX}, ${e.clientY}) → canvas(${x.toFixed(1)}, ${y.toFixed(1)}) | canvasAttr=${gameCanvas.width}x${gameCanvas.height} | cssRect=${rect.width.toFixed(0)}x${rect.height.toFixed(0)}`,
    );
    console.log(
      `[click] hitAreas(${hitAreas.length}):`,
      hitAreas.map(
        (a) =>
          `x${a.x.toFixed(0)} y${a.y.toFixed(0)} w${a.w.toFixed(0)} h${a.h.toFixed(0)}`,
      ),
    );
    for (const area of hitAreas) {
      if (
        x >= area.x &&
        x <= area.x + area.w &&
        y >= area.y &&
        y <= area.y + area.h
      ) {
        area.action();
        break;
      }
    }
  });

  gameCanvas.addEventListener("mousemove", (e) => {
    const { x, y } = toCanvas(e);
    const over = hitAreas.some(
      (a) => x >= a.x && x <= a.x + a.w && y >= a.y && y <= a.y + a.h,
    );
    gameCanvas.style.cursor = over ? "pointer" : "default";
  });

  // ── startup ──────────────────────────────────────────────────────────────────

  resizeCanvases();
  render();

  logo.onload = () => {
    logoLoaded = true;
    render();
  };
  logo.onerror = () => {
    logoLoaded = false;
    render();
  };
  gameplayFrame.onload = () => {
    gameplayFrameLoaded = true;
    render();
  };
  gameplayFrame.onerror = () => {
    gameplayFrameLoaded = false;
    render();
  };

  logo.src = "/benchmark2/assets/logo.png";
  gameplayFrame.src = "/benchmark2/assets/gameplay-frame.png";

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.controlsOpen) {
      state.controlsOpen = false;
      render();
    }
  });

  window.addEventListener("resize", () => {
    resizeCanvases();
    render();
  });
};
