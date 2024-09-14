import { ServicesTeambuildingApiResponseInterface } from "@/interfaces/api/services-teambuilding-api-response.interface";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function createServicesPartiesMock(params: Partial<ServicesTeambuildingApiResponseInterface> | null = null): ServicesTeambuildingApiResponseInterface {
    return ({
        description: 'Поводът няма значение - Приказната градина е с широко отворени врати обятия за частно парти от всякакво естество. <br> <br> Предлагаме голямо разнообразие за всеки вкус - специално меню или шведска маса, бар с коктейли, гост-изпълнители, музика и други.',
        capacityOfGuests: 200,
        images: [
            createImageMock({
                primaryURL: '/images/services/parties/image1.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/services/parties/image1.png',
                        width: 800,
                        height: 552
                    })
                ]
            }),
        
        ]
    })
}