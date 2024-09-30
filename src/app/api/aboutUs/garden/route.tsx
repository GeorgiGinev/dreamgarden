"use server"

import { AboutUsGardenApiResponseInterface } from "@/interfaces/api/aboutUs-garden-api-response.interface";
import { createAboutUsGardenMock } from "@/services/aboutUs/garden/mocks/garden.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();

    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: AboutUsGardenApiResponseInterface = createAboutUsGardenMock();
    return NextResponse.json(data, { status: 200 });
}