import * as THREE from "three";
import { ALPHABETS } from "./alphabets";

export default class Text {
  constructor({ x, y, z, size, unitLength }) {
    this.position = {
      x: x,
      y: y,
      z: z,
    };
    this.size = size;
    this.unitLength = unitLength;
    this.meshes = [];
    this.alphabet = ALPHABETS.A;
    this.setCubes();
  }
  setCubes() {
    const geometry = new THREE.BoxGeometry(
      this.unitLength,
      this.unitLength,
      this.unitLength
    );
    for (let i = 0; i < this.alphabet.length; i++) {
      for (let j = 0; j < this.alphabet[i].length; j++) {
        if (this.alphabet[i][j] === 1) {
          const material = new THREE.MeshNormalMaterial();
          const cube = new THREE.Mesh(geometry, material);
          cube.position.x = this.position.x + this.unitLength * j;
          cube.position.y = this.position.y - this.unitLength * i;
          cube.position.z = this.position.z;
          this.meshes.push(cube);
        }
      }
    }
  }
}
