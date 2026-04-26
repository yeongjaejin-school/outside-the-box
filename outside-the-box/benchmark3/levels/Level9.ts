import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

export const drawLevel9 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = w / 2;

  // ── Integral notation  ∫₀³ x√(9−x²) dx ──────────────────────────────────
  // Expression approximate total pixel width: ~250px (fixed-px fonts)
  // Place the integral sign right-edge at cx - 88 so the whole expr is centered
  const integralCY = topBoxY + topBoxHeight * 0.40;
  const integralX  = cx - 88;

  // large ∫ sign
  ctx.fillStyle    = t.fg;
  ctx.font         = `88px serif`;
  ctx.textAlign    = "right";
  ctx.textBaseline = "middle";
  ctx.fillText("∫", integralX, integralCY + topBoxHeight * 0.015);

  // upper bound — 3
  ctx.font         = `bold 20px ${displayFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText("3", integralX + 2, integralCY - topBoxHeight * 0.085);

  // lower bound — 0
  ctx.textBaseline = "top";
  ctx.fillText("0", integralX - 4, integralCY + topBoxHeight * 0.085);

  // integrand — x
  const exprX = integralX + 8;
  ctx.font         = `bold 32px serif`;
  ctx.textBaseline = "middle";
  ctx.textAlign    = "left";
  ctx.fillText("x", exprX, integralCY);

  // square root — draw radical sign then radicand
  const radStartX = exprX + 24;
  const radBaseY  = integralCY + 16;
  const radTopY   = integralCY - 22;
  const radicandW = 92;

  ctx.strokeStyle = t.fg;
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.moveTo(radStartX,              radBaseY);
  ctx.lineTo(radStartX + 10,         radBaseY + 8);
  ctx.lineTo(radStartX + 18,         radTopY);
  ctx.lineTo(radStartX + 18 + radicandW, radTopY);
  ctx.stroke();

  // radicand — 9 − x
  ctx.fillStyle    = t.fg;
  ctx.font         = `bold 26px serif`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "middle";
  const radicandX  = radStartX + 22;
  ctx.fillText("9 \u2212 x", radicandX, integralCY);

  // superscript 2
  ctx.font         = `bold 16px serif`;
  ctx.textBaseline = "top";
  ctx.fillText("2", radicandX + 66, integralCY - 18);

  // dx
  ctx.font         = `bold 32px serif`;
  ctx.textBaseline = "middle";
  ctx.textAlign    = "left";
  ctx.fillText(" dx", radStartX + 18 + radicandW + 2, integralCY);

  // ── Answer buttons ────────────────────────────────────────────────────────
  // 27 — forgot /3 in integration step
  // 18 — forgot the 1/2 from x dx = -du/2
  //  0 — didn't flip bounds after removing the negative
  //  6 — skipped u-sub, evaluated integrand directly
  const options   = ["27", "18", "0", "6"];
  const btnW      = topBoxWidth * 0.17;
  const btnH      = topBoxHeight * 0.15;
  const btnGap    = topBoxWidth * 0.025;
  const totalBW   = btnW * 4 + btnGap * 3;
  const btnStartX = cx - totalBW / 2;
  const btnY      = topBoxY + topBoxHeight * 0.72;

  for (let i = 0; i < options.length; i++) {
    const bx = btnStartX + i * (btnW + btnGap);
    drawButton(gc, options[i], bx, btnY, btnW, btnH, () => {
      gc.loseLife();
    }, 28);
  }

  // ── Secret hit area: the "Q.9" label drawn by drawLevelHUD ───────────────
  const padX    = topBoxWidth  * 0.05;
  const padY    = topBoxHeight * 0.08;
  const labelCX = topBoxX + padX;
  const labelCY = topBoxY + padY;
  gc.hitAreas.push({
    x: labelCX,
    y: labelCY - 14,
    w: 62,
    h: 28,
    noCursor: true,
    action: () => {
      state.currentLevel  = 10;
      state.levelSubPhase = "";
      state.levelTimerEnd = 0;
      gc.render();
    },
  });
};
