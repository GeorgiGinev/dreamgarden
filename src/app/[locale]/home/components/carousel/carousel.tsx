"use client"

import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "./carousel.module.scss"
import Button from "@/components/button/button";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from 'aos';
import { AnimationsDurationEnum } from "@/enums/animations-duration.enum";
import { HomeCarouselImageInterface } from "./carousel.interface";
import Image from "next/image";

const HomeCarouselComponent = () => {
    const t = useTranslations('Home')

    const imageList: HomeCarouselImageInterface[] = [
        {
            url: '/images/slider/slider1.png',
            name: 'Welcome'
        }
    ]

    useEffect(() => {
        const newLocal = AnimationsDurationEnum.Primary;
        AOS.init({
          duration: newLocal,
          once: true,
        });

        return () => {
            AOS.refresh();
        };
      }, [])
      
    return(
        <section className={styles.container}>
            <div className="carousel-wrapper">
                <div className="carousel-shade"></div>
                <Carousel data-aos="fade-in" controls={imageList.length > 1}>
                    {imageList.map((imageObj: HomeCarouselImageInterface, index: number) => {
                        return (
                            <CarouselItem style={{
                                height: 100+'vh',
                                opacity: 0.65
                            }} key={index}>
                                <Image 
                                    src={imageObj.url} 
                                    alt={imageObj.name} 
                                    priority 
                                    fill 
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                ></Image>
                            </CarouselItem>
                        )
                    })}
                </Carousel>
                <div className="ask-us-wrapper">
                    <Button>
                        {t('askUs')}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HomeCarouselComponent;