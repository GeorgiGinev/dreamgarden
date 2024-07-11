"use client"

import { ReactNode, useEffect, useState } from "react";
import PageContext from "./page.context";
import SectionTitle from "@/components/section-title/section-title";
import styles from './layout.module.scss';
import { Container, Image } from "react-bootstrap";
import AOS from 'aos';
import { AnimationsDurationEnum } from "@/enums/animations-duration.enum";

interface PageContextProviderInterface {
    children: ReactNode
}

const PageContextProvider = ({children}: PageContextProviderInterface) => {
    const [primaryTitle, setPrimaryTitle] = useState('сад');
    const [secondaryTitle, setSecondaryTitle] = useState('Виртуален');

    useEffect(() => {
        const newLocal = AnimationsDurationEnum.Primary;
        AOS.init({
          duration: newLocal,
          once: true,
        });

        return () => {
            AOS.refresh();
        };
      }, [])
      
    return(
        <PageContext.Provider value={{primaryTitle, setPrimaryTitle, secondaryTitle, setSecondaryTitle}}>
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
                <Image data-aos="fade-in" style={{
                    opacity: 0.4
                }} src="/images/page_header.png" alt="Page Header" fluid />
                <div className={styles['footer-container']}></div>
            </div>
            {children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;