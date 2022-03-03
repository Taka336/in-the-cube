import * as THREE from "three";

export default class LocationMap {
  constructor() {
    this.size = 3;
    this.unitLength = 0.3;
    this.unitLengthList = Array(3).fill(this.unitLength);
    this.meshes = [];
    this.position = {
      x: 0,
      y: 3,
      z: 1,
    };
    this.set_cubes();
    this.change_color(1, 2);
  }
  set_cubes() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const geometry = new THREE.BoxGeometry(...this.unitLengthList);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = this.position.x + this.unitLength * j;
        cube.position.y = this.position.y + this.unitLength * i;
        this.meshes.push(cube);
      }
    }
  }
  change_color(row, col) {
    const idx = row * 3 + col;
    const mesh = this.meshes[idx];
    mesh.material.transparent = true;
    mesh.material.opacity = 0.2;
  }
}
