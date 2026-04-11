// Level 24 — The Survey
// 5 mandatory star-rating questions. A "SKIP SURVEY" button that's a trap.
// Once all 5 are rated, SUBMIT activates and advances the level.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

const QUESTIONS = [
  "How satisfied are you with this exam so far?",
  "How would you rate the quality of the questions?",
  "How fairly do you feel the difficulty has been calibrated?",
  "How likely are you to recommend this exam to a colleague?",
  "How transparent did you find the instructions throughout?",
];

// Per-session ratings (0 = unrated, 1-5 = rated)
let ratings: number[] = [0, 0, 0, 0, 0];

export const drawLevel24 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active" && state.levelSubPhase !== "won") {
    ratings = [0, 0, 0, 0, 0];
    state.levelSubPhase = "active";
  }

  // ── Win screen ────────────────────────────────────────────────────────────────
  if (state.levelSubPhase === "won") {
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 26px ${displayFont}`;
    ctx.fillText("Thank you for your feedback.", cx, topBoxY + topBoxHeight * 0.34);
    ctx.font      = `17px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText("Your responses have been logged, aggregated, and ignored.", cx, topBoxY + topBoxHeight * 0.48);
    ctx.font      = `13px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("We asked anyway. That was the point.", cx, topBoxY + topBoxHeight * 0.58);
    drawButton(gc, "CONTINUE  →", cx - 100, topBoxY + topBoxHeight * 0.70, 200, 44, () => {
      state.currentLevel  = 25;
      state.levelSubPhase = "";
      gc.render();
    });
    return;
  }

  const allRated = ratings.every(r => r > 0);

  // ── Survey heading ────────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 18px ${displayFont}`;
  ctx.fillText("CANDIDATE SATISFACTION SURVEY  —  MANDATORY", cx, topBoxY + topBoxHeight * 0.08);

  // ── SKIP SURVEY trap ──────────────────────────────────────────────────────────
  const skipW = 118;
  const skipH = 28;
  const skipX = topBoxX + topBoxWidth - skipW - 12;
  const skipY = topBoxY + topBoxHeight * 0.03;

  ctx.strokeStyle = state.darkMode ? "#555" : "#bbb";
  ctx.lineWidth   = 1;
  ctx.strokeRect(skipX, skipY, skipW, skipH);
  ctx.fillStyle    = state.darkMode ? "#888" : "#777";
  ctx.font         = `12px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SKIP SURVEY  ›", skipX + skipW / 2, skipY + skipH / 2);
  gc.hitAreas.push({
    x: skipX, y: skipY, w: skipW, h: skipH,
    action: () => { gc.loseLife(); },
  });

  // ── Questions + star ratings ──────────────────────────────────────────────────
  const rowH   = topBoxHeight * 0.112;
  const starSz = 20;
  const starGap = 4;
  const startY = topBoxY + topBoxHeight * 0.14;

  QUESTIONS.forEach((q, qi) => {
    const rowY = startY + qi * rowH;

    // Question text
    ctx.fillStyle    = t.fg;
    ctx.font         = `13px ${bodyFont}`;
    ctx.textAlign    = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`${qi + 1}. ${q}`, topBoxX + 18, rowY + rowH * 0.28);

    // Stars
    const starsWidth = 5 * starSz + 4 * starGap;
    const starsX     = topBoxX + topBoxWidth - starsWidth - 16;
    const starsY     = rowY + rowH * 0.28;

    for (let s = 1; s <= 5; s++) {
      const sx = starsX + (s - 1) * (starSz + starGap);
      const filled = s <= ratings[qi];

      ctx.fillStyle = filled
        ? (state.darkMode ? "#ffe066" : "#f0a000")
        : (state.darkMode ? "#333" : "#ddd");
      ctx.font = `${starSz}px sans-serif`;
      ctx.textAlign    = "left";
      ctx.textBaseline = "middle";
      ctx.fillText("★", sx, starsY);

      const captured_qi = qi;
      const captured_s  = s;
      gc.hitAreas.push({
        x: sx, y: starsY - starSz / 2, w: starSz, h: starSz,
        action: () => {
          ratings[captured_qi] = captured_s;
          gc.render();
        },
      });
    }

    // Thin row separator
    if (qi < QUESTIONS.length - 1) {
      ctx.strokeStyle = t.divider;
      ctx.lineWidth   = 0.5;
      ctx.beginPath();
      ctx.moveTo(topBoxX + 12, rowY + rowH);
      ctx.lineTo(topBoxX + topBoxWidth - 12, rowY + rowH);
      ctx.stroke();
    }
  });

  // ── Submit ────────────────────────────────────────────────────────────────────
  const submitY = topBoxY + topBoxHeight * 0.84;
  const submitW = 160;
  const submitH = 40;

  if (allRated) {
    drawButton(gc, "SUBMIT  →", cx - submitW / 2, submitY, submitW, submitH, () => {
      state.levelSubPhase = "won";
      gc.render();
    });
  } else {
    ctx.strokeStyle = state.darkMode ? "#333" : "#ccc";
    ctx.lineWidth   = 1.5;
    ctx.strokeRect(cx - submitW / 2, submitY, submitW, submitH);
    ctx.fillStyle    = state.darkMode ? "#444" : "#bbb";
    ctx.font         = `15px ${bodyFont}`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SUBMIT  →", cx, submitY + submitH / 2);

    ctx.font      = `11px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("Rate all questions to enable.", cx, submitY + submitH + 10);
  }
};
