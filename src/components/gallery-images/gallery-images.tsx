"use client"

import { Col, Row } from "react-bootstrap"
import styles from "./gallery-images.module.scss";
import { Suspense, useEffect, useState } from "react";
import { ImageInterface } from "@/interfaces/image/image.interface";
import GalleryService from "@/services/gallery/galleryService";
import Loading from "../../app/[locale]/(pages)/gallery/loading";
import { GalleryImageInterface } from "./gallery-image.interface";
import RequestParamsService from "@/services/requestParamsService";
import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";

const GalleryImages = (params: GalleryImageInterface) => {
    const galleryService = new GalleryService();
    const [imagesGrid, setImagesGrid] = useState([])

    useEffect(() => {
        galleryService.getGalleryImages(new RequestParamsService({page: params.page}))
        .then((data: GalleryApiResponseInterface) => {
            console.log('gallery data', data.data)
            setImagesGrid(data.data);
        })
    }, [])

    const generateGrid = (grid: any[], isFirstRow: boolean): any => {
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
            
            return(<Col md={row.size} key={(row.image as ImageInterface).id}>
                <div className={`${styles['image-wrapper']}`}>
                <div className={`${styles['image']}`} style={{
                    backgroundImage: `url('${(row.image as ImageInterface).sizes[0].url}')`,
                    height: `${row.height}`
                }}></div>
                </div>
            </Col>)
        })
    }

    return (
        <div>
            <Suspense fallback={<Loading />}>
                {generateGrid(imagesGrid, true)}
            </Suspense>
        </div>
    )
}

export default GalleryImages;