"use server";

import { NextResponse } from "next/server";

// Helper function to transform the images structure
function transformImages(images: any): any[] {
    return images?.data?.map((image: any) => {
        const primaryURL = process.env.STRAPI_MEDIA_URL + image.attributes.url;
        const sizes = [
            {
                width: image.attributes.width,
                height: image.attributes.height,
                url: primaryURL
            }
        ];

        return {
            primaryURL,
            sizes,
            name: image.attributes.name,
            id: image.id
        };
    }) || [];
}

export async function GET(request: Request) {
    try {
        const headers = new Headers();
        headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);
        const response = await fetch(`${process.env.STRAPI_URL}services-weddings?populate=images`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });
        if (!response.ok) {
            console.error("Failed to fetch data from API:", response.statusText);
            return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
        }

        const responseData = await response.json();

        console.log("API Response Data:", responseData);

        const transformedData = {
            description: responseData.data?.attributes?.description || "No description available",
            capacityOfGuests: responseData.data?.attributes?.capacityOfGuests || 0,
            images: transformImages(responseData.data?.attributes?.images)
        };

        return NextResponse.json(transformedData, { status: 200 });
    } catch (error) {
        console.error("Error fetching or transforming data:", error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
