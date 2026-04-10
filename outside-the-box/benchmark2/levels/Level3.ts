import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout } from "../layout";

export const drawLevel3 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight, bottomBoxY } =
    getLayout(ctx);
  const cx = w / 2;
  const t = getTheme(state);

  // 2×2 grid of decoy options — all wrong
  const cols = 2;
  const tileW = topBoxWidth * 0.3;
  const tileH = topBoxHeight * 0.22;
  const hGap = topBoxWidth * 0.06;
  const vGap = topBoxHeight * 0.06;
  const gridW = cols * tileW + hGap;
  const gridX = cx - gridW / 2;
  const gridY = topBoxY + topBoxHeight * 0.26;

  for (let i = 0; i < 4; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const tx = gridX + col * (tileW + hGap);
    const ty = gridY + row * (tileH + vGap);

    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 3;
    ctx.strokeRect(tx, ty, tileW, tileH);

    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (i === 0) {
      // The word "dot"
      ctx.font = `bold 36px ${displayFont}`;
      ctx.fillText("dot", tx + tileW / 2, ty + tileH / 2);
    } else if (i === 1) {
      // A literal dot
      ctx.beginPath();
      ctx.arc(tx + tileW / 2, ty + tileH / 2, 10, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 2) {
      // Three dots
      ctx.font = `bold 36px ${displayFont}`;
      ctx.fillText("• • •", tx + tileW / 2, ty + tileH / 2);
    } else {
      // Department of Sanitation
      ctx.font = `bold 15px ${displayFont}`;
      ctx.fillText("Department", tx + tileW / 2, ty + tileH * 0.34, tileW - 16);
      ctx.fillText(
        "of Sanitation",
        tx + tileW / 2,
        ty + tileH * 0.57,
        tileW - 16,
      );
      ctx.font = `13px ${bodyFont}`;
      ctx.fillStyle = t.fgDim;
      ctx.fillText("(D.O.S.)", tx + tileW / 2, ty + tileH * 0.78);
    }

    gc.hitAreas.push({
      x: tx,
      y: ty,
      w: tileW,
      h: tileH,
      action: () => gc.loseLife(),
    });
  }

  // Hidden hit area: the tittle (dot) on the 'i' in "Click" in the bottom panel.
  // Bottom panel title "Click the dot." is drawn bold 30px, centered at (w/2, bottomBoxY+18),
  // textBaseline="top". We measure to find the 'i' x-position, then estimate the tittle's y.
  ctx.font = `bold 30px ${displayFont}`;
  const fullStr = "Click the dot";
  const fullW = ctx.measureText(fullStr).width;
  const textLeft = cx - fullW / 2;
  const prefixW = ctx.measureText("Cl").width;
  const iCharW = ctx.measureText("i").width;
  const iDotCX = textLeft + prefixW + iCharW / 2;
  const iDotCY = bottomBoxY + 18 + 5; // ~5px below top baseline ≈ tittle position
  const hitR = 10;

  gc.hitAreas.push({
    x: iDotCX - hitR,
    y: iDotCY - hitR,
    w: hitR * 2,
    h: hitR * 2,
    action: () => {
      state.currentLevel = 4;
      gc.render();
    },
  });
};
