import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout } from "../layout";
import { drawButton } from "../renderer";

export const drawControlsOverlay = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t = getTheme(state);

  const pad = topBoxWidth * 0.05;
  const ox = topBoxX + pad;
  const oy = topBoxY + pad;
  const ow = topBoxWidth - pad * 2;
  const oh = topBoxHeight - pad * 2;
  const cx = ox + ow / 2;

  ctx.fillStyle = t.overlayBg;
  ctx.fillRect(ox, oy, ow, oh);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(ox, oy, ow, oh);

  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 30px ${displayFont}`;
  ctx.fillText("BASIC CONTROLS", cx, oy + oh * 0.11);

  ctx.strokeStyle = t.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(ox + ow * 0.06, oy + oh * 0.2);
  ctx.lineTo(ox + ow * 0.94, oy + oh * 0.2);
  ctx.stroke();

  const controls = [
    { key: "W / A / S / D", desc: "Move / Navigate" },
    { key: "CLICK", desc: "Interact / Select answer" },
    { key: "ESC", desc: "Close this panel" },
  ];

  const listY = oy + oh * 0.29;
  const rowH = oh * 0.15;
  const keyBoxW = ow * 0.3;
  const keyBoxH = rowH * 0.7;
  const keyBoxX = ox + ow * 0.08;
  const descX = ox + ow * 0.5;

  for (let i = 0; i < controls.length; i++) {
    const rowY = listY + i * rowH;
    const boxCenterY = rowY + keyBoxH / 2;

    ctx.fillStyle = state.darkMode ? "#2a2a2a" : "#dddddd";
    ctx.strokeStyle = t.divider;
    ctx.lineWidth = 1;
    ctx.fillRect(keyBoxX, rowY, keyBoxW, keyBoxH);
    ctx.strokeRect(keyBoxX, rowY, keyBoxW, keyBoxH);

    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold 16px ${displayFont}`;
    ctx.fillText(
      controls[i].key,
      keyBoxX + keyBoxW / 2,
      boxCenterY,
      keyBoxW - 8,
    );

    ctx.fillStyle = t.fgMid;
    ctx.textAlign = "left";
    ctx.font = `17px ${bodyFont}`;
    ctx.fillText(controls[i].desc, descX, boxCenterY);
  }

  ctx.fillStyle = t.fgDim;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `13px ${bodyFont}`;
  ctx.fillText("Controls may vary between levels.", cx, oy + oh * 0.84);

  // Clear underlying hit areas
  gc.hitAreas = [];

  const closeW = 140;
  const closeH = 40;
  drawButton(
    gc,
    "CLOSE  ✕",
    cx - closeW / 2,
    oy + oh * 0.9,
    closeW,
    closeH,
    () => {
      state.controlsOpen = false;
      gc.render();
    },
    17,
  );
};
