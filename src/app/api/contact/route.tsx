"use server";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const requestData = await request.json();

        // Prepare data payload based on the Strapi schema
        const strapiPayload = {
            data: {
                description: requestData.note || "No description provided",
                email: requestData.email,
                name: requestData.name,
                date: requestData.date,
                phone: requestData.phone,
                contacted: false,
            },
        };

        // Send data to Strapi
        const response = await fetch(`${process.env.STRAPI_URL}forms`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(strapiPayload),
        });

        // Handle response errors
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error creating data in Strapi:", errorData);
            return new Response(
                JSON.stringify({
                    status: response.status,
                    message: errorData.error?.message || "Failed to create data",
                }),
                { status: response.status }
            );
        }

        // Success
        const createdData = await response.json();
        return NextResponse.json(
            { status: 201, message: "Data created successfully", data: createdData },
            { status: 201 }
        );
    } catch (error) {
        console.error("Unexpected error:", error);
        return new Response(
            JSON.stringify({ status: 500, message: "Internal Server Error" }),
            { status: 500 }
        );
    }
}
