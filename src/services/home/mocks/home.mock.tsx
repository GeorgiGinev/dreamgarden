import { HomeApiResponseInterface } from "@/interfaces/api/home-api-response.interface";
import { createHomeServicesMock } from "./services.mock";
import { createHomeKeyFactsMock } from "./facts.mock";
import { createImageMock } from "@/services/image/mocks/image.mock";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";
import { createContactsMock } from "@/services/contacts/mocks/contacts.mock";

export function createHomeMock(params: Partial<HomeApiResponseInterface> | null = null): HomeApiResponseInterface {
    return ({
        videos: [
            '/images/slider/slider1.png',
            '/images/slider/slider1.png'
        ],
        servicesDescription: 'Hidden among centuries-old plane trees and a fluffy carpet of freshly mowed grass, the Enchanted Garden is the touch of magic that will transform your event into a unique and unparalleled celebration of the senses. Just 20 km from Sofia, the location combines the conveniences of the big city with a cozy, picturesque atmosphere under the stars.',
        services: [
            createHomeServicesMock(),
            createHomeServicesMock({
                title: 'Teambuilding',
                description: 'Remote office or team building among majestic plane trees, forest freshness, and a fairy-tale setting.'
            }),
            createHomeServicesMock({
                title: 'Parties',
                description: 'The occasion does not matter - The Enchanted Garden is wide open and ready to embrace a private party.'
            }),
        ],
        keyFacts: [
            createHomeKeyFactsMock(),
            createHomeKeyFactsMock({
                image: createImageMock({
                    primaryURL: '/images/home-facts/primary.jpg',
                    sizes: [createImageSizeMock({
                        url: '/images/home-facts/primary.jpg',
                        height: 500,
                        width: 500
                    })]
                })
            }),
            createHomeKeyFactsMock({
                image: createImageMock({
                    primaryURL: '/images/home-facts/secondary.jpg',
                    sizes: [createImageSizeMock({
                        url: '/images/home-facts/secondary.jpg',
                        height: 500,
                        width: 500
                    })]
                })
            }),
        ],
        contacts: createContactsMock()
    })
}