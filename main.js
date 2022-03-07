import * as THREE from "three";
import "./style.css";
import Game from "./js/game";

const W = window.innerWidth;
const H = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, W / H, 0.1, 30);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(W, H);
document.body.appendChild(renderer.domElement);

const game = new Game(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
