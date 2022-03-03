import Stage from "./stage";
import Player from "./player";
import LocationMap from "./locationMap";
import InputHandler from "./input";
import { LEVEL1 } from "./levels";

export default class Game {
  constructor() {
    this.level = LEVEL1;
    this.stage = new Stage(this.level);
    this.player = new Player(
      this.stage.startPostion.x,
      this.stage.startPostion.y,
      this.stage.startPostion.z,
      this.stage.unitLength,
      this.level
    );
    this.locationMap = new LocationMap();
    this.meshes = [
      ...this.stage.meshes,
      this.player.mesh,
      ...this.locationMap.meshes,
    ];

    new InputHandler(this.player);
  }
}
