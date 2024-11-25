import { GalleryInterface } from "@/interfaces/gallery.interface";
import primaryGrid from "../gridModels/primaryGrid";
import secondaryGrid from "../gridModels/secondaryGrid";
import { ImageInterface } from "@/interfaces/image/image.interface";

export function createGrid(images: GalleryInterface): any {
    const grid = getGrid();
    let currentImageIndex = 0;

    fillGrid(grid, images.images, currentImageIndex)
    return grid;
}

function getGrid(): any {
    const random = Math.round(Math.random());
    if(random === 0) {
        return primaryGrid;
    }

    return secondaryGrid;
}

function fillGrid(grid: any[], images: ImageInterface[], currentImageIndex: number): any {
    return grid.map((row: any) => {
        if(Array.isArray(row)) {
            currentImageIndex = fillGrid(row, images, currentImageIndex);
            return currentImageIndex;
        } else {
            row.image = images[currentImageIndex];
            currentImageIndex++;
            return currentImageIndex;
        }
    })
}