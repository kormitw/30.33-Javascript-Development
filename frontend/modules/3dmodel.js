import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

export class threedmodelElement {
    constructor(divId, modelPath, textId, textElement){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.set(0, 1, 6);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor(0xffc0cb);
        document.getElementById(divId).appendChild(this.renderer.domElement);

        this.h1model = document.createElement("h1");
        this.h1model.innerText = textElement;
        document.getElementById(textId).appendChild( this.h1model );

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.enablePan = false;
        this.controls.enableZoom = false;
        this.controls.minPolarAngle = 0.5;
        this.controls.maxPolarAngle = 1.5;
        this.controls.autoRotate = true;
        this.controls.update();

        this.loadModel(modelPath);

        this.setUpLighting();

        this.startAnimation();
    }

    loadModel(modelPath){
        const loader = new GLTFLoader();
        loader.load( modelPath, (gltf) => {
            const mesh = gltf.scene;
            mesh.position.set(0, -1, 0);
            mesh.scale.set(.25,.25,.25);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            this.scene.add(mesh);

        }, undefined, function ( error ) {

            console.error( error );

        } );
    }

    setUpLighting(){
        const spotLight = new THREE.SpotLight(0xffffff, 3, 50, 0.2, 0.5);
        spotLight.position.set(0, -10, 10);
        this.scene.add(spotLight);
    }

    startAnimation() {
        const animate = () => {
            this.renderer.render(this.scene, this.camera);
            this.controls.update();
        };

        this.renderer.setAnimationLoop(animate);
    }
}