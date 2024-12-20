import styles from "./page.module.scss";
import HomeCarouselComponent from "./components/carousel/carousel";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title/section-title";
import HomeServicesGrid from "./components/services-grid/services-grid";
import HomeKeyFacts from "./components/key-facts-grid/key-facts-grid";
import HomeLocation from "./components/location/location";
import HomeService from "@/services/home/home.service";
import { getLocale, getTranslations } from "next-intl/server";
import RequestParamsService from "@/services/requestParamsService";
import AOSComponent from "@/components/aos/aos.component";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form/contact-form";

export const metadata: Metadata = {
  title: process.env.TITLE_PREFIX as string + ' - Home',
  description: 'Home information',
};

export default async function Home() {
  const locale = await getLocale();
  const homeService = new HomeService();
  const data = await homeService.getHome(new RequestParamsService({locale: locale}));

  const homeTranslations = await getTranslations('Home');

  return (
    <main className={styles.container}>
      <AOSComponent></AOSComponent>
      <HomeCarouselComponent images={data.videos}></HomeCarouselComponent>
      <section className="container-wrapper"
        style={{
          backgroundImage: 'url("/images/our_services.webp")'
        }}
      >
        <Container className="py-4">
          <Row>
            <Col md={6}>
              <SectionTitle primrayTitle={homeTranslations('servicesBoxServices')} secondaryTitle={homeTranslations('servicesBoxOur')}></SectionTitle>
              <p className="mt-4" dangerouslySetInnerHTML={{ __html: data.servicesDescription }} />
            </Col>
            <Col md={6}></Col>
          </Row>
          <HomeServicesGrid services={data.services}></HomeServicesGrid>
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
          <HomeKeyFacts images={data.keyFacts}></HomeKeyFacts>
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
          <HomeLocation contacts={data.contacts}></HomeLocation>
        </Container>
      </section>
      <ContactForm></ContactForm>
    </main>
  );
}
