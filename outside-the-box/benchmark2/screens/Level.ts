import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout } from "../layout";
import { drawButton, drawLevelHUD } from "../renderer";
import { drawNameEntry } from "../levels/Level1";
import { drawLevel2 } from "../levels/Level2";
import { drawLevel3 } from "../levels/Level3";
import { LEVEL_COUNT } from "../levelData";

const drawLevelNavigation = (gc: GameContext) => {
  const { ctx, state } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx = w / 2;
  const navBtnH = 42;
  const navBtnW = 150;
  const navY = topBoxY + topBoxHeight * 0.79;

  if (state.playMode !== "levelselect") {
    return;
  }

  if (state.currentLevel > 1) {
    drawButton(gc, "<- PREV", topBoxX + topBoxWidth * 0.05, navY, navBtnW, navBtnH, () => {
      state.currentLevel--;
      gc.render();
    }, 18);
  }

  drawButton(gc, "LEVEL SELECT", cx - navBtnW / 2, navY, navBtnW, navBtnH, () => {
    gc.resetPlayerName();
    state.currentScreen = "levelselect";
    gc.render();
  }, 16);

  if (state.currentLevel < LEVEL_COUNT) {
    drawButton(gc, "NEXT ->", topBoxX + topBoxWidth * 0.77, navY, navBtnW, navBtnH, () => {
      state.currentLevel++;
      gc.render();
    }, 18);
  }
};

export const drawLevel = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxY, topBoxWidth, topBoxHeight, topInnerX, topInnerY, topInnerWidth, topInnerHeight } = getLayout(ctx);
  const cx = w / 2;
  const lvl = state.currentLevel;
  const t = getTheme(state);

  if (lvl === 1) {
    drawNameEntry(gc);
    drawLevelHUD(gc);
    return;
  }

  if (lvl === 2) {
    drawLevel2(gc);
    drawLevelHUD(gc);
    return;
  }

  if (lvl === 3) {
    drawLevel3(gc);
    drawLevelHUD(gc);
    return;
  }

  if (lvl >= 11 && lvl <= 20) {
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = `bold 34px ${displayFont}`;
    ctx.fillText(`LEVEL ${lvl}`, cx, topBoxY + topBoxHeight * 0.12);

    ctx.font = `21px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText("Use WASD to move the player inside the frame.", cx, topBoxY + topBoxHeight * 0.22, topBoxWidth * 0.72);

    ctx.strokeStyle = t.divider;
    ctx.lineWidth = 2;
    ctx.strokeRect(topInnerX, topInnerY, topInnerWidth, topInnerHeight);

    gc.player.draw(ctx);
    drawLevelNavigation(gc);
    drawLevelHUD(gc);
    return;
  }

  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = `bold 34px ${displayFont}`;
  ctx.fillText(`LEVEL ${lvl}`, cx, topBoxY + topBoxHeight * 0.16);

  ctx.font = `22px ${bodyFont}`;
  ctx.fillStyle = t.fgMid;
  ctx.fillText("This level is under construction.", cx, topBoxY + topBoxHeight * 0.38, topBoxWidth * 0.6);

  ctx.font = `16px ${bodyFont}`;
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Questions, choices, and interactions will be wired in here.", cx, topBoxY + topBoxHeight * 0.52, topBoxWidth * 0.6);

  drawLevelNavigation(gc);
  drawLevelHUD(gc);
};
