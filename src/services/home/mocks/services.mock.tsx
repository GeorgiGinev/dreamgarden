import { HomeServicesApiResponseInterface } from "@/interfaces/api/home-services-api-response.interface";

export function createHomeServicesMock(params: Partial<HomeServicesApiResponseInterface> | null = null): HomeServicesApiResponseInterface {
    return ({
        title: params?.title || 'Weddings',
        description: params?.description || 'Unique outdoor atmosphere, covered restaurant area, boutique apartment for preparation.'
    })
}