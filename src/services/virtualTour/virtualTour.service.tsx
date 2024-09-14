import { VirtualTourApiResponseInterface } from "@/interfaces/api/video-tour-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class VirtualTourService extends ResourceService {
    protected readonly resource = 'virtualTour';

    /**
     * Load data for virtual tour
     * @param params 
     * @returns 
     */
    public getVideoTour(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<VirtualTourApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default VirtualTourService;