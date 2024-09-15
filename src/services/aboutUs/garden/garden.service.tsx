import { AboutUsGardenApiResponseInterface } from "@/interfaces/api/aboutUs-garden-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class AboutUsGardenService extends ResourceService {
    protected readonly resource = 'aboutUs/garden';

    /**
     * Load data for about us garden
     * @param params 
     * @returns 
     */
    public getAboutUsGarden(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<AboutUsGardenApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default AboutUsGardenService;