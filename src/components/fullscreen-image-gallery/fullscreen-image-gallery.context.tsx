"use client"

import { createContext, useContext } from "react";
import { FullScreenImageGalleryContextInterface } from "./fullscreen-image-gallery.context.interface";

const FullScreenImageGalleryContext = createContext<FullScreenImageGalleryContextInterface | null>(null);

export default FullScreenImageGalleryContext;

export function useFullScreenImageGalleryContext(){
    const context = useContext(FullScreenImageGalleryContext);
    if (!context) {
        throw new Error('useFullScreenImageGalleryContext must be used within a FullScreenImageGalleryProvider');
    }
    return context;
}