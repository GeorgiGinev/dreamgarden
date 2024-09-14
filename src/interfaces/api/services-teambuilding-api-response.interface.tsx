import { ImageInterface } from "../image/image.interface";

export interface ServicesTeambuildingApiResponseInterface {
    description: string,
    capacityOfGuests: number,
    images: ImageInterface[]
}