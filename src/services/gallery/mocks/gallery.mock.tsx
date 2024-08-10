import { GalleryInterface } from "@/interfaces/gallery.interface";
import { createImageMocks } from "@/services/image/mocks/image.mock";

export function createGalleryMock(params: Partial<GalleryInterface> | null = null) {
    return {
        images: params?.images || createImageMocks(),
        currentPage: params?.currentPage || 1,
        totalPages: params?.totalPages || 2,
    }
}