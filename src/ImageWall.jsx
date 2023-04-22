import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useState } from "react";

export default function ImageWall() {

    const PATH = "/static/images/"
    const [img, setImg] = useState(1);
    const props = useTexture({
        map: PATH + img + ".jpg"
    })

    const changeImage = () => {
        if(img === 9){
            setImg(1);
        }else{
            setImg(img+1)
        }
    }

    return (
        <mesh receiveShadow position-z={-9} position-y={6.5} rotation-z={- Math.PI * 2} onWheel={changeImage} onDoubleClick={changeImage}>
            <planeGeometry args={[18, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}