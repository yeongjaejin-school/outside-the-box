import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';
import { LEVEL_COUNT } from '../levelData';

export const drawLevelSelect = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx = w / 2;
  const t  = getTheme(state);

  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 36px ${displayFont}`;
  ctx.fillText("LEVEL SELECT", cx, topBoxY + topBoxHeight * 0.1);

  // 5-column × 2-row grid
  const cols  = 5;
  const tileW = topBoxWidth  * 0.13;
  const tileH = topBoxHeight * 0.24;
  const hGap  = (topBoxWidth * 0.78 - tileW * cols) / (cols - 1);
  const vGap  = topBoxHeight * 0.07;
  const gridW = tileW * cols + hGap * (cols - 1);
  const gridX = cx - gridW / 2;
  const gridY = topBoxY + topBoxHeight * 0.21;

  for (let i = 0; i < LEVEL_COUNT; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const tx  = gridX + col * (tileW + hGap);
    const ty  = gridY + row * (tileH + vGap);
    const lvl = i + 1;

    ctx.strokeStyle  = t.stroke;
    ctx.lineWidth    = 3;
    ctx.strokeRect(tx, ty, tileW, tileH);

    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";

    ctx.font = `bold 28px ${displayFont}`;
    ctx.fillText(`${lvl}`, tx + tileW / 2, ty + tileH * 0.38);

    ctx.font      = `12px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText(`LEVEL ${lvl}`, tx + tileW / 2, ty + tileH * 0.7);

    const captured = lvl;
    gc.hitAreas.push({
      x: tx, y: ty, w: tileW, h: tileH,
      action: () => {
        state.currentLevel  = captured;
        state.playMode      = "levelselect";
        state.gameOver      = false;
        state.lives         = 3;
        state.currentScreen = "level";
        gc.render();
      },
    });
  }

  // Back button
  const backW = 150;
  const backH = 42;
  const backX = topBoxX + topBoxWidth * 0.04;
  const backY = topBoxY + topBoxHeight * 0.82;
  drawButton(gc, "← BACK", backX, backY, backW, backH, () => {
    gc.resetPlayerName();
    state.currentScreen = "mainmenu";
    gc.render();
  }, 18);
};
