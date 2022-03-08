export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (game.state === "menu") {
            game.menu.hoge("up");
          } else {
            game.moveHandler.input("forward");
          }
          break;
        case "ArrowDown":
          if (game.state === "menu") {
            game.menu.hoge("down");
          } else {
            game.moveHandler.input("backward");
          }
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
        case "0":
          game.scene.clear();
          game.buildMenu();
          break;
        case "1":
          game.scene.clear();
          game.levelIdx = 0;
          game.buildStage();
          break;
        case "2":
          game.scene.clear();
          game.levelIdx = 1;
          game.buildStage();
          break;
        default:
          console.log(event.key);
          break;
      }
    });
  }
}
