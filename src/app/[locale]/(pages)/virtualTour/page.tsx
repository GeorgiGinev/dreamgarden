import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "./title";
import { useTranslations } from "next-intl";
import VideoTour from "./components/video-tour/video-tour";

const Page = () => {
    const translationsVirtualTour = useTranslations('VirtualTour');

    return (
        <Container>
            <Title></Title>
            <VideoTour />
            <div className="py-4">
                <Row className="align-items-end">
                    <Col lg={2}></Col>
                    <Col lg={6}>
                        Отправете се на дигитална разходка из всяко кътче на Приказната градина – масивната, дървена шатра, която оживява в луксозен ресторант, поляната на любовта, идеална за открит ритуал, зоната за отдих и сладки приказки, безброй неповторими кътове за снимки и още.    
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