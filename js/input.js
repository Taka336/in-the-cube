export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          player.move("forward");
          break;
        case "ArrowDown":
          player.move("backward");
          break;
        case "ArrowRight":
          player.move("right");
          break;
        case "ArrowLeft":
          player.move("left");
          break;
      }
    });
  }
}
