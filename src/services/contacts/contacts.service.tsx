import { ContactInformationApiResponseInterface } from "@/interfaces/api/contact-information-api-response.interface";
import RequestParamsService from "@/services/requestParamsService";
import ResourceService from "@/services/resourceService";

class ContactsService extends ResourceService {
    protected readonly resource = 'contact';

    /**
     * Load data for contacts
     * @param params 
     * @returns 
     */
    public getContacts(params: RequestParamsService | undefined = undefined, shouldLoad: boolean = true): Promise<ContactInformationApiResponseInterface> {
        return this.loadData(params ? params : new RequestParamsService({}), shouldLoad)
    }
}

export default ContactsService;