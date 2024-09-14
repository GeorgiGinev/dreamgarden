"use server"

import Card from "@/components/card/card";
import { Col, Row } from "react-bootstrap";
import { Icons } from "@/enums/icons-enum";
import { Colors } from "@/enums/colors.enum";
import { ServicesGridInterface } from "./services-grid.interface";

const HomeServicesGrid = (params: ServicesGridInterface) => {      
    return (
        <div>
            <Row className="mt-4">
            {!!params.services[0] ? <Col md={6} lg={4} className="mb-2 mb-lg-0">
              <div data-aos="fade-right">
              <Card title={params.services[0].title} description={params.services[0].description} icon={Icons.Ring} color={Colors.Secondary}></Card>
              </div>
            </Col> : ''}
            {!!params.services[1] ? <Col md={6} lg={4} className="mb-2 mb-lg-0">
              <div data-aos="fade-up">
              <Card title={params.services[1].title} description={params.services[1].description} icon={Icons.Group} color={Colors.Secondary}></Card>
              </div>
            </Col> : ''}
            {!!params.services[2] ? <Col md={6} lg={4} className="mb-2 mb-lg-0">
              <div data-aos="fade-left">
              <Card title={params.services[2].title} description={params.services[2].description} icon={Icons.Party} color={Colors.Secondary}></Card>
              </div>
            </Col> : ''}
          </Row>
        </div>
    );
}

export default HomeServicesGrid