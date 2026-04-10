import { GameContext } from "./types";
import { getTheme } from "./theme";
import { getLayout } from "./layout";
import { LEVEL_DATA } from "./levelData";

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
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  if (gameplayFrameLoaded && gameplayFrame.naturalWidth > 0) {
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
    ctx.strokeStyle = getTheme(state).stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
  }
};

/** Draw a labelled button and register it as a hit area. */
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
  const { w, contentX, contentWidth, bottomBoxY, bottomBoxHeight } =
    getLayout(ctx);
  const t = getTheme(state);

  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 4;
  ctx.strokeRect(contentX, bottomBoxY, contentWidth, bottomBoxHeight);

  const centerX = w / 2;
  const textWidth = contentWidth * 0.74;

  const levelData =
    state.currentScreen === "level"
      ? LEVEL_DATA[state.currentLevel - 1]
      : { title: state.storyTitle, lines: state.storyLines };

  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  ctx.font = `bold 30px ${displayFont}`;
  ctx.fillText(levelData.title, centerX, bottomBoxY + 18, textWidth);

  ctx.font = `20px ${bodyFont}`;
  const lineGap = 30;
  for (let i = 0; i < levelData.lines.length; i++) {
    ctx.fillText(
      levelData.lines[i],
      centerX,
      bottomBoxY + 68 + i * lineGap,
      textWidth,
    );
  }
};

export const drawLevelHUD = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const padX = topBoxWidth * 0.05;
  const padY = topBoxHeight * 0.08;
  const t = getTheme(state);

  // Q.X — top left
  ctx.fillStyle = t.fg;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = `bold 26px ${displayFont}`;
  ctx.fillText(`Q.${state.currentLevel}`, topBoxX + padX, topBoxY + padY);

  // Pause button — top right
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

  // Lives — bottom right
  const heartSize = 24;
  const heartGap = 6;
  const livesY = topBoxY + topBoxHeight - padY;
  const totalW = 3 * heartSize + 2 * heartGap;
  const livesX = topBoxX + topBoxWidth - padX - totalW;

  ctx.textBaseline = "middle";
  ctx.font = `${heartSize}px sans-serif`;
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle =
      i < state.lives ? "#e03030" : state.darkMode ? "#444444" : "#bbbbbb";
    ctx.textAlign = "left";
    ctx.fillText("♥", livesX + i * (heartSize + heartGap), livesY);
  }
};
