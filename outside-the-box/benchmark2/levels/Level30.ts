// Level 30 — The Last Question
// "Is this the last question?"
// YES → exam complete. NO → loseLife.
// The trick is people overthink it. The answer is obviously yes.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

export const drawLevel30 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active" && state.levelSubPhase !== "complete") {
    state.levelSubPhase = "active";
  }

  // ── Completion screen ─────────────────────────────────────────────────────────
  if (state.levelSubPhase === "complete") {
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 38px ${displayFont}`;
    ctx.fillText("EXAM COMPLETE.", cx, topBoxY + topBoxHeight * 0.22);

    ctx.font      = `18px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText(`${state.playerName} has been certified.`, cx, topBoxY + topBoxHeight * 0.36);

    ctx.font      = `13px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    const lines = [
      "You read the fine print.",
      "You hired yourself.",
      "You solved the equation by breaking the equation.",
      "You watched the screensaver until it mattered.",
      "You filled out the survey.",
      "You found the switch in the dark.",
      "You voted for yourself.",
      "You looked in the mirror and clicked the reflection.",
      "You tracked the X until it held still long enough.",
      "And then you answered yes.",
    ];
    lines.forEach((l, i) => {
      ctx.fillText(l, cx, topBoxY + topBoxHeight * (0.47 + i * 0.045));
    });

    ctx.font      = `11px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("Gus nods. Mauverath updates your file.", cx, topBoxY + topBoxHeight * 0.935);

    drawButton(gc, "← MAIN MENU", cx - 90, topBoxY + topBoxHeight * 0.965, 180, 38, () => {
      gc.resetPlayerName();
      state.currentScreen   = "mainmenu";
      state.currentLevel    = 1;
      state.levelSubPhase   = "";
      state.lives           = 3;
      state.gameOver        = false;
      gc.render();
    }, 14);
    return;
  }

  // ── The question ──────────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fgDim;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `13px ${bodyFont}`;
  ctx.fillText("Question 30 of 30", cx, topBoxY + topBoxHeight * 0.18);

  ctx.fillStyle = t.fg;
  ctx.font      = `bold 36px ${displayFont}`;
  ctx.fillText("Is this the last question?", cx, topBoxY + topBoxHeight * 0.36);

  ctx.font      = `13px ${bodyFont}`;
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Take your time.", cx, topBoxY + topBoxHeight * 0.47);
  ctx.fillText("There is no pressure.", cx, topBoxY + topBoxHeight * 0.52);
  ctx.fillText("This is just the last one.", cx, topBoxY + topBoxHeight * 0.57);

  // YES / NO
  const btnW = 130;
  const btnH = 52;
  const btnY = topBoxY + topBoxHeight * 0.68;

  drawButton(gc, "YES", cx - btnW - 20, btnY, btnW, btnH, () => {
    state.levelSubPhase = "complete";
    gc.render();
  }, 26);

  drawButton(gc, "NO", cx + 20, btnY, btnW, btnH, () => {
    gc.loseLife();
  }, 26);
};
