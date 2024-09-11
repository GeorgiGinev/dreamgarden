"use client"

import { Container, Image, Nav, Tab, Tabs } from "react-bootstrap";
import styles from "./tabs.module.scss";
import { Icons } from "@/components/icons/icons.enum";
import IconComponent from "@/components/icons/icon.component";

const ServicesTabs = () => {
  const iconsEnum = Icons;

    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="weddings">
        <Nav variant="pills" className={styles.container + ' mb-4'} fill>
            <Nav.Item>
              <Nav.Link eventKey="weddings">
                <span className="pe-2">
                  <IconComponent icon={iconsEnum.Ring} width={50} height={45}></IconComponent>
                </span>
                Сватби
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="teambuilding">
                <span className="pe-2">
                  <IconComponent icon={iconsEnum.Group} width={43} height={35}></IconComponent>
                </span>
                Тиймбилдинг
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="parties">
                <span className="pe-2">
                  <IconComponent icon={iconsEnum.Party} width={43} height={35}></IconComponent>
                </span>
                Партита
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="weddings">First tab content</Tab.Pane>
            <Tab.Pane eventKey="teambuilding">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="parties">Third tab content</Tab.Pane>
          </Tab.Content>
    </Tab.Container>
    );
}

export default ServicesTabs;