import { Metadata } from "next";
import Title from "./title";
import SectionTitle from "@/components/section-title/section-title";
import { Col, Container, Row } from "react-bootstrap";
import styles from './page.module.scss'
import { getLocale, getTranslations } from "next-intl/server";
import ContactsService from "@/services/contacts/contacts.service";
import RequestParamsService from "@/services/requestParamsService";
import { SocialMediaApiResponseInterface } from "@/interfaces/api/social-media-api-response.interface";
import IconComponent from "@/components/icons/icon.component";
import { Icons } from "@/components/icons/icons.enum";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Contacts',
    description: 'Contacts information'
};

const Page = async () => {
    const locale = await getLocale();
    const contactService = new ContactsService();
    const data = await contactService.getContacts(new RequestParamsService({locale: locale}));

    const contactFormTranslation = await getTranslations('Contacts');

    return (
        <div className={'position-relative overflow-hidden'}>
            <Title />
            <div style={{
                    backgroundImage: 'url(/images/contact_form_flower_2.png)',
                    width: 540,
                    height: 315,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    zIndex: '-1'
                }}></div>
            <Container className="pb-4" style={{
                paddingTop: 72,
                paddingBottom: 72
            }}>
            <Row className="mb-4">
                <Col md={5}></Col>
                <Col md={2}>
                    <SectionTitle primrayTitle={contactFormTranslation('primaryPageTitle')} secondaryTitle={contactFormTranslation('secondaryPageTitle')}></SectionTitle>
                </Col>
                <Col md={5}></Col>
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8} className="position-relative">
                    <div className={styles['contact-form'] + " p-4"}>
                        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                        <Row>
                            <Col xs={12} md={6}>
                                <p className={"d-flex align-items-center " + styles['text-wrapper']}>
                                    <IconComponent fill="inherit" icon={Icons.Mail} width={25} height={21}></IconComponent>
                                    <a className={styles['text-wrapper'] + ' ps-1'} href={`mailto:${data.email}`}>{data.email}</a>
                                </p>
                                <p className={"d-flex align-items-center " + styles['text-wrapper']}>
                                    <IconComponent fill="inherit" icon={Icons.Pin} width={18} height={27}></IconComponent>
                                    <span className="ps-1">{data.specificAddress}</span>
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                {data.phoneNumbers.map((phoneNumber: string, index: number) => {
                                    return (
                                        <p className={"d-flex align-items-center " + styles['text-wrapper']} key={index}>
                                            <IconComponent fill="inherit" icon={Icons.Phone} width={22} height={23}></IconComponent>
                                            <a className={styles['text-wrapper'] + ' ps-1'} href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                                        </p>
                                    );
                                })}
                            </Col>
                        </Row>
                        <div className="text-center pt-2">
                            <p>
                                <b>{contactFormTranslation('followUs')}</b>
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {data.socialMediaAccounts.map((socialMediaAccount: SocialMediaApiResponseInterface) => {
                            const icon = Object.keys(Icons).includes(socialMediaAccount.name);

                            return (
                            <p className="px-1">
                                <a className={styles['text-wrapper']} href={socialMediaAccount.url} target="_blank">
                                    {icon ? <IconComponent fill="inherit" icon={Icons[socialMediaAccount.name as keyof typeof Icons]} width={16} height={16}></IconComponent> : ''}
                                    <span className="ps-1">
                                        {socialMediaAccount.name}
                                    </span>
                                </a>
                            </p>);
                        })}
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: 'url(/images/contact_form_doodle.png)',
                        width: 200,
                        height: 200,
                        position: 'absolute',
                        top: -80,
                        right: -70,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1
                    }}></div>
                </Col>
                <Col lg={2}></Col>
            </Row>
            </Container>
        </div>
    );
}

export default Page;