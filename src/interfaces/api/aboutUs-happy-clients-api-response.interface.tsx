import { HappyClientsInterface } from "../happy-clients.interface";
import { ImageInterface } from "../image/image.interface";

export interface AboutUsHappyClientsApiResponseInterface {
    happyClients: HappyClientsInterface[],
    image: ImageInterface
}