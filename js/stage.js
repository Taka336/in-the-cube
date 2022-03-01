import * as THREE from "three";

export default class Stage {
  constructor(level) {
    this.level = level;
    this.size = level.length;
    this.unitLength = 0.5;
    this.unitLengthList = Array(3).fill(this.unitLength);
    this.length = this.unitLength * this.size;
    this.lengthList = Array(3).fill(this.length);
    this.set_cubes();
    this.set_container();
  }
  set_cubes() {
    this.cubes = [];
    for (let i = 0; i < this.level.length; i++) {
      for (let j = 0; j < this.level[i].length; j++) {
        for (let k = 0; k < this.level[i][j].length; k++) {
          if (this.level[i][j][k] === 1) {
            const geometry = new THREE.BoxGeometry(...this.unitLengthList);
            const material = new THREE.MeshNormalMaterial();
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = this.unitLength * k;
            cube.position.y = this.unitLength * i;
            cube.position.z = this.unitLength * j;
            this.cubes.push(cube);
          }
        }
      }
    }
  }
  set_container() {
    const geometry = new THREE.BoxGeometry(...this.lengthList);
    const material = new THREE.MeshNormalMaterial({
      transparent: true,
      opacity: 0.3,
    });
    this.container = new THREE.Mesh(geometry, material);
    this.container.position.x = (this.length - this.unitLength) / 2;
    this.container.position.y = (this.length - this.unitLength) / 2;
    this.container.position.z = (this.length - this.unitLength) / 2;
  }
  addToScene(scene) {
    this.cubes.forEach((cube) => scene.add(cube));
    scene.add(this.container);
  }
}
