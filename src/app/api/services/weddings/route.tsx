"use server"

import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //const data = await request.json(); // Извличане на JSON данни от POST заявката
    return NextResponse.json({ message: "Received POST request", data: "GET Weddings"}, { status: 200 });
}