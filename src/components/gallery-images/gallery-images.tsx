"use client"

import { Col, Row } from "react-bootstrap"
import styles from "./gallery-images.module.scss";
import { ImageInterface } from "@/interfaces/image/image.interface";
import { GalleryImageInterface } from "./gallery-image.interface";
import { useContext, useEffect } from "react";
import { GalleryContextInterface } from "@/app/[locale]/(pages)/gallery/gallery.context.interface";
import GalleryContext from "@/app/[locale]/(pages)/gallery/gallery.context";
import Loading from "@/app/[locale]/(pages)/gallery/loading";
import { useFullScreenImageGalleryContext } from "../fullscreen-image-gallery/fullscreen-image-gallery.context";

const GalleryImages = (params: GalleryImageInterface) => {
    const { setImage, setImagesList } = useFullScreenImageGalleryContext();
    const {images, currentPage} = useContext<GalleryContextInterface>(GalleryContext);
    console.log('images : ', images);
    const generateGrid = (grid: any[], isFirstRow: boolean): any => {
        if(!grid) {
            return;
        }

        return grid?.map((row: any, index: number) => {
            if(Array.isArray(row)) {
                if(!isFirstRow) {
                    return(
                    <Col key={`colKey${index}`}>
                        <Row>
                            {generateGrid(row, false)}
                        </Row>
                    </Col>
                    )
                } else {
                    return(
                    <Row key={`rowKey${index}`}>
                        {generateGrid(row, false)}
                    </Row>
                    )
                }
            } 
            
            return(<Col md={row.size} key={!!row.image ? (row.image as ImageInterface).id : index}>
                <div className={`${styles['image-wrapper']}`}>
                <div className={`${styles['image']}`}
                onClick={() => {
                    setImage(row.image as ImageInterface);
                    setImagesList([]);
                }}
                style={{
                    backgroundImage: `url('${!!(row.image as ImageInterface) ? (row.image as ImageInterface).sizes[0].url : ''}')`,
                    height: `${row.height}`
                }}></div>
                </div>
            </Col>)
        })
    }

    if(!images || !currentPage) {
        return (<Loading />);
    }

    return (
        <div>
            {generateGrid(images[params.page - 1]?.data, true)}
        </div>
    )
}

export default GalleryImages;