import { ImageInterface } from "./image/image.interface";

export interface GalleryInterface {
    images: ImageInterface[],
    currentPage: number,
    totalPages: number
}