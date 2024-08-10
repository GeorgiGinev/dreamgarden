import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";
import RequestParamsService from "../requestParamsService";
import ResourceService from "../resourceService";

class GalleryService extends ResourceService {
    protected readonly resource = 'gallery';

    /**
     * Load data for gallery
     * @param params 
     * @returns 
     */
    public getGalleryImages(params: RequestParamsService | undefined = undefined): Promise<GalleryApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({page: 1}))
    }
}

export default GalleryService;