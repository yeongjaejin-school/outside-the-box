import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawImgButton }  from '../renderer';

export const drawMainMenu = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { w, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx = w / 2;
  const t  = getTheme(state);

  const btnW = topBoxWidth * 0.38;
  const btnX = cx - btnW / 2;
  const gap  = 20;

  // Each button's height is driven by its own image aspect ratio
  const h1 = btnW * (197 / 1026);
  const h2 = btnW * (206 / 951);

  const totalH = h1 + h2 + gap;
  const y1 = topBoxY + (topBoxHeight - totalH) / 2;
  const y2 = y1 + h1 + gap;

  drawImgButton(gc, gc.startExamImg, gc.startExamLoaded,
    255, 378, 1026, 197, btnX, y1, btnW,
    () => {
      state.currentLevel  = 1;
      state.lives         = 3;
      state.paused        = false;
      state.gameOver      = false;
      state.skips         = 0;
      state.levelSubPhase = "";
      state.playMode      = "play";
      state.examStartTime = 0;
      state.currentScreen = "level";
      gc.render();
    },
    "START EXAM",
  );

  drawImgButton(gc, gc.controlsImg, gc.controlsLoaded,
    294, 379, 951, 206, btnX, y2, btnW,
    () => { state.controlsOpen = true; gc.render(); },
    "CONTROLS",
  );
};
