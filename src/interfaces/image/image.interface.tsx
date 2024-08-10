import { ImageSizeInterface } from "./imageSize.interface"

export interface ImageInterface {
    primaryURL: string,
    sizes: ImageSizeInterface[],
    name: string,
    id: string
}