import { GalleryInterface } from "@/interfaces/gallery.interface";
import primaryGrid from "../gridModels/primaryGrid";
import secondaryGrid from "../gridModels/secondaryGrid";
import { ImageInterface } from "@/interfaces/image/image.interface";

export function createGrid(images: GalleryInterface): any {
    const grid = getGrid();

    fillGrid(grid, images.images, 0)
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
            return fillGrid(row, images, currentImageIndex);
        } else {
            row.image = images[currentImageIndex];
            currentImageIndex++;
        }
    })
}