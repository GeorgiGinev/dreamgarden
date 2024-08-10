"use server"

import { createGalleryMock } from "@/services/gallery/mocks/gallery.mock";
import { createGrid } from "@/services/gallery/mocks/generator";
import { NextRequest, NextResponse } from "next/server";
import CustomRequest from "../services/request/request";

/**
 * handle GET
 * @param req
 */
export async function GET(request: NextRequest) {
    const customRequest = new CustomRequest(request);
    const data = createGrid(createGalleryMock({
        currentPage: customRequest.params.page
    }));
    
    return NextResponse.json({ message: "Received POST request", data: data}, { status: 200 });
}
