"use client"

import Card from "@/components/card/card";
import { AnimationsDurationEnum } from "@/enums/animations-duration.enum";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from 'aos';
import { Icons } from "@/enums/icons-enum";
import { Colors } from "@/enums/colors.enum";

const HomeServicesGrid = () => {
    const homeTranslations = useTranslations('Home');
    
    useEffect(() => {
        const newLocal = AnimationsDurationEnum.Secondary;
        AOS.init({
          duration: newLocal,
          once: false,
        });

        return () => {
            AOS.refresh();
        };
      }, [])
      
    return (
        <div>
            <Row className="mt-4">
            <Col md={6} lg={4} className="mb-2 mb-lg-0">
              <div data-aos="fade-right">
              <Card title={homeTranslations('servicesWeddings')} description={homeTranslations('servicesWeddingsDescription')} icon={Icons.Ring} color={Colors.Secondary}></Card>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-2 mb-lg-0">
              <div data-aos="fade-up">
              <Card title={homeTranslations('servicesTeambuilding')} description={homeTranslations('servicesTeambuildingDescription')} icon={Icons.Group} color={Colors.Secondary}></Card>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-2 mb-lg-0">
              <div data-aos="fade-left">
              <Card title={homeTranslations('servicesParties')} description={homeTranslations('servicesPartiesDescription')} icon={Icons.Party} color={Colors.Secondary}></Card>
              </div>
            </Col>
          </Row>
        </div>
    );
}

export default HomeServicesGrid