import { AboutUsHappyClientsApiResponseInterface } from "@/interfaces/api/aboutUs-happy-clients-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class AboutUsHappyClientsService extends ResourceService {
    protected readonly resource = 'aboutUs/happyClients';

    /**
     * Load data for about us happy clients
     * @param params 
     * @returns 
     */
    public getAboutUsHappyClients(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<AboutUsHappyClientsApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default AboutUsHappyClientsService;