import { Col, Row } from "react-bootstrap";
import ServicesTabs from "../tabs/tab";
import ServicesWeddingsService from "@/services/services/weddings/weddings.service";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import RequestParamsService from "@/services/requestParamsService";
import IconComponent from "@/components/icons/icon.component";
import { Icons } from "@/components/icons/icons.enum";
import styles from './page.module.scss';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Wedding service',
    description: 'Wedding service information'
};

const Page = async () => {
    const locale = await getLocale();
    const servicesWeddingService = new ServicesWeddingsService();
    const data = await servicesWeddingService.getServicesWedding(new RequestParamsService({locale: locale}));
    const translations = await getTranslations('ServicesWeddings')

    return (
        <div>
            <ServicesTabs activeTab="weddings"></ServicesTabs>
            <Row className="pt-2">
                <Col xs={12} xl={12} xxl={4}>
                    <p className="pb-5" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                    <Row className="pb-5">
                        <Col>
                            <div className={styles['icon-wrapper']}>
                                <IconComponent icon={Icons.Group} width={44} height={36}></IconComponent>
                            </div>
                            <p>
                                {translations('capacityOfPeople', {capacity: data.capacityOfGuests})}
                            </p>
                        </Col>
                        <Col>
                            <div className={styles['icon-wrapper']}>
                                <IconComponent icon={Icons.Comissions} width={42} height={42}></IconComponent>
                            </div>
                            <p>
                                {translations('withoutComissions')}
                            </p>
                        </Col>
                    </Row>
                    <Row className="pb-5">
                        <Col>
                            <div className={styles['icon-wrapper']}>
                                <IconComponent icon={Icons.Timer} width={42} height={42}></IconComponent>
                            </div>
                            <p>
                                {translations('withoutOvertime')}
                            </p>
                        </Col>
                        <Col>
                            <div className={styles['icon-wrapper']}>
                                <IconComponent icon={Icons.Planner} width={37} height={48}></IconComponent>
                            </div>
                            <p>
                                {translations('helpWithPlanning')}  
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} xl={6} xxl={4} className="text-center">
                    {!!data.images[0] ? <>
                        <Image 
                            style={{
                                height: '100%'
                            }}
                            className="img-fluid"
                            src={data.images[0].sizes[0].url} 
                            width={data.images[0].sizes[0].width}
                            height={data.images[0].sizes[0].height}
                            alt={translations('primaryImage')}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        ></Image>
                    </> : ''}
                </Col>
                <Col xs={12} xl={6} xxl={4} className="text-center">
                    {!!data.images[1] ? 
                        <>
                        <Image 
                            className="img-fluid"
                            src={data.images[1].sizes[0].url} 
                            width={data.images[1].sizes[0].width}
                            height={data.images[1].sizes[0].height}
                            alt={translations('secondaryImageOne')}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        ></Image>
                        </>
                        : ''
                    }

                    {!!data.images[2] ? 
                        <>
                        <div className="py-1"></div>
                        <Image 
                            className="img-fluid"
                            src={data.images[2].sizes[0].url} 
                            width={data.images[2].sizes[0].width}
                            height={data.images[2].sizes[0].height}
                            alt={translations('secondaryImageTwo')}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        ></Image>
                        </>
                        : ''
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Page;