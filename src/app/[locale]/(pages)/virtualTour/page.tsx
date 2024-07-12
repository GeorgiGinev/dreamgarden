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
                        {translationsVirtualTour('description')}
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