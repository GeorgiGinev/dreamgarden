import { GalleryImageHeightEnum } from "@/enums/gallery-image-height.enum";

const secondaryGrid = [
    [
        {
            size: 6, 
            height: GalleryImageHeightEnum.Middle
        },
        {
            size: 3,
            height: GalleryImageHeightEnum.Middle
        },
        {
            size: 3,
            height: GalleryImageHeightEnum.Middle
        }
    ],
    [
        [
            {
                size: 12,
                height: GalleryImageHeightEnum.Small
            },
            {
                size: 4,
                height: GalleryImageHeightEnum.Large
            }, 
            {
                size: 8,
                height: GalleryImageHeightEnum.Large
            }
        ],
        {
            size: 4,
            height: GalleryImageHeightEnum.Max
        }
    ]
];

export default secondaryGrid;