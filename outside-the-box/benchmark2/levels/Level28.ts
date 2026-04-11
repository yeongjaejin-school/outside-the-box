// Level 28 — The Mirror
// A mirror divides the box. The real button sits on the RIGHT.
// The LEFT shows its mirror reflection.
// Instruction: "Click what you see." (the reflection = left side = win)
// Clicking the RIGHT (the actual button): loseLife.
// Clicking the LEFT (the mirror image): advance.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';

const BTN_W = 130;
const BTN_H = 46;

export const drawLevel28 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active") state.levelSubPhase = "active";

  const halfW = topBoxWidth / 2;

  // ── Mirror frame divider ──────────────────────────────────────────────────────
  ctx.strokeStyle = state.darkMode ? "#aaa" : "#555";
  ctx.lineWidth   = 3;
  ctx.beginPath();
  ctx.moveTo(cx, topBoxY + 8);
  ctx.lineTo(cx, topBoxY + topBoxHeight - 8);
  ctx.stroke();

  // Decorative mirror frame
  ctx.strokeStyle = state.darkMode ? "#888" : "#777";
  ctx.lineWidth   = 8;
  ctx.strokeRect(topBoxX + 2, topBoxY + 2, halfW - 6, topBoxHeight - 4);

  // "MIRROR" label on frame top
  ctx.fillStyle    = state.darkMode ? "#888" : "#777";
  ctx.font         = `bold 10px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("M I R R O R", topBoxX + halfW / 2, topBoxY + 16);

  // ── RIGHT half: the real environment ─────────────────────────────────────────
  // The button is at 75% x, 50% y of the full box
  const realBtnX = topBoxX + topBoxWidth * 0.75 - BTN_W / 2;
  const realBtnY = topBoxY + topBoxHeight * 0.46 - BTN_H / 2;

  ctx.strokeStyle = t.stroke;
  ctx.lineWidth   = 2;
  ctx.strokeRect(realBtnX, realBtnY, BTN_W, BTN_H);
  ctx.fillStyle    = t.fg;
  ctx.font         = `bold 18px ${displayFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("CLICK ME", realBtnX + BTN_W / 2, realBtnY + BTN_H / 2);

  // Right half label
  ctx.fillStyle = t.fgDim;
  ctx.font      = `11px ${bodyFont}`;
  ctx.textAlign = "center";
  ctx.fillText("← real world →", topBoxX + topBoxWidth * 0.75, topBoxY + topBoxHeight * 0.88);

  // Clicking the REAL button: loseLife
  gc.hitAreas.push({
    x: realBtnX, y: realBtnY, w: BTN_W, h: BTN_H,
    action: () => { gc.loseLife(); },
  });

  // ── LEFT half: mirror of right half ──────────────────────────────────────────
  // Clip to left half
  ctx.save();
  ctx.beginPath();
  ctx.rect(topBoxX, topBoxY, halfW, topBoxHeight);
  ctx.clip();

  // Transform: flip horizontally around the midpoint
  ctx.translate(cx * 2, 0);
  ctx.scale(-1, 1);

  // Draw the reflected button (same absolute coords, transform handles flip)
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth   = 2;
  ctx.strokeRect(realBtnX, realBtnY, BTN_W, BTN_H);
  ctx.fillStyle    = t.fg;
  ctx.font         = `bold 18px ${displayFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("CLICK ME", realBtnX + BTN_W / 2, realBtnY + BTN_H / 2);

  ctx.restore();

  // Mirror reflection label (unflipped)
  ctx.fillStyle    = t.fgDim;
  ctx.font         = `11px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("← mirror →", topBoxX + halfW / 2, topBoxY + topBoxHeight * 0.88);

  // Slight tint over left half to look like a mirror
  ctx.fillStyle = "rgba(180, 200, 255, 0.06)";
  ctx.fillRect(topBoxX, topBoxY, halfW, topBoxHeight);

  // ── Mirror hit area: clicking the reflected button wins ───────────────────────
  // The reflection of realBtnX (which is at 75% of full width) in the left half:
  // reflected_x = cx - (realBtnX + BTN_W/2 - cx) - BTN_W/2
  //             = 2*cx - realBtnX - BTN_W
  const mirrorBtnX = 2 * cx - realBtnX - BTN_W;
  const mirrorBtnY = realBtnY;

  gc.hitAreas.push({
    x: mirrorBtnX, y: mirrorBtnY, w: BTN_W, h: BTN_H,
    noCursor: false,
    action: () => {
      state.currentLevel  = 29;
      state.levelSubPhase = "";
      gc.render();
    },
  });

  // ── Instruction ───────────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fgMid;
  ctx.font         = `14px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Click what you see.", cx, topBoxY + topBoxHeight * 0.13);
  ctx.font      = `11px ${bodyFont}`;
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Trust nothing. Not even this sentence.", cx, topBoxY + topBoxHeight * 0.19);
};
