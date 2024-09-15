import { AboutUsHappyClientsApiResponseInterface } from "@/interfaces/api/aboutUs-happy-clients-api-response.interface";
import { HappyClientsInterface } from "@/interfaces/happy-clients.interface";
import { createImageMock } from "@/services/image/mocks/image.mock";

export function createAboutUsHappyClientsMock(params: Partial<AboutUsHappyClientsApiResponseInterface> | null = null): AboutUsHappyClientsApiResponseInterface {
    return ({
        happyClients: [createHappyClient(), createHappyClient()],
        image: createImageMock(),
    })
}

function createHappyClient(params: Partial<HappyClientsInterface> | null = null): HappyClientsInterface {
    return ({
        quote: "Изнесен офис или тийм билдинг сред величествени чинари, горска свежест и приказна обстановка внасят спокойствие, уют и са истинска гаранция за един незабравим, различен ден. <br> <br> Разполагаме с пространства за изнесен офис и игри, както и с всички необходими условия за перфектно фирмено парти.",
        from: "Ирен и Денис"
    })
}