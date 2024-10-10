
"use server";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json(); // Extracting JSON data from POST request
    return NextResponse.json({ message: "Received POST request", data: data }, { status: 200 });
}

function transformData(apiResponse: any) {
    const item = apiResponse.data;
    const images = !!item.attributes.image?.data
        ? Object.values(item.attributes.image?.data?.attributes.formats).map((format: any) => ({
            primaryURL: format.url, // Get the image URL
            sizes: [
                {
                    width: format.width,
                    height: format.height,
                    url: format.url, // URL for the specific size
                }
            ],
            name: item.attributes.image?.data?.attributes.name, // Name of the image
            id: item.attributes.image?.data?.id?.toString(), // Image ID
        }))
        : [];

    // Handle multiple images by mapping over the images array
    const images = item.attributes.images?.data.map((imageItem: any) => ({
        primaryURL: imageItem.attributes.formats.large?.url || imageItem.attributes.url, // Get the primary image URL (use large or default)
        sizes: Object.values(imageItem.attributes.formats).map((format: any) => ({
            width: format.width,
            height: format.height,
            url: format.url, // URL for each format size
        })),
        name: imageItem.attributes.name, // Name of the image
        id: imageItem.id.toString(), // Image ID
    })) || []; // Fallback to empty array if no images are present

    return {
        description: item.attributes.description, // Dynamic description
        capacityOfGuests: item.attributes.capacityOfGuests, // Capacity of guests
        images: images, // Transformed images array
    };
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);

    const response = await fetch(`${process.env.STRAPI_URL}about-garden?populate=images`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformData(apiResponse);

    return NextResponse.json(transformedData, { status: 200 });
}
