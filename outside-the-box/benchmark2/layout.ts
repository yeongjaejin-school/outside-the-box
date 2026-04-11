// How far the stone-border PNG extends outside the content/play area on each side.
// The PNG interior (white) is erased after drawing; only the stone border is visible.
// Increase to push the stone border further outside, decrease to bring it in.
export const FRAME_BLEED = 28;

export const getLayout = (ctx: CanvasRenderingContext2D) => {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;

  const contentWidth = w * 0.82;        // slightly narrower → more margin on left/right
  const contentX = (w - contentWidth) / 2;
  const logoY = h * 0.08;

  // ── Play / content area ────────────────────────────────────────────────────
  // This is where all level elements live. The stone frame PNG draws *around* it.
  const topBoxWidth  = contentWidth;
  const topBoxHeight = h * 0.46;        // slightly shorter → more breathing room
  const topBoxX      = contentX;
  const topBoxY      = h * 0.185;

  // ── Frame PNG area ─────────────────────────────────────────────────────────
  // The stone border hangs FRAME_BLEED px outside the play area on every side.
  const frameX = topBoxX      - FRAME_BLEED;
  const frameY = topBoxY      - FRAME_BLEED;
  const frameW = topBoxWidth  + FRAME_BLEED * 2;
  const frameH = topBoxHeight + FRAME_BLEED * 2;

  // Safe content area inside the decorative frame
  const topInnerWidth  = topBoxWidth  * 0.42;
  const topInnerHeight = topBoxHeight * 0.62;
  const topInnerX      = w / 2 - topInnerWidth / 2;
  const topInnerY      = topBoxY + topBoxHeight * 0.16;

  // Bottom panel sits below the frame (not the content box) so it doesn't jump
  const gap             = h * 0.038;
  const bottomBoxY      = frameY + frameH + gap;
  const bottomBoxHeight = h * 0.20;

  return {
    w,
    h,
    contentWidth,
    contentX,
    logoY,
    frameX,
    frameY,
    frameW,
    frameH,
    topBoxX,
    topBoxY,
    topBoxWidth,
    topBoxHeight,
    topInnerX,
    topInnerY,
    topInnerWidth,
    topInnerHeight,
    bottomBoxY,
    bottomBoxHeight,
  };
};
