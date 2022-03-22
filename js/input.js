export default class InputHandler {
  constructor(game) {
    this.game = game;
    document.addEventListener("keydown", (event) => {
      switch (this.game.state) {
        case "playing":
          this.playingState(event.key);
          break;
        case "menu":
          this.menuState(event.key);
          break;
      }
    });
  }
  playingState(eventKey) {
    switch (eventKey) {
      case "ArrowUp":
        this.game.moveHandler.input("forward");
        break;
      case "ArrowDown":
        this.game.moveHandler.input("backward");
        break;
      case "ArrowRight":
        this.game.moveHandler.input("right");
        break;
      case "ArrowLeft":
        this.game.moveHandler.input("left");
        break;
      case "Escape":
        this.game.buildMenu();
        break;
      case "r":
        this.game.buildStage();
        break;
    }
  }
  menuState(eventKey) {
    switch (eventKey) {
      case "ArrowUp":
        this.game.menu.move("forward");
        break;
      case "ArrowDown":
        this.game.menu.move("backward");
        break;
      case "ArrowRight":
        this.game.menu.move("right");
        break;
      case "ArrowLeft":
        this.game.menu.move("left");
        break;
      case "Enter":
        this.game.buildStage();
    }
  }
}
