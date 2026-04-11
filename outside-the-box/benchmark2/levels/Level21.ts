// Level 21 — The Résumé
// Player reviews a professional résumé. It belongs to them.
// HIRE = correct. REJECT = loseLife.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

export const drawLevel21 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;
  const name = state.playerName;

  if (state.levelSubPhase !== "active") state.levelSubPhase = "active";

  // Paper
  const pX = topBoxX + topBoxWidth  * 0.06;
  const pY = topBoxY + topBoxHeight * 0.03;
  const pW = topBoxWidth  * 0.88;
  const pH = topBoxHeight * 0.77;

  ctx.fillStyle   = "#f5f0e8";
  ctx.fillRect(pX, pY, pW, pH);
  ctx.strokeStyle = "#c8c0b0";
  ctx.lineWidth   = 1;
  ctx.strokeRect(pX, pY, pW, pH);

  const hx = pX + 20;
  let   hy = pY + 14;

  const header = (text: string) => {
    ctx.font         = `bold 19px ${displayFont}`;
    ctx.fillStyle    = "#1a1a1a";
    ctx.textAlign    = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, hx, hy);
    hy += 22;
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.moveTo(pX + 10, hy); ctx.lineTo(pX + pW - 10, hy);
    ctx.stroke();
    hy += 6;
  };

  const section = (label: string) => {
    hy += 6;
    ctx.font         = `bold 10px ${bodyFont}`;
    ctx.fillStyle    = "#333";
    ctx.textAlign    = "left";
    ctx.textBaseline = "top";
    ctx.fillText(label, hx, hy);
    hy += 3;
    ctx.strokeStyle = "#ccc"; ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(hx, hy + 10); ctx.lineTo(pX + pW - 10, hy + 10);
    ctx.stroke();
    hy += 14;
  };

  const line = (text: string, indent = 0) => {
    ctx.font         = `10px ${bodyFont}`;
    ctx.fillStyle    = "#444";
    ctx.textAlign    = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, hx + indent, hy);
    hy += 13;
  };

  const dim = (text: string) => {
    ctx.font      = `10px ${bodyFont}`;
    ctx.fillStyle = "#777";
    ctx.textAlign    = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, hx, hy);
    hy += 12;
  };

  header(name.toUpperCase());
  dim(`${name.toLowerCase().replace(/ /g, '.')}@candidate.edu  ·  Available immediately  ·  Willing to relocate  ·  One reference is a dragon`);
  hy += 2;

  section("OBJECTIVE");
  line(`To obtain the Outside-the-Box Thinking Certification and prove that ${name} is, in fact,`);
  line("a person of unusual cognitive flexibility. Flexible on salary. Not flexible on outcome.");

  section("EXPERIENCE");
  ctx.font = `bold 10px ${bodyFont}`; ctx.fillStyle = "#222"; ctx.textAlign = "left"; ctx.textBaseline = "top";
  ctx.fillText("Lead Candidate  ·  This Examination  ·  Ongoing", hx + 6, hy); hy += 13;
  line("• Read a 29-section Terms of Service document in full. Witnesses: none. Confidence: high.", 12);
  line("• Survived an unsolicited emotional appeal from an unregistered individual regarding a heart.", 12);
  line("• Defeated a sub-optimal pong AI after adjusting expectations accordingly.", 12);
  line("• Successfully identified the count of F's on a chalkboard using an eraser as a cognitive tool.", 12);
  line("• Passed a calculus question by reading the question number rather than solving the calculus.", 12);

  section("SKILLS");
  line("Patience  ·  Scrolling  ·  Strategic inaction  ·  Lateral thinking  ·  Not clicking obvious traps");
  line("Intermediate integral calculus (Level 9 specifically)  ·  Eraser drag-and-drop");

  section("EDUCATION");
  line("Various institutions  ·  Degree in Something Applicable  ·  GPA: self-reported and unverified");

  section("REFERENCES");
  line("Mauverath the Unreasonably Large (dragon, indifferent)  ·  Bram (accountant, unexpectedly here)");
  line("Gus (no last name; has said only \"good\" once in documented history — about you)");

  // Decision buttons
  const btnY = pY + pH + topBoxHeight * 0.04;
  const btnW = 130;
  const btnH = 40;

  drawButton(gc, "✓  HIRE", cx - btnW - 16, btnY, btnW, btnH, () => {
    state.currentLevel  = 22;
    state.levelSubPhase = "";
    gc.render();
  });

  drawButton(gc, "✗  REJECT", cx + 16, btnY, btnW, btnH, () => {
    gc.loseLife();
  });
};
