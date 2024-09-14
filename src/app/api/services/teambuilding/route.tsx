"use server"

import { ServicesTeambuildingApiResponseInterface } from "@/interfaces/api/services-teambuilding-api-response.interface";
import { createServicesTeambuildingMock } from "@/services/services/teambuilding/mocks/teambuilding.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: ServicesTeambuildingApiResponseInterface = createServicesTeambuildingMock();
    return NextResponse.json(data, { status: 200 });
}