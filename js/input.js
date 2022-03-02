export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          player.moveForward();
          break;
        case "ArrowDown":
          player.moveBackward();
          break;
        case "ArrowRight":
          player.moveRight();
          break;
        case "ArrowLeft":
          player.moveLeft();
          break;
      }
    });
  }
}
