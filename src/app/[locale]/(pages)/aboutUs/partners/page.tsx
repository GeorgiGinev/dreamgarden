import { Metadata } from "next";
import ServicesTabs from "../tabs/tab";
import { getLocale, getTranslations } from "next-intl/server";
import AboutUsPartnersService from "@/services/aboutUs/partners/partners.service";
import RequestParamsService from "@/services/requestParamsService";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { PartnersInterface } from "@/interfaces/partners.interface";
import Image from "next/image";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Partners',
    description: 'Partners information'
};

const Page = async () => {
    const locale = await getLocale();
    const aboutUsPartnersService = new AboutUsPartnersService();
    const data = await aboutUsPartnersService.getAboutUsPartners(new RequestParamsService({locale: locale}));
    const translations = await getTranslations('AboutUsPartners')

    return(<div>
        <ServicesTabs activeTab="partners"></ServicesTabs>
        <Row>
           {data.partners.map((partner: PartnersInterface, index: number) => {
                return (
                    <Col xs={12} mb={6} lg={4} xl={3} key={index}>
                        <Card className={styles['card-wrapper'] + ' p-4'}>
                            <CardBody>
                                <div className="w-100 text-center mb-5">
                                {!!partner.logo ? <Image 
                                    className="img-fluid"
                                    src={partner.logo.primaryURL} 
                                    alt={translations('secondaryImageOne')}
                                    sizes="(max-width: 768px) 33vw, 25vw"
                                    width={200}
                                    height={166}
                                ></Image> : ''}
                                </div>
                                <p className="m-0" dangerouslySetInnerHTML={{ __html: partner.description }}></p>
                            </CardBody>
                        </Card>
                    </Col>
                );
           })} 
        </Row>
    </div>)
}

export default Page;