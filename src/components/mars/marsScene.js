import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Mars from "./mars";
import './marsScene.css';

function MarsScene() {
    return (
        <div className="mars-three-js">
            <Canvas camera={{position: [0,0,20]}} color={"#000000"}>
                <pointLight color={"#f6f3ea"} intensity={1.5} position={[20, 10, 30]} />
                <Suspense fallback={"Loading Mars..."} >
                    <Mars />
                </Suspense>
            </Canvas>
        </div>
    );
}
  
export default MarsScene;