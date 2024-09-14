import { HomeKeyFactsApiResponseInterface } from "@/interfaces/api/home-key-facts-api-response.interface";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function createHomeKeyFactsMock(params: Partial<HomeKeyFactsApiResponseInterface> | null = null) {
    return({
        image: params?.image || createImageMock({
            primaryURL: '/images/home-facts/secondary.jpg',
            sizes: [
                createImageSizeMock({
                    url: '/images/home-facts/secondary.jpg',
                    height: 500,
                    width: 500
                })
            ]
        })
    })
}