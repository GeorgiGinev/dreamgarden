"use client"

import { HappyClientsInterface } from "@/interfaces/happy-clients.interface";
import { QuotesFromClientsComponentInterface } from "./quotes-from-clients.component.interface";
import styles from './quotes-from-clients.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css';
import { useRef } from "react";
import { Pagination } from "swiper/modules";

const QuotesFromClientsComponent = (params: QuotesFromClientsComponentInterface) => {
    const swiperRef = useRef(null);

    return (
    <div>
        <Swiper
                modules={[Pagination]}
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    bulletActiveClass: styles['swiper-pagination-custom-bullet-active'],
                    bulletClass: styles['swiper-pagination-custom-bullet']
                }}
                wrapperClass={styles['swiper-custom-wrapper']}
            >
        {params.quotes.map((quote: HappyClientsInterface, index: number) => {
            return (
                <SwiperSlide key={index}>
                    <div className="py-1 px-3 position-relative mb-4">
                        <span className={styles['quote-mark-up']}>“</span>
                            <p dangerouslySetInnerHTML={{ __html: quote.quote }}></p>
                        <span className={styles['quote-mark-down']}>“</span>
                    </div>
                    <h2 className={styles['quote-from']}>{quote.from}</h2>
                </SwiperSlide>
            )
        })}
        </Swiper>
    </div>)
}

export default QuotesFromClientsComponent;