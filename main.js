import "./style.css";
import * as THREE from "three";
import Stage from "./js/stage";
import { LEVEL1 } from "./js/levels";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const stage = new Stage(LEVEL1);
stage.addToScene(scene);

const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

camera.position.x = 0.5;
camera.position.y = 1.5;
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
