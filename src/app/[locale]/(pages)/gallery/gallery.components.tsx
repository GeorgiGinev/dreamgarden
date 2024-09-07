"use client"

import GalleryImages from "@/components/gallery-images/gallery-images";
import GalleryService from "@/services/gallery/galleryService";
import RequestParamsService from "@/services/requestParamsService";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./loading";

import 'swiper/css';
import { SWRProvider } from "@/lib/swr.provider";
import Button from "@/components/button/button";
import { useEffect, useState } from "react";

const GalleryComponent = () => {
    const galleryService = new GalleryService();

    const { data } = galleryService.getGalleryImages(new RequestParamsService({page: 1}));
    console.log('data : ', data)

    if(!data) {
        return (
            <div>
                asd
                <Loading />
            </div>
        )
    }

    console.log('asd tro')

    return ( 
        <SWRProvider>
            SWRProvider
            <div>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                {/* <SwiperSlide key={0}>
                    <GalleryImages page={1} data={data}></GalleryImages>
                </SwiperSlide> */}

                {/* {Array((data as any).totalPages-1).fill(undefined)?.map((value: undefined, index: number) => {
                    return(
                        <SwiperSlide key={index+1}>
                            <GalleryImages page={index+2}></GalleryImages>
                        </SwiperSlide>
                    )
                })} */}
            </Swiper>
            <Button>
                {'Next'}
            </Button>
            </div>
        </SWRProvider>
    );
}

export default GalleryComponent;