export default class MoveHandler {
  constructor(level, player, navigationDisplay) {
    this.level = level;
    this.player = player;
    this.navigationDisplay = navigationDisplay;
    this.navigationDisplay.update(this.player.getPositionIndex());
  }
  move(direction) {
    this.navigationDisplay.update(this.player.getPositionIndex());
    this.player.move(direction);
    this.navigationDisplay.update(this.player.getPositionIndex());
  }
  input(direction) {
    if (this.playerCanMove(direction)) {
      this.move(direction);
    } else {
      if (this.playerCanMove("up")) {
        this.move("up");
        if (this.playerCanMove(direction)) {
          this.move(direction);
        }
      }
    }
    while (this.playerCanMove("down")) {
      this.move("down");
    }
  }
  playerCanMove(direction) {
    let [x, y, z] = this.player.getPositionIndex();
    switch (direction) {
      case "forward":
        z -= 1;
        break;
      case "backward":
        z += 1;
        break;
      case "right":
        x += 1;
        break;
      case "left":
        x -= 1;
        break;
      case "up":
        y += 1;
        break;
      case "down":
        y -= 1;
        break;
    }
    try {
      if (this.level[y][z][x] === 0) return true;
      else return false;
    } catch {
      return false;
    }
  }
}
