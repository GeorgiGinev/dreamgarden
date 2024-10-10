"use server";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json(); // Extracting JSON data from POST request
    return NextResponse.json({ message: "Received POST request", data: data }, { status: 200 });
}

function transformData(apiResponse: any) {
    return apiResponse.data.map((item: any) => ({
        specificAddress: item.attributes.specificAddress,
        phoneNumbers: Object.values(item.attributes.phoneNumbers),
        email: item.attributes.email,
        googleLocation: item.attributes.googleLocation,
        socialMediaAccounts: Object.keys(item.attributes.socialMediaAccounts).map((platform) => ({
            name: platform,
            url: item.attributes.socialMediaAccounts[platform],
        })),
        description: item.attributes.description,
    }));
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);
    const response = await fetch(`${process.env.STRAPI_URL}contacts`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformData(apiResponse);

    return NextResponse.json(transformedData, { status: 200 });
}
