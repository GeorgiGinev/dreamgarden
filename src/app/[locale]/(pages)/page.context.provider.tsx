"use client"

import { ReactNode, useState } from "react";
import PageContext from "./page.context";
import SectionTitle from "@/components/section-title/section-title";
import styles from './page.context.provider.module.scss';
import { Container, Image } from "react-bootstrap";
import ContactForm from "@/components/contact-form/contact-form";
import AOSComponent from "@/components/aos/aos.component";

interface PageContextProviderInterface {
    children: ReactNode
}

const PageContextProvider = ({children}: PageContextProviderInterface) => {
    const [primaryTitle, setPrimaryTitle] = useState('');
    const [secondaryTitle, setSecondaryTitle] = useState('');
    const [pageImage, setPageImage] = useState('/images/page_header.png');
    const [isContactFormVisible, setIsContactFormVisible] = useState<boolean>(false);

    return(
        <PageContext.Provider value={{primaryTitle, setPrimaryTitle, secondaryTitle, setSecondaryTitle, isContactFormVisible, setIsContactFormVisible, setPageImage}}>
            <AOSComponent></AOSComponent>
            <div className={styles.container}>
                <Container>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1
                    }}>
                        <SectionTitle primrayTitle={primaryTitle} primaryTitleClass={`text-white ${styles['primary-page-title']}`} secondaryTitle={secondaryTitle} secondaryTitleClass={`text-white ${styles['secondary-page-title']}`}></SectionTitle>
                    </div>
                </Container>
                <div data-aos={`fade-in`} className={`${styles['image-container']}`}>
                    <Image style={{
                        opacity: 0.4
                    }} src={pageImage} alt="Page Header" />
                </div>
                <div className={styles['footer-container']}></div>
            </div>
            {children}
            {isContactFormVisible ? <section>
                <ContactForm></ContactForm>
            </section> : ''}
        </PageContext.Provider>
    );
}

export default PageContextProvider;