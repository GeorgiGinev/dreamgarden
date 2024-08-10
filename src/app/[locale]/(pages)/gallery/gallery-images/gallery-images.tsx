"use client"

import { Button, Col, Row } from "react-bootstrap"
import styles from "./gallery-images.module.scss";
import { useEffect, useState } from "react";
import { ImageInterface } from "@/interfaces/image/image.interface";
import GalleryService from "@/services/gallery/galleryService";

const GalleryImages = () => {
    const galleryService = new GalleryService();

    const [currentPage, setCurrentPage] = useState(1);
    const [imagesGrid, setImagesGrid] = useState([])

    useEffect(() => {
        loader
        .then((data: any) => {
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

    const loadMoreImages = () => {
        setCurrentPage(currentPage+1);
    }

    const loader: Promise<any> = galleryService.getGalleryImages();

    return (
        <div>
            {generateGrid(imagesGrid, true)}
            <Button onClick={() => {loadMoreImages()}}>Load</Button>
        </div>
    )
}

export default GalleryImages;