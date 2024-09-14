"use server"

import { ServicesWeddingsApiResponseInterface } from "@/interfaces/api/services-weddings-api-response.interface";
import { createServicesWeddingsMock } from "@/services/services/weddings/mocks/weddings.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: ServicesWeddingsApiResponseInterface = createServicesWeddingsMock();
    return NextResponse.json({ data: data}, { status: 200 });
}