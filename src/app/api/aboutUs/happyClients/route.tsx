"use server";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json(); // Extracting JSON data from POST request
    return NextResponse.json({ message: "Received POST request", data: data }, { status: 200 });
}

function transformData(apiResponse: any) {
    const item = apiResponse.data;

    // Transform happyClients object into an array of { from, quote } objects
    const happyClients = Object.entries(item.attributes.happyClients).map(([from, quote]: [string, string]) => ({
        from, // The key becomes "from"
        quote, // The value becomes "quote"
    }));

    // Transform the image object
    const imageAttributes = item.attributes.image?.data?.attributes;
    const image = imageAttributes
        ? {
            primaryURL: imageAttributes.formats.large?.url || imageAttributes.formats.medium?.url || imageAttributes.formats.small?.url || imageAttributes.formats.thumbnail?.url || imageAttributes.url,
            sizes: Object.values(imageAttributes.formats).map((format: any) => ({
                width: format.width,
                height: format.height,
                url: format.url,
            })),
            name: imageAttributes.name, // Image name
            id: item.attributes.image.data.id.toString(), // Image ID
        }
        : null;

    return {
        happyClients,
        image,
    };
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);
    const response = await fetch(`${process.env.STRAPI_URL}about-happy-clients?populate=image`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformData(apiResponse);

    return NextResponse.json(transformedData, { status: 200 });
}
