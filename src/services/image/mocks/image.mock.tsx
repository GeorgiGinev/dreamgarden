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

export function createImageMocks(): ImageInterface[] {
    return [
        createImageMock({id: '1'}),
        createImageMock({id: '2'}),
        createImageMock({id: '3'}),
        createImageMock({id: '4'}),
        createImageMock({id: '5'}),
        createImageMock({id: '6'}),
        createImageMock({id: '7'}),
        createImageMock({id: '8'}),
    ]
};
