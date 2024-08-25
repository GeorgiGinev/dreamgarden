"use server"

import { createGalleryMock } from "@/services/gallery/mocks/gallery.mock";
import { createGrid } from "@/services/gallery/mocks/generator";
import { NextRequest, NextResponse } from "next/server";
import CustomRequest from "../services/request/request";
import { createImageMocks } from "@/services/image/mocks/image.mock";
import createImageSizeMock from "@/services/image/mocks/image-size.mock";

/**
 * handle GET
 * @param req
 */
export async function GET(request: NextRequest) {
    const TOTAL_PAGES = 5;

    const customRequest = new CustomRequest(request);
    const gallery = createGalleryMock({
        currentPage: customRequest.params.page,
        totalPages: TOTAL_PAGES,
        images: String(TOTAL_PAGES) === customRequest.params.page ? createImageMocks({
            primaryURL: '/images/gallery/wedding.jpg',
            sizes: [createImageSizeMock({
                url: '/images/gallery/wedding.jpg'
            })]
        }) : undefined
    });

    const data = createGrid(gallery);

    return NextResponse.json({ totalPages: gallery.totalPages, currentPage: gallery.currentPage, data: data}, { status: 200 });
}
