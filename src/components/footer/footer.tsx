"use client"

import { Col, Container, Row } from "react-bootstrap";
import Logo from "../logo/logo";
import { useTranslations } from "next-intl";

const Footer = () => {
    const translation = useTranslations('Footer');

    return(
        <footer className="bg-primary">
            <Container className={'py-4'}>
                <Row>
                    <Col xs={6} md={3} lg={6}>
                        <Logo position={'footer'}></Logo>
                        <small style={{
                            fontWeight: '100'
                        }}>
                            Copyright 2024
                        </small>
                    </Col> 
                    <Col xs={6} md={3} lg={2}>
                        <b>{translation('footerServices')}</b>
                        <br />
                        <a>
                            {translation('footerServicesOne')}
                        </a>
                        <br />
                        <a>
                            {translation('footerServicesTwo')}
                        </a>
                        <br />
                        <a>
                            {translation('footerServicesThree')}
                        </a>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <b>
                            {translation('footerContacts')}
                        </b>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <b>
                            {translation('footerFollowUs')}
                        </b>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;