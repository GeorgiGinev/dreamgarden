import React from "react";
import ServicesTabs from "../tabs/tab";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import AboutUsHappyClientsService from "@/services/aboutUs/happyClients/happyClients.service";
import RequestParamsService from "@/services/requestParamsService";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import QuotesFromClientsComponent from "./components/quotes-from-clients.component";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Happy clients',
    description: 'Happy clients information'
};

const Page = async () => {
    const locale = await getLocale();
    const aboutUsHappyClientsService = new AboutUsHappyClientsService();
    const data = await aboutUsHappyClientsService.getAboutUsHappyClients(new RequestParamsService({locale: locale}));
    const translations = await getTranslations('AboutUsHappyClients');

    return(<div>
        <ServicesTabs activeTab="happyClients"></ServicesTabs>
        <Row className="pt-2">
                <Col xs={12} xl={12} xxl={4}>
                    <QuotesFromClientsComponent quotes={data.happyClients}></QuotesFromClientsComponent>
                </Col>
                <Col xs={12} xl={8} className="text-center">
                    {!!data.image ? <Image 
                        style={{
                            height: '100%'
                        }}
                        className="img-fluid"
                        src={data.image.primaryURL} 
                        width={824}
                        height={552}
                        alt={translations('primaryImage')}
                        sizes="(max-width: 992px) 100vw, (min-width: 992px) 75vw"
                    ></Image> : ''}
                </Col>
            
            </Row>
    </div>)
}

export default Page;