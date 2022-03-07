import Stage from "./stage";
import Player from "./player";
import LocationDisplay from "./locationDisplay";
import InputHandler from "./input";
import MoveHandler from "./moveHandler";
import { LEVELS } from "./levels";

const STATE = {
  MENU: 0,
  PLAY: 1,
};

export default class Game {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.state = STATE.MENU;

    new InputHandler(this);
  }
  buildStage() {
    this.level = LEVELS["LEVEL1"];
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

    this.camera.position.x = (this.stage.length - this.stage.unitLength) / 2;
    this.camera.position.y = this.stage.length;
    this.camera.position.z = this.stage.size;

    this.scene.add(...this.meshes);
  }
}
