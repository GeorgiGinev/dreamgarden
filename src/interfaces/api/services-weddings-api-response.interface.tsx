import { ImageInterface } from "../image/image.interface";

export interface ServicesWeddingsApiResponseInterface {
    description: string,
    capacityOfGuests: number,
    images: ImageInterface[]
}