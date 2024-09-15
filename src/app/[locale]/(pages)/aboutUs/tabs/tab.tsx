import { Col, Nav, Row } from "react-bootstrap";
import styles from "./tabs.module.scss";
import { Icons } from "@/components/icons/icons.enum";
import IconComponent from "@/components/icons/icon.component";
import { useTranslations } from "next-intl";
import { Link } from "@/routing";
import { TabInterface } from "./tab.interface";

const ServicesTabs = (params: TabInterface) => {
  const iconsEnum = Icons;
  const translations = useTranslations('AboutUs');

    return (
      <Nav style={{
        marginBottom: '96px'
      }} fill>
        <Row style={{
          width: '100%'
        }}>
          <Col xs={12} md={6} lg={4} className={styles['tab-col']}>
            <Link href="/aboutUs/garden" className={styles['tab-link'] + ' ' + ('/aboutUs/'+params.activeTab === '/aboutUs/garden' ? styles['active-tab']: '')}>
                <span className="pe-2">
                  <IconComponent icon={iconsEnum.Ring} width={50} height={45}></IconComponent>
                </span>
                {translations('garden')}
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} className={styles['tab-col']}>
            <Link href="/aboutUs/happyClients" className={styles['tab-link'] + ' ' + ('/aboutUs/'+params.activeTab === '/aboutUs/happyClients' ? styles['active-tab']: '')}>
                <span className="pe-2">
                  <IconComponent icon={iconsEnum.Group} width={43} height={35}></IconComponent>
                </span>
                {translations('happyClients')}
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} className={styles['tab-col']}>
            <Link href="/aboutUs/partners" className={styles['tab-link'] + ' ' + ('/aboutUs/'+params.activeTab === '/aboutUs/partners' ? styles['active-tab']: '')}>
                <span className="pe-2">
                  <IconComponent icon={iconsEnum.Party} width={43} height={35}></IconComponent>
                </span>
                {translations('partners')}
            </Link>
          </Col>
        </Row>
      </Nav>
    );
}

export default ServicesTabs;