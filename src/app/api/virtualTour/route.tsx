"use server";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json(); // Extracting JSON data from POST request
    return NextResponse.json({ message: "Received POST request", data: data }, { status: 200 });
}

function transformData(apiResponse: any) {
    return apiResponse.data.map((item: any) => ({
        description: item.attributes.description,
        video: item.attributes.video.data.attributes.url
    }));
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);
    const response = await fetch(`${process.env.STRAPI_URL}virtual-tours?populate=video`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformData(apiResponse);

    return NextResponse.json(transformedData, { status: 200 });
}
