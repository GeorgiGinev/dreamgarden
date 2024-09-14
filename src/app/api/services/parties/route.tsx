"use server"

import { ServicesTeambuildingApiResponseInterface } from "@/interfaces/api/services-teambuilding-api-response.interface";
import { createServicesPartiesMock } from "@/services/services/parties/mocks/parties.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: ServicesTeambuildingApiResponseInterface = createServicesPartiesMock();
    return NextResponse.json(data, { status: 200 });
}