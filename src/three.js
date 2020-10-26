import * as THREE from "three";
import vert from "./shaders/shader.vert";
import frag from "./shaders/shader.frag";

// Initial HMR Setup
if (module.hot) {
  module.hot.accept();

  module.hot.dispose(() => {
    document.querySelector("canvas").remove();
    renderer.forceContextLoss();
    renderer.context = null;
    renderer.domElement = null;
    renderer = null;
    cancelAnimationFrame(animationId);
    removeEventListener("resize", resize);
  });
}

// let camera, scene, renderer;
// let geometry, material, mesh;

// init();
// animate();

// function init() {
//   camera = new THREE.PerspectiveCamera(
//     70,
//     window.innerWidth / window.innerHeight,
//     0.01,
//     10
//   );
//   camera.position.z = 1;

//   scene = new THREE.Scene();

//   geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
//   material = new THREE.MeshNormalMaterial();

//   mesh = new THREE.Mesh(geometry, material);
//   scene.add(mesh);

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(600, 450);
//   document.getElementById("container").appendChild(renderer.domElement);
// }

// function animate() {
//   requestAnimationFrame(animate);

//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.02;

//   renderer.render(scene, camera);
// }

// export default class Sketch {
//   constructor() {
let renderer, camera, scene;
let time, geometry, material, mesh;

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(600, 450);
document.getElementById("container").appendChild(renderer.domElement);

camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;
scene = new THREE.Scene();
addMesh();
time = 0;
render();

function addMesh() {
  geometry = new THREE.PlaneBufferGeometry(1, 1);
  // material = new THREE.MeshBasicMaterial({ color: 0x7777ff });
  material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

function render() {
  console.log("Hello from three.js! YAY!");
  time++;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  console.log(time);
  renderer.render(scene, camera);
  window.requestAnimationFrame(render.bind(this));
}
