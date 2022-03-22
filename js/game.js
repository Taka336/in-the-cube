import Stage from "./stage";
import Player from "./player";
import Menu from "./menu";
import navigationDisplay from "./navigation";
import InputHandler from "./input";
import MoveHandler from "./move";
import { levels } from "./levels";
import { state } from "./state";

export default class Game {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;

    this.buildMenu();

    new InputHandler(this);
  }
  buildMenu() {
    state.changeTo("menu");
    levels.setIndexToZero();
    this.scene.clear();
    this.menu = new Menu(this);
    this.scene.add(...this.menu.meshes);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = levels.getLength() + 1;
  }
  buildStage() {
    state.changeTo("playing");
    this.scene.clear();
    this.level = levels.getLevel();
    this.stage = new Stage(this.level);
    this.player = new Player(
      this.stage.startPostion.x,
      this.stage.startPostion.y,
      this.stage.startPostion.z,
      this.stage.unitLength
    );
    this.navigationDisplay = new navigationDisplay({
      x: 0,
      y: this.stage.unitLength * (this.level.length + 1),
      z: this.stage.unitLength * (this.level.length - 1),
      size: this.level.length,
      unitLength: this.stage.unitLength,
    });

    this.moveHandler = new MoveHandler(
      this.level,
      this.player,
      this.navigationDisplay
    );

    this.camera.position.x = (this.stage.length - this.stage.unitLength) / 2;
    this.camera.position.y = this.stage.length;
    this.camera.position.z = this.stage.size;

    this.scene.add(
      this.player.mesh,
      ...this.stage.meshes,
      ...this.navigationDisplay.meshes
    );
  }
}
