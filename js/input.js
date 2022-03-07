export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          game.moveHandler.input("forward");
          break;
        case "ArrowDown":
          game.moveHandler.input("backward");
          break;
        case "ArrowRight":
          game.moveHandler.input("right");
          break;
        case "ArrowLeft":
          game.moveHandler.input("left");
          break;
        case "Enter":
          game.scene.clear();
          game.buildStage();
          break;
      }
    });
  }
}
