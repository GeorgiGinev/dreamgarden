import { ContactInformationApiResponseInterface } from "./contact-information-api-response.interface";
import { HomeKeyFactsApiResponseInterface } from "./home-key-facts-api-response.interface";
import { HomeServicesApiResponseInterface } from "./home-services-api-response.interface";

export interface HomeApiResponseInterface {
    videos: string[],
    servicesDescription: string,
    services: HomeServicesApiResponseInterface[],
    keyFacts: HomeKeyFactsApiResponseInterface[],
    contacts: ContactInformationApiResponseInterface
}