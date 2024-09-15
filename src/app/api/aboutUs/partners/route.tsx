"use server"

import { AboutUsPartnersApiResponseInterface } from "@/interfaces/api/aboutUs-partners-api-response.interface";
import { createAboutUsPartnersMock } from "@/services/aboutUs/partners/mocks/partners.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: AboutUsPartnersApiResponseInterface = createAboutUsPartnersMock();
    return NextResponse.json(data, { status: 200 });
}