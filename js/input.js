export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          player.moveInput("forward");
          break;
        case "ArrowDown":
          player.moveInput("backward");
          break;
        case "ArrowRight":
          player.moveInput("right");
          break;
        case "ArrowLeft":
          player.moveInput("left");
          break;
      }
    });
  }
}
