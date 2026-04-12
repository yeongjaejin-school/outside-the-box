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

  const topInnerWidth = topBoxWidth * 0.42;
  const topInnerHeight = topBoxHeight * 0.62;
  const topInnerX = w / 2 - topInnerWidth / 2;
  const topInnerY = topBoxY + topBoxHeight * 0.16;

  const movementAreaWidth = topBoxWidth * 0.42;
  const movementAreaHeight = topBoxHeight * 0.62;
  const movementAreaX = topInnerX;
  const movementAreaY = topInnerY;

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
    movementAreaX,
    movementAreaY,
    movementAreaWidth,
    movementAreaHeight,
    bottomBoxY,
    bottomBoxHeight,
  };
};

export const getMovementLayout = (ctx: CanvasRenderingContext2D) => {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;

  const gameFrameX = w * 0.05;
  const gameFrameY = h * 0.05;
  const gameFrameWidth = w * 0.9;
  const gameFrameHeight = h * 0.65;

  const bottomFrameX = 0;
  const bottomFrameY = h * 0.7;
  const bottomFrameWidth = w;
  const bottomFrameHeight = h * 0.3;

  const framePaddingX = 24;
  const framePaddingTop = 24;
  const framePaddingBottom = 56;
  const movementAreaX = gameFrameX + framePaddingX;
  const movementAreaY = gameFrameY + framePaddingTop;
  const movementAreaWidth = gameFrameWidth - framePaddingX * 2;
  const movementAreaHeight = gameFrameHeight - framePaddingTop - framePaddingBottom;

  return {
    w,
    h,
    gameFrameX,
    gameFrameY,
    gameFrameWidth,
    gameFrameHeight,
    bottomFrameX,
    bottomFrameY,
    bottomFrameWidth,
    bottomFrameHeight,
    movementAreaX,
    movementAreaY,
    movementAreaWidth,
    movementAreaHeight,
  };
};
