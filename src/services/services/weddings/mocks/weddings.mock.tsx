import { ServicesWeddingsApiResponseInterface } from "@/interfaces/api/services-weddings-api-response.interface";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function createServicesWeddingsMock(params: Partial<ServicesWeddingsApiResponseInterface> | null = null): ServicesWeddingsApiResponseInterface {
    return ({
        description: 'Уникална атмосфера на открито, покрита ресторантска част, бутиков апартамент за подготовка на булката, декоративни локации за снимки, място алея за изнесен ритуал. Работим с доказани професионалисти в организацията на кетъринг, музика, декорация, транспорт и други.',
        capacityOfGuests: 200,
        images: [
            createImageMock({
                primaryURL: '/images/services/weddings/image1.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/services/weddings/image1.png',
                        width: 400,
                        height: 552
                    })
                ]
            }),
            createImageMock({
                primaryURL: '/images/services/weddings/image2.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/services/weddings/image2.png',
                        width: 400,
                        height: 272
                    })
                ]
            }),
            createImageMock({
                primaryURL: '/images/services/weddings/image3.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/services/weddings/image3.png',
                        width: 400,
                        height: 272
                    })
                ]
            }),
        ]
    })
}