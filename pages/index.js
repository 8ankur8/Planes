import * as THREE from 'three';
import '../styles/Home.module.css'
import { Canvas,useFrame,useThree } from "@react-three/fiber";
import dynamic from "next/dynamic"
const Mint =dynamic(() => import("../component/Mint"),{ssr:false})

import Planes from "../component/Planes"

// function Rig({ mouse }) {
//   const { camera, viewport } = useThree()
//   useFrame((state) => {
//     camera.position.x += (state.mouse.x * viewport.width - camera.position.x) * 0.0005
//     camera.position.y += (-state.mouse.y * viewport.height - camera.position.y) * 0.0005
//     camera.lookAt(0, 0, 0)
//   })
//   return null
// }


export default function Home() {
  
  return (
    <div className="App" >
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)',zIndex:'10' }}>
        <Mint />  
      </div>
      <Canvas  camera={{ position: [0, 0, -15], fov: 75 }}performance={{ min: 0.1 }}> 
      <Planes />
      </Canvas >   
    </div>
  )
}
