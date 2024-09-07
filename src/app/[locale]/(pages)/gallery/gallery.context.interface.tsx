import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";

export interface GalleryContextInterface {
    currentPage?: number,
    images?: GalleryApiResponseInterface[]
}