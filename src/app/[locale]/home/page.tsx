import styles from "./page.module.scss";
import HomeCarouselComponent from "./components/carousel/carousel";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title/section-title";
import { useTranslations } from "next-intl";
import HomeServicesGrid from "./components/services-grid/services-grid";
import HomeKeyFacts from "./components/key-facts-grid/key-facts-grid";
import Button from "@/components/button/button";
import HomeLocation from "./components/location/location";

export default function Home() {
  const homeTranslations = useTranslations('Home');

  return (
    <main className={styles.container}>
      <HomeCarouselComponent></HomeCarouselComponent>
      <section className="container-wrapper"
        style={{
          backgroundImage: 'url("/images/our_services.png")'
        }}
      >
        <Container className="py-4">
          <Row>
            <Col md={6}>
              <SectionTitle primrayTitle={homeTranslations('servicesBoxServices')} secondaryTitle={homeTranslations('servicesBoxOur')}></SectionTitle>
              <p className="mt-4">
                {homeTranslations('servicesBoxDescription')}
              </p>
            </Col>
            <Col md={6}></Col>
          </Row>
          <HomeServicesGrid></HomeServicesGrid>
        </Container>
      </section>
      <section className="container-wrapper"
        style={{
          backgroundImage: 'url("/images/facts.png")'
        }}
      >
        <Container className="py-4 overflow-hidden">
          <Row>
            <Col md={6}>
              <SectionTitle primrayTitle={homeTranslations('factsBoxFacts')} secondaryTitle={homeTranslations('factsBoxKey')}></SectionTitle>
            </Col>
            <Col md={6}></Col>
          </Row>
          <HomeKeyFacts></HomeKeyFacts>
          <div className="text-center mt-4">
            <Button>
              {homeTranslations('askUs')}
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-4">
          <Row>
            <Col md={5}></Col>
            <Col md={2}>
              <SectionTitle primrayTitle={homeTranslations('locationBoxLocation')} secondaryTitle={homeTranslations('locationBoxConvenient')}></SectionTitle>
            </Col>
            <Col md={5}></Col>
          </Row>
          <HomeLocation></HomeLocation>
        </Container>
      </section>
    </main>
  );
}
