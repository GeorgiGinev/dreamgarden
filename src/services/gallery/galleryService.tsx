import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";
import RequestParamsService from "../requestParamsService";
import ResourceService from "../resourceService";
import { SWRResponse } from "swr";
import { SWRInfiniteResponse } from "swr/infinite";

class GalleryService extends ResourceService {
    protected readonly resource = 'gallery';

    /**
     * Load data for gallery
     * @param params 
     * @returns 
     */
    public getGalleryImages(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): SWRResponse<GalleryApiResponseInterface, any> {
        return this.loadData(params ? params : new RequestParamsService({page: 1}), shouldLoad)
    }

    /**
     * Infinite load data for gallery
     * @param params 
     * @returns 
     */
    public getInfiniteGalleryImages(params: RequestParamsService | undefined = undefined): SWRInfiniteResponse<GalleryApiResponseInterface, any> {
        return this.infiniteLoadData(params ? params : new RequestParamsService({page: 1}))
    }
}

export default GalleryService;