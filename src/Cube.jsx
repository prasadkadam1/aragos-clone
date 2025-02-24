import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
const Cube = () => {
  let cubeRef = useRef()
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  camera.position.z = -5;
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
  scene.add(cube);
  return (
    <div>
      <div ref={cubeRef} className='w-[300px] h-[300px] z-[1]  bg-gray-500 absolute top-24 left-[38%] '></div>
    </div>
  )
}

export default Cube