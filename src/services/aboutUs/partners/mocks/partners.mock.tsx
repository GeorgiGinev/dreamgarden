import { AboutUsPartnersApiResponseInterface } from "@/interfaces/api/aboutUs-partners-api-response.interface";
import { PartnersInterface } from "@/interfaces/partners.interface";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function
createAboutUsPartnersMock(params: Partial<AboutUsPartnersApiResponseInterface> | null = null): AboutUsPartnersApiResponseInterface {
    return ({
        partners: [createPartner(), createPartner()]
    })
}

function createPartner(params: Partial<PartnersInterface> | null = null): PartnersInterface {
    return ({
        logo: createImageMock({
            primaryURL: '/images/about-us/partners/image1.png',
            sizes: [createImageSizeMock({
                url: '/images/about-us/partners/image1.png',
                width: 200,
                height: 468
            })]
        }),
        name: 'McDonalds',
        description: 'Поводът няма значение - Приказната градина е с широко отворени врати обятия за частно парти от всякакво естество.'
    })
}