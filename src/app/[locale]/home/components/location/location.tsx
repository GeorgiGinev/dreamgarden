"use client"

import { useTranslations } from "next-intl";
import { Col, Row } from "react-bootstrap";
import styles from "./location.module.scss";
import { MapProvider } from "./location.provider";
import { GoogleMap } from "@react-google-maps/api";

const HomeLocation = () => {
    const homeTranslation = useTranslations('Home');

    const defaultMapContainerStyle = {
        width: "100%",
        height: "316px",
    };

    return (
        <Row className="mt-4">
            <Col xs={12} lg={4}>
                <div className={styles['information-container-wrapper'] + " bg-primary px-3 py-4"}>
                    <div className="mb-3">
                        <h5 className="mb-3">{homeTranslation('locationHomeAddressTitle')}</h5>
                        <p>
                            bul. `Vitosha` 23, 2100 Elin Pelin
                        </p>
                    </div>
                    <div className="mb-3">
                        <h5 className="mb-3">{homeTranslation('locationHomeContactTitle')}</h5>
                        <p>
                            0876929962<br />
                            ivan@gmail.com
                        </p>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={8}>
                <MapProvider>
                    <div className="w-full">
                        <GoogleMap mapContainerStyle={defaultMapContainerStyle}>
                        </GoogleMap>
                    </div>
                </MapProvider>
            </Col>
        </Row>
    );
}

export default HomeLocation;