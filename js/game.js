import Stage from "./stage";
import Player from "./player";
import LocationMap from "./locationMap";
import InputHandler from "./input";
import MoveHandler from "./moveHandler";
import { LEVEL1 } from "./levels";

export default class Game {
  constructor() {
    this.level = LEVEL1;
    this.stage = new Stage(this.level);
    this.player = new Player(
      this.stage.startPostion.x,
      this.stage.startPostion.y,
      this.stage.startPostion.z,
      this.stage.unitLength
    );
    this.xyLocationMap = new LocationMap(0, 3, 0, this.level.length);
    this.xzLocationMap = new LocationMap(1, 3, 0, this.level.length);
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
