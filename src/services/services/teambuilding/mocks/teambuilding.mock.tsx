import { ServicesTeambuildingApiResponseInterface } from "@/interfaces/api/services-teambuilding-api-response.interface";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function createServicesTeambuildingMock(params: Partial<ServicesTeambuildingApiResponseInterface> | null = null): ServicesTeambuildingApiResponseInterface {
    return ({
        description: 'Изнесен офис или тийм билдинг сред величествени чинари, горска свежест и приказна обстановка внасят спокойствие, уют и са истинска гаранция за един незабравим, различен ден. <br> <br> Разполагаме с пространства за изнесен офис и игри, както и с всички необходими условия за перфектно фирмено парти.',
        capacityOfGuests: 200,
        images: [
            createImageMock({
                primaryURL: '/images/services/teambuilding/image1.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/services/teambuilding/image1.png',
                        width: 800,
                        height: 552
                    })
                ]
            }),
        
        ]
    })
}