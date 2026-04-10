import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

export const drawMainMenu = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { w, topInnerX, topInnerY, topInnerWidth, topInnerHeight } = getLayout(ctx);
  const cx = w / 2;
  const t  = getTheme(state);

  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";

  ctx.font = `bold 42px ${displayFont}`;
  ctx.fillText("MAIN MENU", cx, topInnerY + topInnerHeight * 0.15);

  const btnW   = Math.min(300, topInnerWidth * 0.78);
  const btnH   = 50;
  const btnX   = cx - btnW / 2;
  const startY = topInnerY + topInnerHeight * 0.32;
  const stride = btnH + 14;

  drawButton(gc, "START EXAM", btnX, startY, btnW, btnH, () => {
    state.currentLevel = 1;
    state.lives        = 3;
    state.paused       = false;
    state.gameOver     = false;
    state.playMode     = "play";
    state.currentScreen = "level";
    gc.render();
  });

  drawButton(gc, "LEVEL SELECT", btnX, startY + stride, btnW, btnH, () => {
    state.currentScreen = "levelselect";
    gc.render();
  });

  drawButton(gc, "CONTROLS", btnX, startY + stride * 2, btnW, btnH, () => {
    state.controlsOpen = true;
    gc.render();
  });
};
