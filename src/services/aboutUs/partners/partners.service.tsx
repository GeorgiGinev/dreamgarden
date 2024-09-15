import { AboutUsPartnersApiResponseInterface } from "@/interfaces/api/aboutUs-partners-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class AboutUsPartnersService extends ResourceService {
    protected readonly resource = 'aboutUs/partners';

    /**
     * Load data for about us partners
     * @param params 
     * @returns 
     */
    public getAboutUsPartners(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<AboutUsPartnersApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default AboutUsPartnersService;