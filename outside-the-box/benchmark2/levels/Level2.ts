import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout } from "../layout";

export const drawLevel2 = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx = w / 2;
  const t = getTheme(state);

  // Question header
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 30px ${displayFont}`;
  ctx.fillText("What is 15 + 15?", cx, topBoxY + topBoxHeight * 0.14);

  // 2×2 answer grid
  const answers = [
    { label: "25", correct: false },
    { label: "30", correct: true },
    { label: "28", correct: false },
    { label: "35", correct: false },
  ];

  const cols = 2;
  const tileW = topBoxWidth * 0.3;
  const tileH = topBoxHeight * 0.22;
  const hGap = topBoxWidth * 0.06;
  const vGap = topBoxHeight * 0.06;
  const gridW = cols * tileW + hGap;
  const gridX = cx - gridW / 2;
  const gridY = topBoxY + topBoxHeight * 0.26;

  for (let i = 0; i < answers.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const tx = gridX + col * (tileW + hGap);
    const ty = gridY + row * (tileH + vGap);
    const ans = answers[i];

    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 3;
    ctx.strokeRect(tx, ty, tileW, tileH);

    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 36px ${displayFont}`;
    ctx.fillText(ans.label, tx + tileW / 2, ty + tileH / 2);

    const captured = ans.correct;
    gc.hitAreas.push({
      x: tx,
      y: ty,
      w: tileW,
      h: tileH,
      action: () => {
        if (captured) {
          state.currentLevel = 3;
          gc.render();
        } else {
          gc.loseLife();
        }
      },
    });
  }
};
