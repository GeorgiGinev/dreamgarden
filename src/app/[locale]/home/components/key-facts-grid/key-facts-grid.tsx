"use server"

import { Col, Row } from "react-bootstrap";
import Button from "@/components/button/button";
import { useTranslations } from "next-intl";
import { ImageInterface } from "@/interfaces/image/image.interface";
import FullscreenImageComponent from "@/components/fullscreen-image-gallery/fullscreen-image-component/fullscreen-image.component";
import { Link } from "@/routing";
import { KeyFactsGridInterface } from "./key-facts-grid.interface";
import { HomeKeyFactsApiResponseInterface } from "@/interfaces/api/home-key-facts-api-response.interface";

const HomeKeyFacts = (params: KeyFactsGridInterface) => {
    const t = useTranslations('Home');
    const imagesList: ImageInterface[] = params.images.map((image: HomeKeyFactsApiResponseInterface) => image.image);
      
    return (
        <section>
            <Row className="mt-4">
                {params.images.map((image: HomeKeyFactsApiResponseInterface, index: number) => {
                    const isMiddle = index !== 0 && index < params.images.length-1;
                    const isFirst = index === 0;
                    const isLast = index === params.images.length - 1;

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
                                    <FullscreenImageComponent image={image.image} images={imagesList}></FullscreenImageComponent>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
            <div className="text-center mt-4">
                <Link href={'/askUs'}>
                    <Button>
                        {t('askUs')}
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default HomeKeyFacts;