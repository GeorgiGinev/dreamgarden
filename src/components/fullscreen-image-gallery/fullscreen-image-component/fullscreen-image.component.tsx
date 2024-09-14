"use client"

import Image from "next/image";
import { FullscreenImageComponentInterface } from "./fullscreen-image.component.interface";
import { useFullScreenImageGalleryContext } from "../fullscreen-image-gallery.context";

const FullscreenImageComponent = (params: FullscreenImageComponentInterface) => {
    const { setImage, setImagesList } = useFullScreenImageGalleryContext();
    const image = params.image;
    const images = params.images;

    return(
        <Image 
            src={image.sizes[0].url} 
            alt={image.name}
            fill
            style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                cursor: 'pointer'
            }}
            onClick={() => {
                setImage(image);
                setImagesList(images);
            }}
        ></Image>
    )
}

export default FullscreenImageComponent;