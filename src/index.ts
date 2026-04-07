console.log("top of index.ts");

import Game from "./Wolfie2D/Loop/Game";
import MainMenu from "./game/Scenes/MainMenu";

window.onload = () => {
  console.log("window.onload fired");

  const game = new Game({
    canvasSize: { x: 800, y: 600 },
  });

  console.log("Game constructed");
  game.start(MainMenu, {});
  console.log("game.start called");
};
