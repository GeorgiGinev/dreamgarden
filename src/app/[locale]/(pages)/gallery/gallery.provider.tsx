"use client"

import { ReactNode, useEffect, useRef, useState } from "react";
import GalleryContext from "./gallery.context";
import GalleryService from "@/services/gallery/galleryService";
import RequestParamsService from "@/services/requestParamsService";
import Button from "@/components/button/button";
import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import 'swiper/css';
import GalleryImages from "@/components/gallery-images/gallery-images";

interface GalleryProviderInterface {
    children?: ReactNode
}

const GalleryProvider = (data: GalleryProviderInterface) => {
    // Ref to access Swiper instance
    const swiperRef = useRef(null);
    const galleryService = new GalleryService();
    
    const [page, setPage] = useState<number>(1);
    const [gallery, setGallery] = useState<GalleryApiResponseInterface[]>([]);

    const loadGallery = (loadPage: number): void => {
        if(!!gallery[loadPage-1]?.data || loadPage > gallery[0]?.totalPages) {
            return;
        }
        galleryService.getGalleryImages(new RequestParamsService({page: loadPage})).then((response: GalleryApiResponseInterface) => {
            setGallery(prevGallery => {
                let fillGallery = [...prevGallery];

                if(prevGallery.length === 0 || !prevGallery) {
                    fillGallery = Array(response.totalPages).fill({});
                }
                fillGallery[loadPage - 1] = response;

                return fillGallery;
            });
        })
    }

    useEffect(() => {
        loadGallery(page);
        loadGallery(page+1);
      }, [page]);

    const increment = async () => {
        if (swiperRef.current && (swiperRef.current as any).swiper) {
            (swiperRef.current as any).swiper.slideNext(); // Slide to the next slide
        }
    };
    const decrement = () => {
        if (swiperRef.current && (swiperRef.current as any).swiper) {
            (swiperRef.current as any).swiper.slidePrev(); // Slide to the next slide
        }
    };

    return(
        <GalleryContext.Provider value={{ images: gallery, currentPage: page}}>
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper: SwiperClass) => {
                    const activePage = swiper.activeIndex + 1;
                    setPage(activePage);
                }}
            >
                {gallery.map((currentPage: GalleryApiResponseInterface, index: number) => {
                    return(
                        <SwiperSlide key={index}>
                            <GalleryImages page={index+1}></GalleryImages>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
            {data.children}
            <Button onClick={() => {
                increment();
            }}>
                Increment
            </Button>
            <Button onClick={() => {
                decrement();
            }}>
                Decrement
            </Button>
        </GalleryContext.Provider>
    );
}

export default GalleryProvider;