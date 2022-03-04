import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

function Mars() {

    // Load in Textures for Mars & Stars
    const marsSkin = useLoader(THREE.TextureLoader, 'mars.jpg')
    const stars = useLoader(THREE.TextureLoader, 'stars2.jpg')
    
    // Define Mars Mesh for ability to rotate
    const marsMesh = React.useRef();
    
    useFrame( () => {
        marsMesh.current.rotation.y += 0.001;
    })

    return (
        <>
            {/* Mars Mesh */}
            <mesh ref={marsMesh}>
                <sphereGeometry args={[6,32,32]} />
                <meshPhongMaterial specular={{color: "grey"}} />
                <meshStandardMaterial
                    map={marsSkin}
                    roughness={0.5} 
                    metalness={0.5}
                    
                />
            </mesh>
            {/* Stars Mesh */}
            <mesh>
                <boxGeometry args={[200,125,100]} />
                <meshPhongMaterial
                    map={stars}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>            
        
    )
}
export default Mars;