import { Col, Row } from "react-bootstrap";
import ServicesTabs from "../tabs/tab";
import ServicesWeddingsService from "@/services/services/weddings/weddings.service";

const Page = () => {
    const servicesWeddingService = new ServicesWeddingsService();
    servicesWeddingService.getServicesWedding().then((data: any) => {
        console.log('data : ', data);
    });

    return (
        <div>
            <ServicesTabs activeTab="weddings"></ServicesTabs>
            <Row>
                <Col>
                    <p>
                    Уникална атмосфера на открито, покрита ресторантска част, бутиков апартамент за подготовка на булката, декоративни локации за снимки, място алея за изнесен ритуал. Работим с доказани професионалисти в организацията на кетъринг, музика, декорация, транспорт и други.
                    </p>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Page;