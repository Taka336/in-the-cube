import * as THREE from "three";

export default class Stage {
  constructor(level) {
    this.level = level;
    this.size = level.length;
    this.unitLength = 0.5;
    this.length = this.unitLength * this.size;
    this.meshes = [];
    this.startPostion = {
      x: (this.length - this.unitLength) / 2,
      y: 0,
      z: this.length - this.unitLength,
    };
    this.setCubes();
    this.setContainer();
  }
  setCubes() {
    const geometry = new THREE.BoxGeometry(
      this.unitLength,
      this.unitLength,
      this.unitLength
    );
    const material = new THREE.MeshNormalMaterial();

    for (let i = 0; i < this.level.length; i++) {
      for (let j = 0; j < this.level[i].length; j++) {
        for (let k = 0; k < this.level[i][j].length; k++) {
          if (this.level[i][j][k] === 1) {
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = this.unitLength * k;
            cube.position.y = this.unitLength * i;
            cube.position.z = this.unitLength * j;
            this.meshes.push(cube);
          }
        }
      }
    }
  }
  setContainer() {
    const geometry = new THREE.BoxGeometry(
      this.length,
      this.length,
      this.length
    );
    const material = new THREE.MeshNormalMaterial({
      transparent: true,
      opacity: 0.4,
    });
    const container = new THREE.Mesh(geometry, material);
    container.position.x = (this.length - this.unitLength) / 2;
    container.position.y = (this.length - this.unitLength) / 2;
    container.position.z = (this.length - this.unitLength) / 2;
    this.meshes.push(container);
  }
}
