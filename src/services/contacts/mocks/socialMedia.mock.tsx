import { SocialMediaApiResponseInterface } from "@/interfaces/api/social-media-api-response.interface";

export function createSocialMediaMock(params: Partial<SocialMediaApiResponseInterface> | null = null): SocialMediaApiResponseInterface {
    return({
        name: params?.name || 'Instagram',
        url: params?.url || 'http://instagram.com/asd123'
    });
}