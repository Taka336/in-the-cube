export default class MoveHandler {
  constructor(level, player, xyLocationMap, xzLocationMap) {
    this.level = level;
    this.player = player;
    this.xyLocationMap = xyLocationMap;
    this.xzLocationMap = xzLocationMap;
    this.updateXYLocationMap();
    this.updateXZLocationMap();
  }
  move(direction) {
    this.updateXYLocationMap();
    this.updateXZLocationMap();
    this.player.move(direction);
    this.updateXYLocationMap();
    this.updateXZLocationMap();
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
  updateXYLocationMap() {
    let [x, y, z] = this.player.getPositionIndex();
    z = this.level.length - 1 - z;
    const cube = this.xyLocationMap.getCube(z, x);
    cube.material.visible = !cube.material.visible;
  }
  updateXZLocationMap() {
    let [x, y, z] = this.player.getPositionIndex();
    const cube = this.xzLocationMap.getCube(y, x);
    cube.material.visible = !cube.material.visible;
  }
}
