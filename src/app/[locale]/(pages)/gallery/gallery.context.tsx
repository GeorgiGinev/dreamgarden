import { createContext, useContext } from "react";
import { GalleryContextInterface } from "./gallery.context.interface";

const GalleryContext = createContext<GalleryContextInterface>({});

export default GalleryContext;

export function useGalleryContext(){
    const context = useContext(GalleryContext);
    if (!context) {
        throw new Error('GalleryContext must be used within a FullScreenImageGalleryProvider');
    }
    return context;
}