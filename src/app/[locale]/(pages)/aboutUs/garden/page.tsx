import { Metadata } from "next";
import ServicesTabs from "../tabs/tab";
import { Col, Row } from "react-bootstrap";
import { getLocale, getTranslations } from "next-intl/server";
import RequestParamsService from "@/services/requestParamsService";
import Image from "next/image";
import AboutUsGardenService from "@/services/aboutUs/garden/garden.service";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Garden',
    description: 'Garden information'
};

const Page = async () => {
    const locale = await getLocale();
    const aboutUsGardenService = new AboutUsGardenService();
    const data = await aboutUsGardenService.getAboutUsGarden(new RequestParamsService({locale: locale}));
    const translations = await getTranslations('AboutUsGarden');

    return(<div>
        <ServicesTabs activeTab="garden"></ServicesTabs>
        <Row className="pt-2">
                <Col xs={12} xl={12} xxl={4}>
                    <p className="pb-5" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                </Col>
                <Col xs={12} xl={6} xxl={4} className="text-center">
                    <Image 
                        style={{
                            height: '100%'
                        }}
                        className="img-fluid"
                        src={data.images[0]?.primaryURL} 
                        alt={translations('primaryImage')}
                        width={400}
                        height={552}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    ></Image>
                </Col>
                <Col xs={12} xl={6} xxl={4} className="text-center">
                    {!!data.images[1] ? <Image 
                        className="img-fluid"
                        src={data.images[1].primaryURL} 
                        alt={translations('secondaryImageOne')}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={400}
                        height={272}
                    ></Image> : ''}
                    {!!data.images[2] ? <>
                        <div className="py-1"></div>
                        <Image 
                            className="img-fluid"
                            src={data.images[2].primaryURL} 
                            alt={translations('secondaryImageTwo')}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            width={400}
                            height={272}
                        ></Image>
                    </> : ''}
                </Col>
            </Row>
    </div>)
}

export default Page;