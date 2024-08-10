import { ImageSizeInterface } from "@/interfaces/image/imageSize.interface";

const createImageSizeMock = (params: Partial<ImageSizeInterface> | null = null) => {
    return {
        width: params?.width || 300,
        height: params?.height || 300,
        url: params?.url || '/images/gallery/woman.jpg'
    }
}

export default createImageSizeMock;