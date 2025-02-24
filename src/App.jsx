import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import UseLoader from './UseLoader'
import Loader from './Loader'
import { log } from 'three/tsl'
// import Cube from './Cube'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// // camera.position.z = -5;
// const animate = () => {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// };
// animate();
// scene.add(cube);

const MyComponentWithLoader = UseLoader(() => {
  let cubeRef = useRef()
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
    });
  }, []);
  return (
    <div data-aos="fade-up" className=' h-screen w-screen text-white overflow-auto' id="homePage">
      <nav className='p-10 flex justify-between sticky  top-0 z-10 bg-transparent'>
        <div className='w-[35%] flex justify-between' data-aos="fade-up">

          <h3 className='border-r-2 pr-5' data-aos="fade-up">Aragos </h3>
          <p className='text-sm' data-aos="fade-up">AI-system powered by light
            AI-system powered by light</p>
        </div>
        <div className='flex' data-aos="fade-up">
          <p>CONTACT SALES</p>
          <p >--</p>
        </div>
      </nav>
      <div ref={cubeRef} data-aos="fade-down" className='w-[300px] h-[300px] z-[1]  absolute top-24 left-[68%] '>
        {/* <Spline scene="https://prod.spline.design/Ow6SLZmIB1o4oZ9U/scene.splinecode" /> */}
        <Spline className='bg-black w-[600px] h-[600px]' scene="https://prod.spline.design/Ow6SLZmIB1o4oZ9U/scene.splinecode" />

      </div>
      <h1 className='text-white p-16 text-8xl relative inline-block z-[1]'>Still slowed <br />
        by electrons?</h1>
      <p>Arago reinvents computing, with light</p>
      {/* <Cube ></Cube> */}
      <main className='p-[5vw] '>
        <p className='h-[20vh] border-l-[1px] border-l-white '>Scroll to discover</p>
        <div className='w-[50%] h-[100vh]  border-t-[1px] border-t-white mt-20'>
          <p className='pt-3 text-gray-400'>Our mission</p>
          <h1 className='text-2xl pt-10 text-gray-500'>Current models are tuned to fit the compute and <br /> memory capacity of today's accelerators, <span className='text-gray-300 font-normal'>capping their <br /> potential</span></h1>
          <p className='pt-14 text-gray-400'>Arago's system combines a PyTorch-based software stack with a multi-physics processor, maximizing Flops/$ and Flops/Watt.</p>
        </div>
        <div className='w-[50%] h-[100vh]  border-t-[1px] border-t-white mt-20'>
          <p className='pt-3 text-gray-400'>Specificity </p>
          <h1 className='pt-14 text-gray-400 text-2xl'>Unlocking lightning-fast <br /> <span className='text-gray-300 font-normal'>matrix multiplication</span> for <br /> <span className='text-gray-300 font-normal'>next-generation</span> models <br /> and applications</h1>
        </div>
        <div className='w-[90vw]  flex justify-end h-[130vh]' >
          <section className='w-[20vw] text-slate-500'>

            <p>Matrix multiplications are the <br /> backbone of every AI model.          </p> <br /> <br />
            <p>Based on a multi-physics <br /> technology, we accelerate this <br /> process without disrupting the <br /> user experience, while ensuring <br /> compatibility with existing <br /> systems.</p>
          </section>
        </div>
        <div className='w-[90vw]  flex justify-end h-[130vh]' >
          <section className='w-[35vw] text-slate-500'>

            <p className='text-sm '>Performance</p> <br /> <br />
            <p className=' text-gray-400 text-2xl'><span className='text-gray-300 font-normal'>Higher computation capacity:</span> a byte of <br /> data in a GPU is only used for a few <br /> operations, whereas on Arago's <br /> system, that same byte enables <br /> thousands of operations, achieving <br /> multi-PetaOp/s performance.</p>
          </section>
        </div>
        <div className='w-[40vw]  h-[120vh]' >
          <section className='w-[35vw] text-slate-500'>

            <p className='text-sm '>SPEED</p> <br /> <br />
            <p className=' text-gray-400 text-2xl'><span className='text-gray-300 font-normal'>Higher throughput:</span> excel when <br /> treating tensor sizes in the hundreds <br /> and thousands.</p>
          </section>
        </div>
        <div className='w-[90vw] h-[120vh]  flex justify-end h-[130vh]' >
          <section className='w-[35vw] text-slate-500'>

            <p className='text-sm '>Energy</p> <br /> <br />
            <p className=' text-gray-400 text-2xl'><span className='text-gray-300 font-normal'>Lower energy consumption:</span>  reduce <br /> costs and enable the next multi-die 3D <br /> systems.</p>
          </section>
        </div>
        <section className='w-[95%] border-t-[1px] border-t-gray-300'>
          <div className='w-[40vw]  h-[220vh]' >
            <section className='w-[35vw] text-slate-500'>

              <p className='text-sm '>SPEED</p> <br /> <br />
              <p className=' text-gray-400 text-2xl'><span className='text-gray-300 font-normal'>Higher throughput:</span> excel when <br /> treating tensor sizes in the hundreds <br /> and thousands.</p>
            </section>
            <section>
              <div className='w-[90vw]  flex justify-end mt-[-100px] h-[130vh]' >
                <section className='w-[40vw] flex gap-6 text-slate-500'>
                  <p>Matrix multiplications are the <br /> backbone of every AI model.          </p> <br /> <br />
                  <p>Based on a multi-physics <br /> technology, we accelerate this <br /> process without disrupting the <br /> user experience, while ensuring <br /> compatibility with existing <br /> systems.</p>
                </section>
              </div>
            </section>
          </div>
        </section>
        <article className='h-[100vh]'>
          <h1 className='text-4xl'>Welcome to the new era</h1>
        </article>
        <article>
          <section> 
            <div className='w-[15vw] bg-[ rgba(100, 100, 100, 0.7 ) ] h-[15vw] border-[1px] border-gray-300'></div>
            <div className='w-[15vw] bg-[ rgba(100, 100, 100, 0.7 ) ] h-[15vw] border-[1px] border-gray-300'></div>
            <div className='w-[15vw] bg-[ rgba(100, 100, 100, 0.7 ) ] h-[15vw] border-[1px] border-gray-300'></div>
          </section>
          <section></section>
        </article>
      </main>
    </div>
  )
});
const App = () => {
  return (
    <div>
      <MyComponentWithLoader />
    </div>
  )
}

export default App



