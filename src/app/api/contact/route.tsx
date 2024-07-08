"use server"

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json(); // Извличане на JSON данни от POST заявката
    return NextResponse.json({ message: "Received POST request", data: data}, { status: 200 });
}