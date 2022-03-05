import * as THREE from "three";

export default class LocationMap {
  constructor({ x, y, z, size, unitLength }) {
    this.position = {
      x: x,
      y: y,
      z: z,
    };
    this.size = size;
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
        cube.position.z = this.position.z;
        this.meshes.push(cube);
      }
    }
  }
  getCube(row, col) {
    const idx = row * this.size + col;
    return this.meshes[idx];
  }
}
