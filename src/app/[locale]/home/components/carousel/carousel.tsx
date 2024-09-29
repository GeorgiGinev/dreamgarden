"use server"

import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "./carousel.module.scss"
import Button from "@/components/button/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/routing";
import { CarouselComponentInterface } from "./carousel.component.interface";

const HomeCarouselComponent = (data: CarouselComponentInterface) => {
    const t = useTranslations('Home')
      
    return(
        <section className={styles.container}>
            <div className="carousel-wrapper">
                <div className="carousel-shade"></div>
                <Carousel data-aos="fade-in" controls={data.images.length > 1}>
                    {data.images.map((imageObj: string, index: number) => {
                        return (
                            <CarouselItem style={{
                                height: 100+'vh',
                                opacity: 0.65
                            }} key={index}>
                                <Image 
                                    src={imageObj} 
                                    alt={t('welcome')} 
                                    priority 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"    
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                ></Image>
                            </CarouselItem>
                        )
                    })}
                </Carousel>
                <div className="ask-us-wrapper">
                    <Link href={'/askUs'}>
                    <Button>
                        {t('askUs')}
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeCarouselComponent;