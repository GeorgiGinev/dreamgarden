"use client"

import { Col, Row } from "react-bootstrap"
import styles from "./gallery-images.module.scss";
import { ImageInterface } from "@/interfaces/image/image.interface";
import Loading from "../../app/[locale]/(pages)/gallery/loading";
import { GalleryImageInterface } from "./gallery-image.interface";
import { useSwiperSlide } from "swiper/react";
import GalleryService from "@/services/gallery/galleryService";
import RequestParamsService from "@/services/requestParamsService";
import { useEffect, useState } from "react";


const GalleryImages = (params: GalleryImageInterface) => {
    const [images, setImages] = useState<any>(params.data);
    const { isNext } = useSwiperSlide();

    const galleryService = new GalleryService();
    const {data} = galleryService.getGalleryImages(new RequestParamsService({page: params.page}), isNext);

    useEffect(() => {
        if (data) {
            setImages(data);
          }
    }, [data]);

    if(!images) {
        return (<Loading />)
    }

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
            {generateGrid(images.data, true)}
        </div>
    )
}

export default GalleryImages;