import { ServicesPartiesApiResponseInterface } from "@/interfaces/api/services-parties-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class ServicesPartiesService extends ResourceService {
    protected readonly resource = 'services/parties';

    /**
     * Load data for parties service
     * @param params 
     * @returns 
     */
    public getServicesParties(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<ServicesPartiesApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default ServicesPartiesService;