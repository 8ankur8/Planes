
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { useRef } from 'react'

const randomVector = (r) => [(Math.random() - 0.5) * r, 0, (Math.random() - 0.5) * r]
const randomData = Array.from({ length:50}, (r  = 20) => ({ random: Math.random(), position: randomVector(r)}))

const Plane = ({random,props}) =>{
  const ref = useRef()
  const group = useRef()
  useFrame((state,delta) => {
    const t = state.clock.getElapsedTime() + random * 1000
    ref.current.rotation.set(t-0.5 , Math.PI *0.2 + Math.abs( Math.cos(t )),Math.sin(t*15)*0.05) 
    ref.current.position.set( Math.tan( (t * (random > 0.5 ? random : 0.5)  + Math.PI/2)*0.5 )*30 , Math.cos(t)*random*100 ,random *100)
    group.current.position.set( random*10 -5,random*30-10,random*30 -15) 
    
  })

  return(
    <group ref={group}  >   
    <mesh ref={ref} {...props} >
        <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={11} array={new Float32Array([-0.75,0,0.75,-0.75,0,0.75,-0.75,0,0.75,1.8,0,-0.275,0.275,0,-1.8,1.0,-0.5,-1.0,1.0,-0.5,-1.0,0.85,0,-1.1,0.85,0,-1.1,1.1,0,-0.85,1.1,0,-0.85])} itemSize={3} />
            <bufferAttribute attach="attributes-normal"count={11} array={new Float32Array([-0.611682116985321,0.3479049801826477,-0.7104977965354919,0,1,0,0.7104977965354919,0.3479049801826477,0.611682116985321,0,1,0,0,1,0,-0.611682116985321,0.3479049801826477,-0.7104977965354919,0.7104977965354919,0.3479049801826477,0.611682116985321,0,1,0,0.7104977965354919,0.3479049801826477,0.611682116985321,-0.611682116985321,0.3479049801826477,-0.7104977965354919,0,1,0])} itemSize={3} />
            <bufferAttribute attach='index' count={12} array={new Uint16Array([8,2,6,1,7,4,10,1,3,5,0,9])} />
          </bufferGeometry>
          <meshNormalMaterial side={THREE.DoubleSide}/>
      </mesh>
    </group>
  )
}


function Planes() {
  return (<>
      {randomData.map((props, i) => (
        <Plane key={i} {...props} />
      ))}
      </>
  )
}

export default Planes