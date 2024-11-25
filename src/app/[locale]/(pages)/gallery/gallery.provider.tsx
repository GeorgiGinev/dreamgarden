"use client"

import { ReactNode, useEffect, useRef, useState } from "react";
import GalleryContext from "./gallery.context";
import GalleryService from "@/services/gallery/galleryService";
import RequestParamsService from "@/services/requestParamsService";
import styles from './gallery.module.scss';
import { GalleryApiResponseInterface } from "@/interfaces/api/gallery-api-response.interface";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import 'swiper/css';
import GalleryImages from "@/components/gallery-images/gallery-images";
import Loading from "./loading";
import Image from "next/image";

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
            if(Number(response.currentPage) > Number(response.totalPages)){
                return;
            }
            
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

    if(gallery.length === 0) {
        return (<Loading />);
    }

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
            <div className="d-flex justify-content-center">
            <div className={styles['swiper-buttons']} onClick={() => {
                decrement();
            }}>
                <Image src={'/images/icons/arrow-left.svg'} alt="Go to the prev images" width={32} height={32} />
            </div>
            <div className={styles['swiper-buttons']} onClick={() => {
                increment();
            }}>
                <Image src={'/images/icons/arrow-right.svg'} alt="Go to the next images" width={32} height={32} />
            </div>
            </div>
        </GalleryContext.Provider>
    );
}

export default GalleryProvider;