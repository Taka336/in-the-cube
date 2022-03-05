import Stage from "./stage";
import Player from "./player";
import LocationDisplay from "./locationDisplay";
import Text from "./text";
import InputHandler from "./input";
import MoveHandler from "./moveHandler";
import { LEVEL1, LEVEL2 } from "./levels";

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
    this.text = new Text({
      x: 0,
      y: 5,
      z: this.stage.unitLength * (this.level.length - 1),
      size: this.level.length,
      unitLength: this.stage.unitLength / 4,
    });

    this.meshes = [
      this.player.mesh,
      ...this.stage.meshes,
      ...this.locationDisplay.meshes,
      ...this.text.meshes,
    ];

    this.moveHandler = new MoveHandler(
      this.level,
      this.player,
      this.locationDisplay
    );

    new InputHandler(this.moveHandler);
  }
}
