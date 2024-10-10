"use server";

import { NextResponse } from "next/server";

// Transform API response to match desired structure
function transformData(apiResponse: any) {
    const partners = apiResponse.data.map((item: any) => {
        const logo = item.attributes.logo.data?.attributes.formats
            ? {
                primaryURL: item.attributes.logo.data.attributes.formats.large?.url || item.attributes.logo.data.attributes.url, // Use large or default image URL
                sizes: Object.values(item.attributes.logo.data.attributes.formats).map((format: any) => ({
                    width: format.width,
                    height: format.height,
                    url: format.url,
                })),
                name: item.attributes.logo.data.attributes.name,
                id: item.attributes.logo.data.id.toString(),
            }
            : null;

        return {
            logo: logo, // Transformed logo data
            name: item.attributes.name, // Partner name
            description: item.attributes.description, // Partner description
        };
    });

    return { partners }; // Return transformed partners array
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);

    const response = await fetch(`${process.env.STRAPI_URL}about-partner?populate=logo`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformData(apiResponse);

    return NextResponse.json(transformedData, { status: 200 });
}
