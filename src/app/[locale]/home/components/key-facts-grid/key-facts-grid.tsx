"use client"

import { AnimationsDurationEnum } from "@/enums/animations-duration.enum";
import Image from "next/image";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from 'aos';
import { useFullScreenImageGalleryContext } from "@/components/fullscreen-image-gallery/fullscreen-image-gallery.context";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ImageInterface } from "@/interfaces/image/image.interface";

const HomeKeyFacts = () => {
    const { setImage, setImagesList } = useFullScreenImageGalleryContext();
    const router = useRouter();
    const t = useTranslations('Home')

    const images: ImageInterface[] = [
        {
            id: '0',
            name: "Bride",
            primaryURL: "/images/home-facts/secondary.jpg",
            sizes: [{
                width: 500,
                height: 500,
                url: "/images/home-facts/secondary.jpg"
            }]
        },
        {
            id: '1',
            name: "Wedding",
            primaryURL: "/images/home-facts/primary.jpg",
            sizes: [{
                width: 500,
                height: 500,
                url: "/images/home-facts/primary.jpg"
            }]
        },
        {
            id: '2',
            name: "Bride",
            primaryURL: "/images/home-facts/secondary.jpg",
            sizes: [{
                width: 500,
                height: 500,
                url: "/images/home-facts/secondary.jpg"
            }]
        }
    ];

    useEffect(() => {
        const newLocal = AnimationsDurationEnum.Secondary;
        AOS.init({
          duration: newLocal,
          once: false,
        });

        return () => {
            AOS.refresh();
        };
      }, [])
      
    return (
        <section>
            <Row className="mt-4">
                {images.map((image: ImageInterface, index: number) => {
                    const isMiddle = index !== 0 && index < images.length-1;
                    const isFirst = index === 0;
                    const isLast = index === images.length - 1;

                    const alignItemsTo = isLast ? 'flex-start' : 'flex-end';
                    const fadeEffect: () => string = (): string => {
                        if(isMiddle) {
                            return 'fade-up'
                        }
                        if(isFirst) {
                            return 'fade-right';
                        }
                        return 'fade-left';
                    }

                    return (
                        <Col md={12} lg={4} key={index} className="mb-2 mb-lg-0">
                            <div className="position-relative h-100 d-flex" style={{
                                alignItems: alignItemsTo
                            }} data-aos={fadeEffect()}>
                                <div style={{
                                    height: isMiddle ? 500 : 360,
                                    width: '100%',
                                    position: 'relative'
                                }}
                                >
                                    <Image 
                                        src={image.sizes[0].url} 
                                        alt={image.name}
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center center',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => {
                                            setImage(image);
                                            setImagesList(images);
                                        }}
                                    ></Image>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
            <div className="text-center mt-4">
                <Button onClick={() => {
                    router.push('askUs')
                }}>
                    {t('askUs')}
                </Button>
            </div>
        </section>
    )
}

export default HomeKeyFacts;