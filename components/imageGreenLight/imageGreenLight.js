import Image from 'next/image';
import React from 'react';
import { ImageGreenLightDiv } from './styles';

const ImageGreenLight = ({ src, alt }) => {

    return <ImageGreenLightDiv>
        <Image style={{position: "relative"}} src={src} alt={alt || ""} />
    </ImageGreenLightDiv>
}

export default ImageGreenLight;