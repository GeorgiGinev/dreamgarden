import { useTranslations } from "next-intl";
import { Col, Row } from "react-bootstrap";
import styles from "./location.module.scss";
import { LocationInterface } from "./location.interface";
import GoogleMapComponent from "./google-map/google-map.component";

const HomeLocation = (params: LocationInterface) => {
    const homeTranslation = useTranslations('Home');
    const lat = params.contacts.googleLocation.lat;
    const long = params.contacts.googleLocation.long;

    return (
        <Row className="mt-4">
            <Col xs={12} lg={4}>
                <div className={styles['information-container-wrapper'] + " bg-primary px-3 py-4"}>
                    <div className="mb-3">
                        <h2 className="mb-3">{homeTranslation('locationHomeAddressTitle')}</h2>
                        <p>
                            {params.contacts.specificAddress}
                        </p>
                    </div>
                    <div className="mb-3">
                        <h2 className="mb-3">{homeTranslation('locationHomeContactTitle')}</h2>
                        <p>
                            {params.contacts.phoneNumbers[0]}
                            <br />
                            {params.contacts.email}
                        </p>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={8}>
                <GoogleMapComponent lat={lat} long={long}></GoogleMapComponent>
            </Col>
        </Row>
    );
}

export default HomeLocation;