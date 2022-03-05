export default class InputHandler {
  constructor(moveHandler) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          moveHandler.input("forward");
          break;
        case "ArrowDown":
          moveHandler.input("backward");
          break;
        case "ArrowRight":
          moveHandler.input("right");
          break;
        case "ArrowLeft":
          moveHandler.input("left");
          break;
      }
    });
  }
}
