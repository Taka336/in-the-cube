import Stage from "./stage";
import Player from "./player";
import Menu from "./menu";
import LocationDisplay from "./locationDisplay";
import InputHandler from "./input";
import MoveHandler from "./moveHandler";
import { LEVELS } from "./levels";

export default class Game {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.state = null;
    this.levels = LEVELS;
    this.levelIdx = 0;

    this.buildMenu();

    new InputHandler(this);
  }
  buildMenu() {
    this.state = "menu";
    this.menu = new Menu(this.levels);
    this.scene.add(...this.menu.meshes);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = this.levels.length + 1;
  }
  buildStage() {
    this.state = "playing";
    this.level = this.levels[this.levelIdx];
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

    this.moveHandler = new MoveHandler(
      this.level,
      this.player,
      this.locationDisplay
    );

    this.camera.position.x = (this.stage.length - this.stage.unitLength) / 2;
    this.camera.position.y = this.stage.length;
    this.camera.position.z = this.stage.size;

    this.scene.add(
      this.player.mesh,
      ...this.stage.meshes,
      ...this.locationDisplay.meshes
    );
  }
}
