import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout, getMovementLayout } from "../layout";
import { drawButton, drawLevelHUD } from "../renderer";
import { drawNameEntry } from "../levels/Level1";
import { drawLevel2 } from "../levels/Level2";
import { drawLevel3 } from "../levels/Level3";
import { LEVEL_COUNT } from "../levelData";

const drawLevelNavigation = (gc: GameContext, navYOverride?: number) => {
  const { ctx, state } = gc;
  const { w, topBoxX, topBoxWidth, topBoxHeight, topBoxY } = getLayout(ctx);
  const cx = w / 2;
  const navBtnH = 42;
  const navBtnW = 150;
  const navY = navYOverride ?? topBoxY + topBoxHeight * 0.79;

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

const drawMovementLevelNavigation = (gc: GameContext) => {
  const { state } = gc;
  const movementLayout = getMovementLayout(gc.ctx);
  const navBtnH = 42;
  const navBtnW = 150;
  const navY = movementLayout.bottomFrameY + movementLayout.bottomFrameHeight - navBtnH - 22;
  const centerX = movementLayout.bottomFrameWidth / 2;

  if (state.playMode !== "levelselect") {
    return;
  }

  if (state.currentLevel > 1) {
    drawButton(gc, "<- PREV", 26, navY, navBtnW, navBtnH, () => {
      state.currentLevel--;
      gc.render();
    }, 18);
  }

  drawButton(gc, "LEVEL SELECT", centerX - navBtnW / 2, navY, navBtnW, navBtnH, () => {
    gc.resetPlayerName();
    state.currentScreen = "levelselect";
    gc.render();
  }, 16);

  if (state.currentLevel < LEVEL_COUNT) {
    drawButton(gc, "NEXT ->", movementLayout.bottomFrameWidth - navBtnW - 26, navY, navBtnW, navBtnH, () => {
      state.currentLevel++;
      gc.render();
    }, 18);
  }
};

const drawAnswerZone = (gc: GameContext) => {
  const { ctx } = gc;

  for (const slot of gc.answerSlots) {
    ctx.strokeStyle = "rgba(255,255,255,0.92)";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(slot.x, slot.y, slot.size, slot.size);
    ctx.setLineDash([]);
  }
};

export const drawLevel = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
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
    const movementLayout = getMovementLayout(ctx);

    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(
      movementLayout.gameFrameX,
      movementLayout.gameFrameY,
      movementLayout.gameFrameWidth,
      movementLayout.gameFrameHeight,
    );

    drawAnswerZone(gc);

    for (const block of gc.blocks) {
      block.draw(ctx);
    }

    gc.player.draw(ctx);

    ctx.fillStyle = t.fgDim;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = `14px ${bodyFont}`;
    ctx.fillText(
      `Facing: ${gc.player.getFacingDirection().toUpperCase()}`,
      movementLayout.gameFrameX + 24,
      movementLayout.gameFrameHeight - 24,
    );

    drawMovementLevelNavigation(gc);
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
