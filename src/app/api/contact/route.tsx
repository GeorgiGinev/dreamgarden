"use server"

import { ContactInformationApiResponseInterface } from "@/interfaces/api/contact-information-api-response.interface";
import { createContactsMock } from "@/services/contacts/mocks/contacts.mock";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json(); // Извличане на JSON данни от POST заявката
    return NextResponse.json({ message: "Received POST request", data: data}, { status: 200 });
}

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    const data: ContactInformationApiResponseInterface = createContactsMock();
    return NextResponse.json(data, { status: 200 });
}