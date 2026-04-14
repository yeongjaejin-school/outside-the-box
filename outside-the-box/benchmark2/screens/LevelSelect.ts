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

  // 6-column × 5-row grid (30 levels)
  const cols  = 6;
  const tileW = topBoxWidth  * 0.118;
  const tileH = topBoxHeight * 0.116;
  const hGap  = (topBoxWidth * 0.82 - tileW * cols) / (cols - 1);
  const vGap  = topBoxHeight * 0.028;
  const gridW = tileW * cols + hGap * (cols - 1);
  const gridX = cx - gridW / 2;
  const gridY = topBoxY + topBoxHeight * 0.17;

  for (let i = 0; i < LEVEL_COUNT; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const tx  = gridX + col * (tileW + hGap);
    const ty  = gridY + row * (tileH + vGap);
    const lvl = i + 1;

    const isWip = false;

    ctx.strokeStyle  = isWip ? t.divider : t.stroke;
    ctx.lineWidth    = isWip ? 1 : 2.5;
    ctx.strokeRect(tx, ty, tileW, tileH);

    ctx.fillStyle    = isWip ? t.fgDim : t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";

    ctx.font = `bold 18px ${displayFont}`;
    ctx.fillText(`${lvl}`, tx + tileW / 2, ty + tileH * 0.40);

    ctx.font      = `9px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText(`Q.${lvl}`, tx + tileW / 2, ty + tileH * 0.76);

    const captured = lvl;
    gc.hitAreas.push({
      x: tx, y: ty, w: tileW, h: tileH,
      action: () => {
        state.currentLevel    = captured;
        state.playMode        = "levelselect";
        state.gameOver        = false;
        state.lives           = 3;
        state.levelTimerEnd   = 0;
        state.levelSubPhase   = "";
        state.currentScreen   = "level";
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
