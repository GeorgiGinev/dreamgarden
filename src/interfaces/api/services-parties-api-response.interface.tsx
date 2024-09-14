import { ImageInterface } from "../image/image.interface";

export interface ServicesPartiesApiResponseInterface {
    description: string,
    capacityOfGuests: number,
    images: ImageInterface[]
}