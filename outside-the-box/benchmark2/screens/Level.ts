import { GameContext }    from '../types';
import { getTheme }       from '../theme';
import { getLayout }      from '../layout';
import { drawButton, drawLevelHUD } from '../renderer';
import { drawNameEntry }  from '../levels/Level1';
import { drawLevel2 }     from '../levels/Level2';
import { drawLevel3 }     from '../levels/Level3';
import { drawLevel4 }     from '../levels/Level4';
import { drawLevel5 }     from '../levels/Level5';
import { drawLevel6 }     from '../levels/Level6';
import { drawLevel7 }     from '../levels/Level7';
import { drawLevel8 }     from '../levels/Level8';
import { drawLevel9 }     from '../levels/Level9';
import { drawLevel21 }    from '../levels/Level21';
import { drawLevel22 }    from '../levels/Level22';
import { drawLevel23 }    from '../levels/Level23';
import { drawLevel24 }    from '../levels/Level24';
import { drawLevel25 }    from '../levels/Level25';
import { drawLevel26 }    from '../levels/Level26';
import { drawLevel27 }    from '../levels/Level27';
import { drawLevel28 }    from '../levels/Level28';
import { drawLevel29 }    from '../levels/Level29';
import { drawLevel30 }    from '../levels/Level30';
import { LEVEL_COUNT }    from '../levelData';

export const drawLevel = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx  = w / 2;
  const lvl = state.currentLevel;
  const t   = getTheme(state);

  // Level 1 — name entry
  if (lvl === 1) {
    drawNameEntry(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 2 — arithmetic question
  if (lvl === 2) {
    drawLevel2(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 3 — click the dot
  if (lvl === 3) {
    drawLevel3(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 4 — don't click anything
  if (lvl === 4) {
    drawLevel4(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 5 — catch me if you can
  if (lvl === 5) {
    drawLevel5(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 6 — pong
  if (lvl === 6) {
    drawLevel6(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 7 — chalkboard counting
  if (lvl === 7) {
    drawLevel7(gc);
    drawLevelHUD(gc);
    return;
  }

  // Level 8 — stranger interaction (intentionally unlabeled, no Q.X HUD)
  if (lvl === 8) {
    drawLevel8(gc);
    return;
  }

  // Level 9 — calculus trick (answer is Q.9 label)
  if (lvl === 9) {
    drawLevel9(gc);
    drawLevelHUD(gc);
    return;
  }

  if (lvl === 21) { drawLevel21(gc); drawLevelHUD(gc); return; }
  if (lvl === 22) { drawLevel22(gc); drawLevelHUD(gc); return; }
  if (lvl === 23) { drawLevel23(gc); drawLevelHUD(gc); return; }
  if (lvl === 24) { drawLevel24(gc); drawLevelHUD(gc); return; }
  if (lvl === 25) { drawLevel25(gc); drawLevelHUD(gc); return; }
  if (lvl === 26) { drawLevel26(gc); drawLevelHUD(gc); return; }
  if (lvl === 27) { drawLevel27(gc); drawLevelHUD(gc); return; }
  if (lvl === 28) { drawLevel28(gc); drawLevelHUD(gc); return; }
  if (lvl === 29) { drawLevel29(gc); drawLevelHUD(gc); return; }
  if (lvl === 30) { drawLevel30(gc); drawLevelHUD(gc); return; }

  // Placeholder for unfinished levels
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";

  ctx.font = `bold 34px ${displayFont}`;
  ctx.fillText(`LEVEL ${lvl}`, cx, topBoxY + topBoxHeight * 0.16);

  ctx.font      = `22px ${bodyFont}`;
  ctx.fillStyle = t.fgMid;
  ctx.fillText("This level is under construction.", cx, topBoxY + topBoxHeight * 0.38, topBoxWidth * 0.6);

  ctx.font      = `16px ${bodyFont}`;
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Questions, choices, and interactions will be wired in here.", cx, topBoxY + topBoxHeight * 0.52, topBoxWidth * 0.6);

  // Nav row — level select pathway only
  if (state.playMode === "levelselect") {
    const navBtnH = 42;
    const navBtnW = 150;
    const navY    = topBoxY + topBoxHeight * 0.79;

    if (lvl > 1) {
      drawButton(gc, "← PREV", topBoxX + topBoxWidth * 0.05, navY, navBtnW, navBtnH, () => {
        state.currentLevel--;
        gc.render();
      }, 18);
    }

    drawButton(gc, "LEVEL SELECT", cx - navBtnW / 2, navY, navBtnW, navBtnH, () => {
      gc.resetPlayerName();
      state.currentScreen = "levelselect";
      gc.render();
    }, 16);

    if (lvl < LEVEL_COUNT) {
      drawButton(gc, "NEXT →", topBoxX + topBoxWidth * 0.77, navY, navBtnW, navBtnH, () => {
        state.currentLevel++;
        gc.render();
      }, 18);
    }
  }

  drawLevelHUD(gc);
};
