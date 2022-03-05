import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Game from "./js/game";

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

const game = new Game();
scene.add(...game.meshes);

const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// new OrbitControls(camera, renderer.domElement);

camera.position.x = game.stage.length / 2;
camera.position.y = game.stage.length;
camera.position.z = game.stage.size;

function animate() {
  requestAnimationFrame(animate);
  game.player.mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
