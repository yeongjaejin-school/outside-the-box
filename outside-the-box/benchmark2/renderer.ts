import { GameContext } from "./types";
import { getTheme } from "./theme";
import { getLayout, getMovementLayout } from "./layout";
import { LEVEL_DATA } from "./levelData";

export const isSkippable = (currentLevel: number): boolean => {
  const entry = LEVEL_DATA[currentLevel - 1];
  return entry ? entry.skippable !== false : true;
};

export const drawBackground = (gc: GameContext) => {
  const { ctx, state } = gc;
  const t = getTheme(state);
  document.body.style.background = t.bg;
  ctx.fillStyle = t.bg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

export const drawLogo = (gc: GameContext) => {
  const { ctx, state, logo, logoLoaded, displayFont } = gc;
  const { w, logoY } = getLayout(ctx);
  if (logoLoaded && logo.naturalWidth > 0) {
    const logoW = w * 0.15;
    const logoH = logoW * (logo.naturalHeight / logo.naturalWidth);
    ctx.drawImage(logo, w / 2 - logoW / 2, logoY - logoH / 2, logoW, logoH);
  } else {
    ctx.fillStyle = getTheme(state).fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 54px ${displayFont}`;
    ctx.fillText("Outside-the-Box", w / 2, logoY);
  }
};

export const drawGameplayFrame = (gc: GameContext) => {
  const { ctx, state, gameplayFrame, gameplayFrameLoaded } = gc;
  const { frameX, frameY, frameW, frameH, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t = getTheme(state);

  if (gameplayFrameLoaded && gameplayFrame.naturalWidth > 0) {
    ctx.drawImage(gameplayFrame, 440, 180, 688, 572, frameX, frameY, frameW, frameH);
    ctx.fillStyle = t.bg;
    ctx.fillRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
  } else {
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
  }
};

export const drawButton = (
  gc: GameContext,
  label: string,
  x: number,
  y: number,
  w: number,
  h: number,
  action: () => void,
  fontSize = 22,
) => {
  const { ctx, state, displayFont } = gc;
  const t = getTheme(state);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, w, h);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold ${fontSize}px ${displayFont}`;
  ctx.fillText(label, x + w / 2, y + h / 2, w - 16);
  gc.hitAreas.push({ x, y, w, h, action });
};

export const drawBottomPanel = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const isMovementLevel = state.currentScreen === "level" && state.currentLevel >= 11 && state.currentLevel <= 20;

  if (isMovementLevel) {
    const movementLayout = getMovementLayout(ctx);
    const t = getTheme(state);
    const currentAnswer = gc.getCurrentAnswer() || "(empty)";
    const timerText = `${String(gc.timeLeftSeconds).padStart(2, "0")}s`;
    const timerColor = gc.timeLeftSeconds < 10 ? "#ff5252" : t.fgMid;
    const submitW = 160;
    const submitH = 48;
    const submitX = movementLayout.bottomFrameWidth - submitW - 32;
    const submitY = movementLayout.bottomFrameY + movementLayout.bottomFrameHeight / 2 - submitH / 2;
    const resetW = 100;
    const resetH = 34;
    const resetX = movementLayout.bottomFrameWidth - resetW - 46;
    const resetY = movementLayout.bottomFrameY + 28;

    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(
      movementLayout.bottomFrameX,
      movementLayout.bottomFrameY,
      movementLayout.bottomFrameWidth,
      movementLayout.bottomFrameHeight,
    );

    ctx.fillStyle = t.fg;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = `bold 28px ${displayFont}`;
    ctx.fillText("Arrange The Blocks", 28, movementLayout.bottomFrameY + 22, movementLayout.bottomFrameWidth * 0.5);

    ctx.font = `17px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText(`Quiz: ${gc.quizPrompt}`, 28, movementLayout.bottomFrameY + 62, movementLayout.bottomFrameWidth * 0.56);

    ctx.font = `15px ${bodyFont}`;
    ctx.fillStyle = timerColor;
    ctx.fillText(`Time Left: ${timerText}`, 28, movementLayout.bottomFrameY + 102, 180);

    ctx.fillStyle = t.fg;
    ctx.fillText(`Your Answer: ${currentAnswer}`, 28, movementLayout.bottomFrameY + 130, movementLayout.bottomFrameWidth * 0.52);

    drawButton(gc, "RESET", resetX, resetY, resetW, resetH, () => {
      gc.resetMovementLevel();
    }, 14);

    drawButton(gc, "SUBMIT", submitX, submitY, submitW, submitH, () => {
      gc.submitMovementAnswer();
    }, 18);
    return;
  }

  const { frameX, frameW, bottomBoxY, bottomBoxHeight } = getLayout(ctx);
  const t = getTheme(state);
  const contentX = frameX;
  const contentWidth = frameW;

  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 4;
  ctx.strokeRect(contentX, bottomBoxY, contentWidth, bottomBoxHeight);

  const panelCY = bottomBoxY + bottomBoxHeight / 2;
  const robotCX = contentX + contentWidth * 0.07;
  const headW = 50;
  const headH = 42;
  const headX = robotCX - headW / 2;
  const headY = panelCY - headH / 2 - 6;

  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(robotCX, headY);
  ctx.lineTo(robotCX, headY - 11);
  ctx.stroke();
  ctx.fillStyle = t.fg;
  ctx.beginPath();
  ctx.arc(robotCX, headY - 15, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(headX, headY, headW, headH);

  const eyeY = headY + headH * 0.28;
  ctx.fillStyle = state.darkMode ? "#88bbff" : "#3366cc";
  ctx.fillRect(headX + headW * 0.16, eyeY, 11, 9);
  ctx.fillRect(headX + headW * 0.56, eyeY, 11, 9);

  const mouthY = headY + headH * 0.65;
  ctx.fillStyle = t.fgDim;
  for (let i = 0; i < 5; i++) {
    ctx.fillRect(headX + headW * 0.13 + i * 8, mouthY, 5, 5);
  }

  ctx.fillStyle = t.fgDim;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.font = `bold 9px ${displayFont}`;
  ctx.fillText("EXAM  GUIDE", robotCX, headY + headH + 7, headW + 16);

  const divX = contentX + contentWidth * 0.155;
  ctx.strokeStyle = t.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(divX, bottomBoxY + bottomBoxHeight * 0.10);
  ctx.lineTo(divX, bottomBoxY + bottomBoxHeight * 0.90);
  ctx.stroke();

  const speechX = divX + contentWidth * 0.025;
  const speechW = contentX + contentWidth - speechX - contentWidth * 0.02;

  const levelData = state.currentScreen === "level"
    ? LEVEL_DATA[state.currentLevel - 1]
    : { title: state.storyTitle, lines: state.storyLines };

  ctx.fillStyle = t.fgDim;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.font = `bold 11px ${displayFont}`;
  ctx.fillText("EXAM GUIDE  »", speechX, bottomBoxY + bottomBoxHeight * 0.10);

  const fullLines = levelData.lines;
  const totalChars = fullLines.reduce((sum, line) => sum + line.length, 0);
  const isTyping = state.guideReveal < totalChars;

  let charsLeft = Math.max(0, state.guideReveal);
  const displayLines: string[] = [];
  for (const line of fullLines) {
    if (charsLeft <= 0) {
      break;
    }
    const shown = Math.min(charsLeft, line.length);
    displayLines.push(line.slice(0, shown));
    charsLeft -= shown;
  }

  if (displayLines.length > 0 && (isTyping || state.guideCursor)) {
    displayLines[displayLines.length - 1] += " |";
  }

  const lineGap = 27;
  const totalH = fullLines.length * lineGap;
  const startY = panelCY - totalH / 2 + lineGap * 0.1;

  ctx.fillStyle = t.fg;
  ctx.textBaseline = "middle";
  ctx.font = `18px ${bodyFont}`;
  for (let i = 0; i < displayLines.length; i++) {
    ctx.fillText(displayLines[i], speechX, startY + i * lineGap, speechW);
  }
};

export const drawLevelHUD = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const isMovementLevel = state.currentScreen === "level" && state.currentLevel >= 11 && state.currentLevel <= 20;
  if (isMovementLevel) {
    const movementLayout = getMovementLayout(ctx);
    const t = getTheme(state);
    const padX = 28;
    const padY = 28;

    ctx.fillStyle = t.fg;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = `bold 24px ${displayFont}`;
    ctx.fillText(`Q.${state.currentLevel}`, movementLayout.gameFrameX + padX, movementLayout.gameFrameY + padY);

    const pauseW = 48;
    const pauseH = 34;
    const pauseX = movementLayout.gameFrameX + movementLayout.gameFrameWidth - padX - pauseW;
    const pauseY = movementLayout.gameFrameY + padY - pauseH / 2;
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 2;
    ctx.strokeRect(pauseX, pauseY, pauseW, pauseH);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 16px ${displayFont}`;
    ctx.fillText("II", pauseX + pauseW / 2, pauseY + pauseH / 2);
    gc.hitAreas.push({
      x: pauseX,
      y: pauseY,
      w: pauseW,
      h: pauseH,
      action: () => {
        state.paused = true;
        gc.render();
      },
    });

    const heartSize = 24;
    const heartGap = 6;
    const livesY = movementLayout.gameFrameY + movementLayout.gameFrameHeight - padY;
    const totalW = 3 * heartSize + 2 * heartGap;
    const livesX = movementLayout.gameFrameX + movementLayout.gameFrameWidth - padX - totalW;
    ctx.textBaseline = "middle";
    ctx.font = `${heartSize}px sans-serif`;
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = i < state.lives ? "#e03030" : state.darkMode ? "#444444" : "#bbbbbb";
      ctx.textAlign = "left";
      ctx.fillText("\u2665", livesX + i * (heartSize + heartGap), livesY);
    }
    return;
  }

  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const padX = topBoxWidth * 0.05;
  const padY = topBoxHeight * 0.08;
  const t = getTheme(state);

  ctx.fillStyle = t.fg;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = `bold 26px ${displayFont}`;
  ctx.fillText(`Q.${state.currentLevel}`, topBoxX + padX, topBoxY + padY);

  const pauseW = 48;
  const pauseH = 34;
  const pauseX = topBoxX + topBoxWidth - padX - pauseW;
  const pauseY = topBoxY + padY - pauseH / 2;
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(pauseX, pauseY, pauseW, pauseH);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 16px ${displayFont}`;
  ctx.fillText("II", pauseX + pauseW / 2, pauseY + pauseH / 2);
  gc.hitAreas.push({
    x: pauseX,
    y: pauseY,
    w: pauseW,
    h: pauseH,
    action: () => {
      state.paused = true;
      gc.render();
    },
  });

  const skipsUnlocked = state.currentLevel >= 9;
  const heartSize = 24;
  const heartGap = 6;
  const livesY = topBoxY + topBoxHeight - (skipsUnlocked ? padY * 3.2 : padY * 1.2);
  const totalHW = 3 * heartSize + 2 * heartGap;
  const livesX = topBoxX + topBoxWidth - padX - totalHW;

  ctx.textBaseline = "middle";
  ctx.font = `${heartSize}px sans-serif`;
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle =
      i < state.lives ? "#e03030" : state.darkMode ? "#444444" : "#bbbbbb";
    ctx.textAlign = "left";
    ctx.fillText("\u2665", livesX + i * (heartSize + heartGap), livesY);
  }

  if (skipsUnlocked) {
    const skipsY = topBoxY + topBoxHeight - padY * 1.2;
    const skipsW = 110;
    const skipsH = 28;
    const skipsX = topBoxX + topBoxWidth - padX - skipsW;
    const canSkip = isSkippable(state.currentLevel) && state.skips > 0;
    const skipLabel = `SKIP  x${state.skips}`;

    ctx.strokeStyle = canSkip ? t.stroke : t.divider;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(skipsX, skipsY - skipsH / 2, skipsW, skipsH);
    ctx.fillStyle = canSkip ? t.fg : t.fgDim;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 13px ${displayFont}`;
    ctx.fillText(skipLabel, skipsX + skipsW / 2, skipsY, skipsW - 8);

    if (canSkip) {
      gc.hitAreas.push({
        x: skipsX,
        y: skipsY - skipsH / 2,
        w: skipsW,
        h: skipsH,
        action: () => {
          state.skips--;
          state.levelSubPhase = "";
          state.levelTimerEnd = 0;
          state.currentLevel++;
          gc.render();
        },
      });
    }
  }
};
