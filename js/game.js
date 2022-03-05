import Stage from "./stage";
import Player from "./player";
import LocationMap from "./locationMap";
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
    this.xyLocationMap = new LocationMap({
      x: 0,
      y: this.stage.unitLength * (this.level.length + 1),
      z: this.stage.unitLength * this.level.length,
      size: this.level.length,
      unitLength: this.stage.unitLength / 2,
    });
    this.xzLocationMap = new LocationMap({
      x: (this.stage.unitLength / 2) * (this.level.length + 0.5),
      y: this.stage.unitLength * (this.level.length + 1),
      z: this.stage.unitLength * this.level.length,
      size: this.level.length,
      unitLength: this.stage.unitLength / 2,
    });

    this.meshes = [
      ...this.stage.meshes,
      this.player.mesh,
      ...this.xyLocationMap.meshes,
      ...this.xzLocationMap.meshes,
    ];

    this.moveHandler = new MoveHandler(
      this.level,
      this.player,
      this.xyLocationMap,
      this.xzLocationMap
    );

    new InputHandler(this.moveHandler);
  }
}
