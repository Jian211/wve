
import Image from 'next/image';
import { MouseEventHandler } from 'react';

type StaticImageData = {
    src: string; 
    height: number; 
    width: number; 
    blurDataURL?: string; 
}

interface ImageProps {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    style?: object; 
    onClick?: MouseEventHandler<HTMLImageElement>
}

const ImageAtom = ({src, alt,width,height,style,onClick}:ImageProps) => {
  return (
    <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={style}
        onClick={onClick}
    />
  )
}

export default ImageAtom