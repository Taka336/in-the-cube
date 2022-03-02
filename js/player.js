import * as THREE from "three";

export default class Player {
  constructor(x, y, z, d, level) {
    this.geometry = new THREE.ConeGeometry(0.1, 0.2);
    this.material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = x;
    this.mesh.position.y = y;
    this.mesh.position.z = z;
    this.movingDistance = d;
    this.level = level;
  }
  moveForward() {
    this.mesh.position.z -= this.movingDistance;
  }
  moveBackward() {
    this.mesh.position.z += this.movingDistance;
  }
  moveRight() {
    this.mesh.position.x += this.movingDistance;
  }
  moveLeft() {
    this.mesh.position.x -= this.movingDistance;
    if (this.canGoUp()) {
      this.mesh.position.y += this.movingDistance;
    }
  }
  canGoUp() {
    const xIdx = this.mesh.position.x / this.movingDistance;
    const yIdx = this.mesh.position.y / this.movingDistance;
    const zIdx = this.mesh.position.z / this.movingDistance;
    if (this.level[yIdx + 1][zIdx][xIdx] === 0) return true;
    else return false;
  }
}
