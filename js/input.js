export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (game.state === "menu") {
            game.menu.move("forward");
          } else {
            game.moveHandler.input("forward");
          }
          break;
        case "ArrowDown":
          if (game.state === "menu") {
            game.menu.move("backward");
          } else {
            game.moveHandler.input("backward");
          }
          break;
        case "ArrowRight":
          if (game.state === "menu") {
            game.menu.move("right");
          } else {
            game.moveHandler.input("right");
          }
          break;
        case "ArrowLeft":
          if (game.state === "menu") {
            game.menu.move("left");
          } else {
            game.moveHandler.input("left");
          }
          break;
        case "Enter":
          game.scene.clear();
          game.buildStage();
          break;
        case "0":
          game.scene.clear();
          game.buildMenu();
          break;
        default:
          console.log(event.key);
          break;
      }
    });
  }
}
