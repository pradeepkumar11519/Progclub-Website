import React from 'react'
import { useEffect } from 'react'
import * as THREE from 'three';
import HomePageTextStyle from './HomePageTextStyle';
export default function HomePage3() {
    useEffect(() => {
        // stole the THREE setup from https://codepen.io/Xanmia/pen/FdABn since i was lazy this time around.

        let stageWidth=  window.innerWidth - 100;
        let stageHeight = window.innerHeight;
        let xRows = 30;
        let zRows = 30;
        let cubeSize = 600;
        let cubeGap = 200;
        let cubeRow = cubeSize + cubeGap;

        let container = document.getElementById('container');

        let camera = new THREE.PerspectiveCamera(55,window.innerWidth / window.innerHeight, 1, 20000);
        camera.position.y = 5000;
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        let scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 5000, 10000);

        let pointLight = new THREE.PointLight(0x80daeb);
        pointLight.position.x = 0;
        pointLight.position.y = 1800;
        pointLight.position.z = -1800;
        scene.add(pointLight);

        // let pointLight =  new THREE.PointLight(0xc0c0f0);
        // pointLight.position.x = 0;
        // pointLight.position.y = 800;
        // pointLight.position.z = 1000;
        // scene.add(pointLight);

        let group = new THREE.Object3D();
        scene.add(group);

        let cubes = [];

        let halfXRows = (cubeRow * -xRows / 2);
        let halfZRows = (cubeRow * -zRows / 2);

        for (let x = 0; x < xRows; x++) {
            cubes[x] = []
            for (let z = 0; z < zRows; z++) {
                let cubeHeight = 100 + Math.random() * 700;
                cubeHeight = 10 + (Math.sin(x / xRows * Math.PI) + Math.sin(z / zRows * Math.PI)) * 200 + Math.random() * 150;

                let geometry = new THREE.BoxGeometry(cubeSize, cubeHeight, cubeSize);

                let colours = [
                    0x4444ff, 0x4477ff, 0x7744ff, 0xff8080
                ];

                let material = new THREE.MeshPhongMaterial({
                    ambient: 0x030303,
                    color: colours[~~(Math.random() * colours.length)], 
                    color: ~~(Math.random() * 0xffffff), 
                    color: 0x4444ff,
                    specular: 0xffffff,
                    shininess: 10, //~~(Math.random() * 200),
                    shading: THREE.SmoothShading
                })

                let cube = new THREE.Mesh(geometry, material);
                cube.position.x = halfXRows + x * cubeRow;
                cube.position.y = cubeHeight / 2;
                cube.position.z = (cubeRow * -zRows / 2) + z * cubeRow;

                cube.height = cubeHeight;
                group.add(cube);

                cubes[x][z] = cube;

            }
        }



        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(stageWidth, stageHeight);
        container.appendChild(renderer.domElement);

        let grid = { x: 0, z: 0 };
        let position = { x: 0, y: 0, z: 0 };

        function checkRow() {

            let xIndex = (position.x / cubeRow);
            let xLoops = Math.floor(xIndex / xRows);

            let zIndex = (position.z / cubeRow);
            let zLoops = Math.floor(zIndex / zRows);

            for (let x = 0; x < xRows; x++) {
                for (let z = 0; z < zRows; z++) {

                    let dx, dz = 0;
                    if (x >= xIndex - xLoops * xRows) {
                        dx = xRows * (1 - xLoops);
                    } else {
                        dx = xRows * (0 - xLoops)
                    }
                    if (z >= zIndex - zLoops * zRows) {
                        dz = zRows * (1 - zLoops);
                    } else {
                        dz = zRows * (0 - zLoops)
                    }


                    cubes[x][z].position.x = (x - dx) * cubeRow - halfXRows;
                    cubes[x][z].position.z = (z - dz) * cubeRow - halfZRows

                    let scale = (cubes[x][z].position.z + group.position.z) / 1500;
                    if (scale < 1) scale = 1;
                    scale = Math.pow(scale, 1.2);

                    cubes[x][z].scale.y = scale;

                    cubes[x][z].position.y = (cubes[x][z].height * scale) / 2;

                }
            }

        }
        let camPos = new THREE.Vector3(0, 0, 0);
        let mouse = { x: 0, y: 0 }
        let isRunning = true;
        function render(t) {
            if (isRunning) requestAnimationFrame(render);

            position.x += (Math.sin(t * 0.001)) * 20;
            position.z += (Math.cos(t * 0.0008) + 5) * 20;
            group.position.x = -position.x;
            group.position.z = -position.z;


            checkRow();

            camera.position.x = Math.sin(t * 0.0003) * 1000;// + mouse.y;
            camera.position.z = -4000;
            camera.position.y = (Math.cos(t * 0.0004) + 1.3) * 3000;
            camera.lookAt(camPos);

            renderer.render(scene, camera);

        }
        render(0);

        window.addEventListener("mousedown", function () {
            // isRunning = false;
        })


        window.addEventListener("mousemove", function (event) {
            mouse = event;
        })



    }, [])
    return (
        <div id="container" className='bg-no-repeat   overflow-x-hidden relative !w-full '>
            <div className=" w-full h-full grid grid-cols-2 z-[10]">
                <HomePageTextStyle />
            </div>

        </div>
    )
}
