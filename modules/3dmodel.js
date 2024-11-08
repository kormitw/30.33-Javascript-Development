import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 1, 6);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffc0cb);
document.getElementById('arceus').appendChild( renderer.domElement );

const h1model = document.createElement("h1");
h1model.innerText = "Hello my child";
document.getElementById('arceus-text').appendChild( h1model );

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.update();

const loader = new GLTFLoader();
loader.load( './models/arceus.glb', function ( gltf ) {
    const mesh = gltf.scene;
    mesh.position.set(0, -1, 0);
    mesh.scale.set(.25,.25,.25);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    scene.add(mesh);

}, undefined, function ( error ) {

    console.error( error );

} );

const spotLight = new THREE.SpotLight(0xffffff, 3, 50, 0.2, 0.5);
spotLight.position.set(0, -10, 10);
scene.add(spotLight);

function animate() {
    renderer.render(scene, camera);
    controls.update();
}

export {scene, camera, renderer, h1model, controls, loader, spotLight, animate};