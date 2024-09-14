import { ContactInformationApiResponseInterface } from "@/interfaces/api/contact-information-api-response.interface";
import { createSocialMediaMock } from "./socialMedia.mock";

export function createContactsMock(params: Partial<ContactInformationApiResponseInterface> | null = null): ContactInformationApiResponseInterface {
    return({
        specificAddress: params?.specificAddress || 'bul. `Vitosha` 23, 2100 Elin Pelin',
        phoneNumbers: ['0876929962', '+359 878 710 880'],
        email: 'ivan@gmail.com',
        googleLocation: {
            lat: '100',
            long: '101'
        },
        socialMediaAccounts: [
            createSocialMediaMock(), 
            createSocialMediaMock({
                name: 'Facebook'
            })
        ],
        description: 'Свържете се с нас и с удоволствие ще ви разкажем за всичко, което ви интересува. Винаги сте добре дошли на място, за да пием по чаша ароматно кафе и да усетите сами магията на Приказна градина.'
    });
}