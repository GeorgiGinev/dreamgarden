import { SocialMediaApiResponseInterface } from "./social-media-api-response.interface"

export interface ContactInformationApiResponseInterface {
    specificAddress: string,
    phoneNumbers: string[],
    email: string,
    googleLocation: {
        lat: string,
        long: string
    },
    socialMediaAccounts: SocialMediaApiResponseInterface[]
}