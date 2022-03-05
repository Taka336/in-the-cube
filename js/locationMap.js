import * as THREE from "three";

export default class LocationMap {
  constructor(x, y, z, size, unitLength = 0.3) {
    this.size = size;
    this.position = {
      x: x,
      y: y,
      z: z,
    };
    this.unitLength = unitLength;
    this.meshes = [];
    this.setCubes();
    this.invisibleCubeIndex = [];
  }
  setCubes() {
    const geometry = new THREE.BoxGeometry(
      this.unitLength,
      this.unitLength,
      this.unitLength
    );
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = this.position.x + this.unitLength * j;
        cube.position.y = this.position.y + this.unitLength * i;
        this.meshes.push(cube);
      }
    }
  }
  getCube(row, col) {
    const idx = row * 3 + col;
    return this.meshes[idx];
  }
}
