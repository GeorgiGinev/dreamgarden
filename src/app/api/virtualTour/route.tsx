"use server"

import { VirtualTourApiResponseInterface } from "@/interfaces/api/video-tour-api-response.interface";
import { createVirtualTourMock } from "@/services/virtualTour/mocks/virtualTour.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: VirtualTourApiResponseInterface = createVirtualTourMock();
    return NextResponse.json(data, { status: 200 });
}