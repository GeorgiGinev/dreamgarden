import { ServicesWeddingsApiResponseInterface } from "@/interfaces/api/services-weddings-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class ServicesTeambuildingService extends ResourceService {
    protected readonly resource = 'services/teambuilding';

    /**
     * Load data for teambuilding service
     * @param params 
     * @returns 
     */
    public getServicesTeambuilding(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<ServicesWeddingsApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default ServicesTeambuildingService;