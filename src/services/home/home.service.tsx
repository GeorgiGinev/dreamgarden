import { HomeApiResponseInterface } from "@/interfaces/api/home-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class HomeService extends ResourceService {
    protected readonly resource = 'home';

    /**
     * Load data for home
     * @param params 
     * @returns 
     */
    public getHome(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<HomeApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default HomeService;