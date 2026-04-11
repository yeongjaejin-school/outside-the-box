// Level 22 — One Stroke
// Shows: 5 + 5 + 5 = 550
// Add exactly one straight line to make it true.
// Correct answer: 5 + 5 + 5 ≠ 550  (add a diagonal slash through the =)
// Distractors are plausible-looking but wrong.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';

const OPTIONS = [
  { label: "5 + 5 + 5  ≠  550",  correct: true  },
  { label: "5 × 5 × 5  =  550",  correct: false },  // 125 ≠ 550
  { label: "5 + 5 + 5  =  15",   correct: false },  // requires removing strokes
  { label: "5 + 5 + 545 = 550",  correct: false },  // changes digits, not one line
];

export const drawLevel22 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active") state.levelSubPhase = "active";

  // The original equation — large and central
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 48px ${displayFont}`;
  ctx.fillText("5 + 5 + 5 = 550", cx, topBoxY + topBoxHeight * 0.22);

  // Instruction
  ctx.font      = `15px ${bodyFont}`;
  ctx.fillStyle = t.fgMid;
  ctx.fillText("Add exactly one straight line to make the equation correct.", cx, topBoxY + topBoxHeight * 0.36);
  ctx.font      = `12px ${bodyFont}`;
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Select the corrected version below.", cx, topBoxY + topBoxHeight * 0.43);

  // Faint divider
  ctx.strokeStyle = t.divider;
  ctx.lineWidth   = 1;
  ctx.beginPath();
  ctx.moveTo(topBoxX + topBoxWidth * 0.1, topBoxY + topBoxHeight * 0.48);
  ctx.lineTo(topBoxX + topBoxWidth * 0.9, topBoxY + topBoxHeight * 0.48);
  ctx.stroke();

  // Answer tiles — 2 × 2 grid
  const cols  = 2;
  const tileW = topBoxWidth  * 0.36;
  const tileH = topBoxHeight * 0.18;
  const hGap  = topBoxWidth  * 0.06;
  const vGap  = topBoxHeight * 0.03;
  const gridW = cols * tileW + hGap;
  const gridX = cx - gridW / 2;
  const gridY = topBoxY + topBoxHeight * 0.52;

  OPTIONS.forEach((opt, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const tx  = gridX + col * (tileW + hGap);
    const ty  = gridY + row * (tileH + vGap);

    ctx.strokeStyle = t.stroke;
    ctx.lineWidth   = 2;
    ctx.strokeRect(tx, ty, tileW, tileH);

    ctx.fillStyle    = t.fg;
    ctx.font         = `bold 20px ${displayFont}`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(opt.label, tx + tileW / 2, ty + tileH / 2);

    gc.hitAreas.push({
      x: tx, y: ty, w: tileW, h: tileH,
      action: () => {
        if (opt.correct) {
          state.currentLevel  = 23;
          state.levelSubPhase = "";
          gc.render();
        } else {
          gc.loseLife();
        }
      },
    });
  });
};
