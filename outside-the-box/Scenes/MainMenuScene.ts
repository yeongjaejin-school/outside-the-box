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

  if (!ctx) {
    console.error("[benchmark2] Could not acquire 2D context.");
    return;
  }

  // Background
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, 800, 600);

  // Title
  ctx.fillStyle = "#ffffff";
  ctx.font = "42px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Outside-the-Box", 400, 60);

  // Top large panel
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 90, 700, 320);

  // Bottom text panel
  ctx.strokeRect(50, 440, 700, 120);

  // Placeholder text in top panel
  ctx.font = "28px Arial";
  ctx.fillText("TOP SCREEN AREA", 400, 260);

  // Placeholder text in bottom panel
  ctx.font = "22px Arial";
  ctx.fillText("BOTTOM TEXT AREA", 400, 490);

  ctx.font = "16px Arial";
  ctx.fillText("Game description / menu text will go here.", 400, 525);

  console.log("[benchmark2] boxed menu layout rendered successfully");
};
