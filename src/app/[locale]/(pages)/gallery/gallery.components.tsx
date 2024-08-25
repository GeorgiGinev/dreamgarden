"use client"

import GalleryImages from "@/components/gallery-images/gallery-images";
import GalleryService from "@/services/gallery/galleryService";
import RequestParamsService from "@/services/requestParamsService";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./loading";

import 'swiper/css';
import { SWRProvider } from "@/lib/swr.provider";

const GalleryComponent = () => {
    const galleryService = new GalleryService();
    
    const { data } = galleryService.getGalleryImages(new RequestParamsService({page: 1}));

    if(!data) {
        return <Loading />
    }

    return (
        <SWRProvider>
            <div>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide key={0}>
                <GalleryImages page={1} data={data}></GalleryImages>
            </SwiperSlide>

            {Array(data?.totalPages-1).fill(undefined)?.map((value: undefined, index: number) => {
                return(
                    <SwiperSlide key={index+1}>
                        <GalleryImages page={index+2}></GalleryImages>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
        </SWRProvider>
    );
}

export default GalleryComponent;