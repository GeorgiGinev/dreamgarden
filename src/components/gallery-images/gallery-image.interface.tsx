import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";
import { ReactNode } from "react";

export interface GalleryImageInterface { 
    children?: ReactNode,
    page?: number,
    data?: any
}