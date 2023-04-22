import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import ImageWall from './ImageWall'
import VideoWall from './VideoWall'

export default function Experience() {
    
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, -20]} intensity={1.5}/>
        <ImageWall/>
        <VideoWall/>
        <Floor/>
    </>
}