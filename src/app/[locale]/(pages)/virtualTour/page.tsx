import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "./title";
import VideoTour from "./components/video-tour/video-tour";
import { getLocale } from "next-intl/server";
import RequestParamsService from "@/services/requestParamsService";
import VirtualTourService from "@/services/virtualTour/virtualTour.service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Virtual tour',
    description: 'Virtual tour information'
};

const Page = async () => {
    const locale = await getLocale();

    const videoTourService = new VirtualTourService();
    const data = await videoTourService.getVideoTour(new RequestParamsService({locale: locale}));

    return (
        <Container style={{
            paddingTop: 72,
            paddingBottom: 72
        }}>
            <Title></Title>
            <VideoTour video={data.video} />
            <div className="pb-4">
                <Row className="align-items-end">
                    <Col lg={2}></Col>
                    <Col lg={6}>
                        <span dangerouslySetInnerHTML={{ __html: data.description }}></span>
                    </Col>
                    <Col lg={2}>
                        <Image src={`/images/grass.png`} alt="Grass" fluid></Image>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <p>
                </p>
            </div>
        </Container>
    )
}

export default Page;