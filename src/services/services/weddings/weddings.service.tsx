import { ServicesWeddingsApiResponseInterface } from "@/interfaces/api/services-weddings-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class ServicesWeddingService extends ResourceService {
    protected readonly resource = 'services/weddings';

    /**
     * Load data for gallery
     * @param params 
     * @returns 
     */
    public getServicesWedding(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<ServicesWeddingsApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default ServicesWeddingService;