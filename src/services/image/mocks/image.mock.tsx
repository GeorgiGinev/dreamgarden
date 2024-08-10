import { ImageInterface } from "@/interfaces/image/image.interface";
import createImageSizeMock from "./image-size.mock";

export function createImageMock(params: Partial<ImageInterface> | null = null): ImageInterface {
    return {
       primaryURL: params?.primaryURL || '/images/gallery/woman.jpg',
       sizes: params?.sizes || [createImageSizeMock()] ,
       name: params?.name || 'Image',
       id: params?.id || '1'
    }
}

export function createImageMocks(params: Partial<ImageInterface> | null = null): ImageInterface[] {
    return [
        createImageMock({id: params?.id || '1', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '2', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '3', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '4', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '5', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '6', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '7', primaryURL: params?.primaryURL, sizes: params?.sizes}),
        createImageMock({id: params?.id || '8', primaryURL: params?.primaryURL, sizes: params?.sizes}),
    ]
};
