import useGame from "./stores/useGame.jsx";
import Lights from "./Lights.jsx";
import { Level } from "./Level.js";
import { Physics } from "@react-three/rapier";
import Player from "./Player.js";

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame((state) => state.blocksSeed);

    return (
        <>
            <color args={['#bdedfc']} attach="background" />
            <Physics>
                <Lights />
                <Level seed={blocksSeed} count={blocksCount} />
                <Player />
            </Physics>
        </>
    );
}
