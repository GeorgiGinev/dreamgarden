import RequestParamsService from "../requestParamsService";
import ResourceService from "../resourceService";

class GalleryService extends ResourceService {
    protected readonly resource = 'gallery';

    /**
     * Load data for gallery
     * @param params 
     * @returns 
     */
    public getGalleryImages(params: RequestParamsService | undefined = undefined): Promise<any> {
        return this.loadData(params ? params : new RequestParamsService({page: 1})) 
    }
}

export default GalleryService;