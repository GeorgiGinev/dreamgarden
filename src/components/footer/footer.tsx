import { Col, Container, Row } from "react-bootstrap";
import Logo from "../logo/logo";
import { Link } from "@/routing";
import styles from './footer.module.scss';
import ContactsService from "@/services/contacts/contacts.service";
import { getLocale, getTranslations } from "next-intl/server";
import RequestParamsService from "@/services/requestParamsService";
import { SocialMediaApiResponseInterface } from "@/interfaces/api/social-media-api-response.interface";
import IconComponent from "../icons/icon.component";
import { Icons } from "../icons/icons.enum";

const Footer = async () => {
    const locale = await getLocale();
    const contactsService = new ContactsService();
    const data = await contactsService.getContacts(new RequestParamsService({locale: locale}));

    const translation = await getTranslations('Footer');
    const serviceTranslation = await getTranslations('Services');

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
                        <Link href={'/services/weddings'} className={styles['text-wrapper']}>
                            {serviceTranslation('Weddings')}
                        </Link>
                        <Link href={'/services/teambuilding'} className={styles['text-wrapper']}>
                            {serviceTranslation('Teambuilding')}
                        </Link>
                        <Link href={'/services/parties'} className={styles['text-wrapper']}>
                            {serviceTranslation('Parties')}
                        </Link>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <b>
                            {translation('footerContacts')}
                        </b>
                        {data.phoneNumbers.map((phoneNumber: string, index: number) => {
                            return (<div key={index}>
                                <a className={styles['text-wrapper']} href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                            </div>)
                        })}
                        <div>
                            <a className={styles['text-wrapper']} href={`mailto:${data.email}`}>{data.email}</a>
                        </div>
                        <div>
                            <a className={styles['text-wrapper']} href={`https://www.google.com/maps/place/${data.googleLocation.lat},${data.googleLocation.long}`} target="_blank">
                                {translation('footerGoogleMapsLocation')}
                            </a>
                        </div>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <b>
                            {translation('footerFollowUs')}
                        </b>
                        {data.socialMediaAccounts.map((socialMediaAccount: SocialMediaApiResponseInterface, index: number) => {
                            const icon = Object.keys(Icons).includes(socialMediaAccount.name);

                            return (
                            <div key={index}>
                                <a className={styles['text-wrapper']} href={socialMediaAccount.url} target="_blank">
                                    {icon ? <IconComponent icon={Icons[socialMediaAccount.name as keyof typeof Icons]} width={16} height={16}></IconComponent> : ''}
                                    <span className="ps-1">
                                        {socialMediaAccount.name}
                                    </span>
                                </a>
                            </div>);
                        })}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;