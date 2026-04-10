export const getLayout = (ctx: CanvasRenderingContext2D) => {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;

  const contentWidth = w * 0.84;
  const contentX = (w - contentWidth) / 2;
  const logoY = h * 0.08;

  const topBoxWidth = contentWidth;
  const topBoxHeight = h * 0.48;
  const topBoxX = contentX;
  const topBoxY = h * 0.18;

  // Safe content area inside the decorative frame
  const topInnerWidth = topBoxWidth * 0.42;
  const topInnerHeight = topBoxHeight * 0.62;
  const topInnerX = w / 2 - topInnerWidth / 2;
  const topInnerY = topBoxY + topBoxHeight * 0.16;

  const gap = h * 0.04;
  const bottomBoxY = topBoxY + topBoxHeight + gap;
  const bottomBoxHeight = h * 0.22;

  return {
    w,
    h,
    contentWidth,
    contentX,
    logoY,
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
