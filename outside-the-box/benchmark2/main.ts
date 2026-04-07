console.log("[benchmark2] main.ts loaded");

window.onload = () => {
  console.log("[benchmark2] window.onload fired");

  const gameCanvas = document.getElementById(
    "game-canvas",
  ) as HTMLCanvasElement | null;
  const debugCanvas = document.getElementById(
    "debug-canvas",
  ) as HTMLCanvasElement | null;
  const textCanvas = document.getElementById(
    "text-canvas",
  ) as HTMLCanvasElement | null;
  const stats = document.getElementById("stats");

  console.log("[benchmark2] DOM lookup", {
    gameCanvasFound: !!gameCanvas,
    debugCanvasFound: !!debugCanvas,
    textCanvasFound: !!textCanvas,
    statsFound: !!stats,
  });

  if (!gameCanvas || !debugCanvas || !textCanvas) {
    console.error("[benchmark2] Missing required canvas elements.");
    return;
  }

  gameCanvas.width = 800;
  gameCanvas.height = 600;
  debugCanvas.width = 800;
  debugCanvas.height = 600;
  textCanvas.width = 800;
  textCanvas.height = 600;

  const ctx = gameCanvas.getContext("2d");
  console.log("[benchmark2] 2d context acquired:", !!ctx);

  if (!ctx) {
    console.error("[benchmark2] Could not acquire 2D context.");
    return;
  }

  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, 800, 600);
  console.log("[benchmark2] background rendered");

  ctx.fillStyle = "#ffffff";
  ctx.font = "48px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Outside-the-Box", 400, 140);

  ctx.font = "24px Arial";
  ctx.fillText("Main Menu", 400, 220);

  ctx.font = "18px Arial";
  ctx.fillText("Starter page loaded successfully", 400, 280);

  console.log("[benchmark2] starter menu rendered successfully");
};
