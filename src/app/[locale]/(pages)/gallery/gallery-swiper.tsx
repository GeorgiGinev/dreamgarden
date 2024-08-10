"use client"

import GalleryImages from "@/components/gallery-images/gallery-images";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GallerySwiper = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><GalleryImages page={1}></GalleryImages></SwiperSlide>
            <SwiperSlide><GalleryImages page={2}></GalleryImages></SwiperSlide>
        </Swiper>
    )
}

export default GallerySwiper;