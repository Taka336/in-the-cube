import * as THREE from "three";

export default class Menu {
  constructor(levels) {
    this.levels = levels;
    this.meshes = [];
    this.unitLength = 0.8;
    this.setCubes();
    this.setCone();
  }
  setCubes() {
    const geometory = new THREE.BoxGeometry(
      this.unitLength,
      this.unitLength,
      this.unitLength
    );
    for (let i = 0; i < this.levels.length; i++) {
      const material = new THREE.MeshNormalMaterial({
        transparent: true,
        opacity: 0.2,
      });
      const cube = new THREE.Mesh(geometory, material);
      cube.position.x = this.unitLength * (i - 1) * 2;
      cube.position.y = 0;
      cube.position.z = 0;
      this.meshes.push(cube);
    }
  }
  setCone() {
    const geometory = new THREE.ConeGeometry(
      this.unitLength / 4,
      this.unitLength / 2
    );
    const material = new THREE.MeshNormalMaterial();
    const cone = new THREE.Mesh(geometory, material);
    cone.position.x = -2 * this.unitLength;
    this.meshes.push(cone);
  }
}
