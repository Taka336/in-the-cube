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
  move(direction) {
    if (this.canGo(direction)) {
      switch (direction) {
        case "forward":
          this.mesh.position.z -= this.movingDistance;
          break;
        case "backward":
          this.mesh.position.z += this.movingDistance;
          break;
        case "right":
          this.mesh.position.x += this.movingDistance;
          break;
        case "left":
          this.mesh.position.x -= this.movingDistance;
          break;
      }
    }
  }
  getPositionIndex() {
    const x = this.mesh.position.x / this.movingDistance;
    const y = this.mesh.position.y / this.movingDistance;
    const z = this.mesh.position.z / this.movingDistance;
    return [x, y, z];
  }
  canGo(direction) {
    let [x, y, z] = this.getPositionIndex();
    switch (direction) {
      case "forward":
        z -= 1;
        break;
      case "backward":
        z += 1;
        break;
      case "right":
        x += 1;
        break;
      case "left":
        x -= 1;
        break;
      case "up":
        y += 1;
        break;
    }
    if (this.level[y][z][x] === 0) return true;
    else return false;
  }
}
