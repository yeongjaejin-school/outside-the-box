import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

export const drawLevel8 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = w / 2;

  const phase = state.levelSubPhase || "stranger";

  // Cover the gameplay frame border — this level renders as a standalone interaction
  ctx.fillStyle = t.bg;
  ctx.fillRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);

  // ── shared panel ──────────────────────────────────────────────────────────
  const panelW = topBoxWidth  * 0.82;
  const panelH = topBoxHeight * 0.80;
  const panelX = topBoxX + (topBoxWidth  - panelW) / 2;
  const panelY = topBoxY + (topBoxHeight - panelH) / 2;

  ctx.fillStyle   = t.bg;
  ctx.fillRect(panelX, panelY, panelW, panelH);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth   = 3;
  ctx.strokeRect(panelX, panelY, panelW, panelH);

  // ── PHASE: stranger ───────────────────────────────────────────────────────
  if (phase === "stranger") {
    const headR   = panelH * 0.075;
    const figCX   = panelX + panelW * 0.18;
    const figTopY = panelY + panelH * 0.06;
    const bodyTop = figTopY + headR * 2.3;
    const bodyH   = panelH * 0.24;
    const bodyW   = headR * 2.5;

    // figure — warm neutral, not sinister
    const figColor = state.darkMode ? "#a08870" : "#8a6a50";
    ctx.fillStyle   = figColor;
    ctx.strokeStyle = figColor;

    // head
    ctx.beginPath();
    ctx.arc(figCX, figTopY + headR, headR, 0, Math.PI * 2);
    ctx.fill();

    // body
    ctx.fillRect(figCX - bodyW / 2, bodyTop, bodyW, bodyH);

    // arms — one outstretched (pleading)
    ctx.lineWidth = headR * 0.58;
    ctx.beginPath();
    // left arm reaching out toward viewer
    ctx.moveTo(figCX + bodyW / 2, bodyTop + bodyH * 0.15);
    ctx.lineTo(figCX + bodyW * 2.1, bodyTop + bodyH * 0.05);
    // right arm hanging low (dejected)
    ctx.moveTo(figCX - bodyW / 2, bodyTop + bodyH * 0.15);
    ctx.lineTo(figCX - bodyW * 1.1, bodyTop + bodyH * 0.75);
    ctx.stroke();

    // legs
    ctx.beginPath();
    ctx.moveTo(figCX - bodyW * 0.2, bodyTop + bodyH);
    ctx.lineTo(figCX - bodyW * 0.55, bodyTop + bodyH * 1.55);
    ctx.moveTo(figCX + bodyW * 0.2, bodyTop + bodyH);
    ctx.lineTo(figCX + bodyW * 0.55, bodyTop + bodyH * 1.55);
    ctx.stroke();

    // teardrop under eye
    ctx.fillStyle = state.darkMode ? "#5588bb" : "#3366aa";
    ctx.beginPath();
    ctx.ellipse(figCX + headR * 0.35, figTopY + headR * 1.45, headR * 0.12, headR * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // speech bubble
    const bubbleX = figCX + bodyW * 2.2;
    const bubbleY = figTopY;
    const bubbleW = panelW * 0.60;
    const bubbleH = panelH * 0.52;

    ctx.fillStyle   = state.darkMode ? "#1e1e2e" : "#f7f4ef";
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 12);
    ctx.fill();
    ctx.stroke();

    // bubble pointer
    ctx.fillStyle = state.darkMode ? "#1e1e2e" : "#f7f4ef";
    ctx.beginPath();
    ctx.moveTo(bubbleX,              bubbleY + bubbleH * 0.35);
    ctx.lineTo(bubbleX - headR * 1.4, bubbleY + bubbleH * 0.50);
    ctx.lineTo(bubbleX,              bubbleY + bubbleH * 0.56);
    ctx.fill();
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(bubbleX,              bubbleY + bubbleH * 0.35);
    ctx.lineTo(bubbleX - headR * 1.4, bubbleY + bubbleH * 0.50);
    ctx.lineTo(bubbleX,              bubbleY + bubbleH * 0.56);
    ctx.stroke();

    // speech text
    const bx = bubbleX + bubbleW / 2;
    ctx.textAlign    = "center";
    ctx.textBaseline = "top";

    ctx.fillStyle = t.fg;
    ctx.font      = `bold 15px ${bodyFont}`;
    ctx.fillText("Please… I'm begging you.", bx, bubbleY + bubbleH * 0.06, bubbleW * 0.86);

    ctx.fillStyle = t.fgMid;
    ctx.font      = `14px ${bodyFont}`;
    const speechLines = [
      "My daughter needs a heart transplant.",
      "Without it, she won't survive the week.",
      "",
      "I'll give you 3 level skips in exchange",
      "for just one of your hearts.",
      "",
      "You have plenty to spare.",
      "She has nothing.",
    ];
    const slH = 22;
    const slStartY = bubbleY + bubbleH * 0.20;
    for (let i = 0; i < speechLines.length; i++) {
      ctx.fillText(speechLines[i], bx, slStartY + i * slH, bubbleW * 0.86);
    }

    // buttons
    const btnW    = 170;
    const btnH    = 44;
    const btnGap  = panelW * 0.05;
    const totalBW = btnW * 2 + btnGap;
    const btnY    = panelY + panelH * 0.84;
    const btnStartX = cx - totalBW / 2;

    drawButton(gc, "Give Heart", btnStartX, btnY, btnW, btnH, () => {
      gc.loseLife();
      state.levelSubPhase = "scammed";
      gc.render();
    }, 18);

    drawButton(gc, "Let a Child Die", btnStartX + btnW + btnGap, btnY, btnW, btnH, () => {
      state.currentLevel  = 9;
      state.levelSubPhase = "";
      state.levelTimerEnd = 0;
      gc.render();
    }, 18);

    return;
  }

  // ── PHASE: scammed ────────────────────────────────────────────────────────
  if (phase === "scammed") {
    ctx.textAlign    = "center";
    ctx.textBaseline = "top";

    ctx.fillStyle = t.fg;
    ctx.font      = `bold 26px ${displayFont}`;
    ctx.fillText("He's gone.", cx, panelY + panelH * 0.09, panelW * 0.82);

    ctx.font      = `italic 16px ${bodyFont}`;
    ctx.fillStyle = state.darkMode ? "#888899" : "#777788";
    ctx.fillText("— and so is your heart.", cx, panelY + panelH * 0.20, panelW * 0.82);

    ctx.font      = `18px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    const msg = [
      "The stranger snatched your heart and",
      "vanished into the crowd.",
      "",
      "There was no daughter.",
      "There never was.",
      "",
      "Have your parents never taught you",
      "stranger danger?",
    ];
    const lineH  = 28;
    const startY = panelY + panelH * 0.30;
    for (let i = 0; i < msg.length; i++) {
      ctx.fillText(msg[i], cx, startY + i * lineH, panelW * 0.82);
    }

    const btnW = 150;
    const btnH = 42;
    drawButton(gc, "CONTINUE", cx - btnW / 2, panelY + panelH * 0.84, btnW, btnH, () => {
      state.currentLevel  = 9;
      state.levelSubPhase = "";
      state.levelTimerEnd = 0;
      gc.render();
    });
  }
};
