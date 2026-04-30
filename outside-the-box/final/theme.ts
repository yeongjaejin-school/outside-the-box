import { GameState } from "./types";

export const getTheme = (state: GameState) =>
  state.darkMode
    ? {
        bg: "#111111",
        fg: "#ffffff",
        fgMid: "#cccccc",
        fgDim: "#888888",
        stroke: "#ffffff",
        overlayBg: "rgba(10,10,10,0.90)",
        divider: "#444444",
      }
    : {
        bg: "#f0f0f0",
        fg: "#111111",
        fgMid: "#333333",
        fgDim: "#666666",
        stroke: "#111111",
        overlayBg: "rgba(220,220,220,0.93)",
        divider: "#aaaaaa",
      };
