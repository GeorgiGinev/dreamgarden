import { Col, Row } from "react-bootstrap";
import ServicesTabs from "../tabs/tab";

const Page = () => {
    const url: string = process.env.NEXT_PUBLIC_API_URL as string;

    return (
        <div>
            <ServicesTabs activeTab="parties"></ServicesTabs>
            <Row>
                <Col>
                    <p>
                    Уникална атмосфера на открито, покрита ресторантска част, бутиков апартамент за подготовка на булката, декоративни локации за снимки, място алея за изнесен ритуал. Работим с доказани професионалисти в организацията на кетъринг, музика, декорация, транспорт и други.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Page;