import * as THREE from "three";

export default class LocationDisplay {
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
  }
  setCubes() {
    const geometry = new THREE.BoxGeometry(
      this.unitLength,
      this.unitLength / 2,
      this.unitLength
    );
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.size; j++) {
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = this.position.x + this.unitLength * j;
        cube.position.y = this.position.y + (this.unitLength / 2) * i;
        cube.position.z = this.position.z;
        this.meshes.push(cube);
      }
    }
  }
  getCube(row, col) {
    const index = row * this.size + col;
    return this.meshes[index];
  }
  update(playerLocationIndex) {
    let [x, y, z] = playerLocationIndex;
    z = this.size - 1 - z;
    const xCube = this.getCube(0, x);
    const yCube = this.getCube(1, z);
    const zCube = this.getCube(2, y);
    xCube.material.visible = !xCube.material.visible;
    yCube.material.visible = !yCube.material.visible;
    zCube.material.visible = !zCube.material.visible;
  }
}
