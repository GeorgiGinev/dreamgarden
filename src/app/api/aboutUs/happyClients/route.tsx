"use server"

import { AboutUsHappyClientsApiResponseInterface } from "@/interfaces/api/aboutUs-happy-clients-api-response.interface";
import { createAboutUsHappyClientsMock } from "@/services/aboutUs/happyClients/mocks/happyClients.mock";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: AboutUsHappyClientsApiResponseInterface = createAboutUsHappyClientsMock();
    return NextResponse.json(data, { status: 200 });
}