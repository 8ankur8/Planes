import * as THREE from 'three';
import '../styles/Home.module.css'
import { Canvas,useFrame,useThree } from "@react-three/fiber";
import dynamic from "next/dynamic"
const Mint =dynamic(() => import("../component/Mint"),{ssr:false})

import Planes from "../component/Planes"

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
