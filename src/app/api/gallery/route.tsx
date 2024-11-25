"use server"

import { createGalleryMock } from "@/services/gallery/mocks/gallery.mock";
import { createGrid } from "@/services/gallery/mocks/generator";
import { NextRequest, NextResponse } from "next/server";
import CustomRequest from "../shared/request/request";
import { ImageInterface } from "@/interfaces/image/image.interface";

const IMAGES_PER_PAGE = 8;

/**
 * handle GET
 * @param req
 */
export async function GET(request: NextRequest) {
    const response = await fetch(`${process.env.STRAPI_URL}gallery?populate=images`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    if (!response.ok) {
        console.error("Failed to fetch data from API:", response.statusText);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    const responseData = await response.json();

    const imagesArray: ImageInterface[] = responseData.data.attributes.images.data.map((image: any) => {
        return {
            primaryURL: process.env.STRAPI_MEDIA_URL + image.attributes.url,
            sizes: Object.keys(image.attributes.formats).map((key: string) => {
                return {
                    url: process.env.STRAPI_MEDIA_URL + image.attributes.formats[key].url,
                    width: image.attributes.formats[key].width,
                    height: image.attributes.formats[key].height
                }
            }),
            name: image.attributes.name,
            id: image.id
        }
    });

    // Calculate pages
    let totalPages = 1;
    let imagesLength = imagesArray.length;
    while(imagesLength > IMAGES_PER_PAGE) {
        totalPages++;
        imagesLength -= IMAGES_PER_PAGE;
    }

    const customRequest = new CustomRequest(request);

    const gallery = createGalleryMock({
        currentPage: customRequest.params.page,
        totalPages: totalPages,
        images: customRequest.params.page <= totalPages || !customRequest.params.page ? getImages(totalPages, imagesArray, customRequest.params.page) : []
    });

    const data = createGrid(gallery);

    return NextResponse.json({ totalPages: gallery.totalPages, currentPage: gallery.currentPage, data: data}, { status: 200 });
}

function getImages(totalPages: number, imagesArray: ImageInterface[], currentPage: number): ImageInterface[] {
    const fromIndex = (currentPage-1)*IMAGES_PER_PAGE;

    if(totalPages > 1) {
        const toIndex = fromIndex + IMAGES_PER_PAGE;

        return imagesArray.slice(fromIndex, toIndex);
    }

    return imagesArray;
}