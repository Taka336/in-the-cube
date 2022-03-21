import Stage from "./stage";
import Player from "./player";
import LocationDisplay from "./locationDisplay";
import InputHandler from "./input";
import MoveHandler from "./moveHandler";
import { LEVEL1, LEVEL2 } from "./levels";

const GAMESTATE = {
  MENU: 0,
  RUNNING: 1,
};

export default class Game {
  constructor() {
    this.level = LEVEL2;
    this.stage = new Stage(this.level);
    this.player = new Player(
      this.stage.startPostion.x,
      this.stage.startPostion.y,
      this.stage.startPostion.z,
      this.stage.unitLength
    );
    this.locationDisplay = new LocationDisplay({
      x: 0,
      y: this.stage.unitLength * (this.level.length + 1),
      z: this.stage.unitLength * (this.level.length - 1),
      size: this.level.length,
      unitLength: this.stage.unitLength,
    });
    this.meshes = [
      this.player.mesh,
      ...this.stage.meshes,
      ...this.locationDisplay.meshes,
    ];

    this.moveHandler = new MoveHandler(
      this.level,
      this.player,
      this.locationDisplay
    );

    new InputHandler(this.moveHandler);
  }
}
