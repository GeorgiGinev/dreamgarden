"use server";

import { NextResponse } from "next/server";

// Helper function to transform API data
function transformHomeData(apiResponse: any) {
    const transformedServices = Object.keys(apiResponse.services).map((key) => ({
        title: key,
        description: apiResponse.services[key],
    }));

    const transformedKeyFacts = apiResponse.keyFacts.data.map((fact: any) => ({
        image: {
            primaryURL: process.env.STRAPI_MEDIA_URL + fact.attributes.formats.large.url,
            sizes: [
                {
                    width: fact.attributes.formats.large.width,
                    height: fact.attributes.formats.large.height,
                    url: process.env.STRAPI_MEDIA_URL + fact.attributes.formats.large.url,
                },
            ],
            name: fact.attributes.name,
            id: fact.id,
        },
    }));

    const transformedVideos = apiResponse.videos.data.map((video: any) => process.env.STRAPI_MEDIA_URL + video.attributes.url);

    return {
        videos: transformedVideos,
        servicesDescription: apiResponse.servicesDescription,
        services: transformedServices,
        keyFacts: transformedKeyFacts,
        contacts: apiResponse.contacts || {},  // Assuming contacts are directly available in the response.
    };
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);

    const response = await fetch(`${process.env.STRAPI_URL}homes?populate=keyFacts,videos`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformHomeData(apiResponse.data[0].attributes);

    return NextResponse.json(transformedData, { status: 200 });
}
