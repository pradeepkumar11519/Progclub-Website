import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { PerspectiveCamera } from '@react-three/drei';
import {OrbitControls, useGLTF} from '@react-three/drei'



function FBXViewer({ src }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pclub.gltf')
  console.log(nodes)
  return (
    <div>

    </div>
    // <group ref={group} {...props} dispose={null} scale={3}>
    //   <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.setStripes} />
    //   <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh} />
    //   <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.soul} />
    //   <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColors.soul} />
    //   <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.soul} />
    //   <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes} />
    //   <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes} />
    //   <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.soul} />
    // </group>
  );
}

export default FBXViewer;
useGLTF.preload('/pclub.glb');