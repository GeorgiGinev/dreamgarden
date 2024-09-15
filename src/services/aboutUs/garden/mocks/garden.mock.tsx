import { AboutUsGardenApiResponseInterface } from "@/interfaces/api/aboutUs-garden-api-response.interface";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function createAboutUsGardenMock(params: Partial<AboutUsGardenApiResponseInterface> | null = null): AboutUsGardenApiResponseInterface {
    return ({
        description: 'Изнесен офис или тийм билдинг сред величествени чинари, горска свежест и приказна обстановка внасят спокойствие, уют и са истинска гаранция за един незабравим, различен ден. <br> <br> Разполагаме с пространства за изнесен офис и игри, както и с всички необходими условия за перфектно фирмено парти.',
        images: [
            createImageMock({
                primaryURL: '/images/about-us/garden/image1.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/about-us/garden/image1.png',
                        width: 400,
                        height: 552
                    })
                ]
            }),
            createImageMock({
                primaryURL: '/images/about-us/garden/image2.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/about-us/garden/image2.png',
                        width: 400,
                        height: 272
                    })
                ]
            }),
            createImageMock({
                primaryURL: '/images/about-us/garden/image3.png',
                sizes: [
                    createImageSizeMock({
                        url: '/images/about-us/garden/image3.png',
                        width: 400,
                        height: 272
                    })
                ]
            }),
        ]
    })
}