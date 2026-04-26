import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton, drawImgButton }  from '../renderer';

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

  drawImgButton(gc, gc.startExamImg, gc.startExamLoaded,
    255, 378, 1026, 197, btnX, startY, btnW,
    () => {
      state.currentLevel  = 1;
      state.lives         = 3;
      state.paused        = false;
      state.gameOver      = false;
      state.skips         = 0;
      state.levelSubPhase = "";
      state.playMode      = "play";
      state.currentScreen = "level";
      gc.render();
    },
    "START EXAM",
  );

  drawImgButton(gc, gc.levelSelectImg, gc.levelSelectLoaded,
    247, 337, 1044, 217, btnX, startY + stride, btnW,
    () => { state.currentScreen = "levelselect"; gc.render(); },
    "LEVEL SELECT",
  );

  drawImgButton(gc, gc.controlsImg, gc.controlsLoaded,
    294, 379, 951, 206, btnX, startY + stride * 2, btnW,
    () => { state.controlsOpen = true; gc.render(); },
    "CONTROLS",
  );
};
