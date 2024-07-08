import { ImageInterface } from "@/interfaces/image.interface";

export interface FullScreenImageGalleryContextInterface {
    image: ImageInterface | null,
    setImage: (image: ImageInterface | null) => void;
    imagesList: ImageInterface[] | null,
    setImagesList: (imagesList: ImageInterface[] | null) => void;
}