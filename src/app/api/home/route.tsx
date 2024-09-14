"use server"

import { HomeApiResponseInterface } from "@/interfaces/api/home-api-response.interface";
import { createHomeMock } from "@/services/home/mocks/home.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: HomeApiResponseInterface = createHomeMock();
    return NextResponse.json(data, { status: 200 });
}