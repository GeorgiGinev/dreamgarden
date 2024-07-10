import SectionTitle from "@/components/section-title/section-title";
import { LayoutInterface } from "@/interfaces/layout.interface";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import styles from './layout.module.scss';

const Layout = async ({children}: LayoutInterface) => {
    return(
        <section>
            <div className={styles.container}>
                <Container>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1
                    }}>
                        <SectionTitle primrayTitle={'Тур'} primaryTitleClass={`text-white ${styles['primary-page-title']}`} secondaryTitle={'Виртуален'} secondaryTitleClass={`text-white ${styles['secondary-page-title']}`}></SectionTitle>
                    </div>
                </Container>
                <Image style={{
                    opacity: 0.4
                }} src="/images/page_header.png" alt="Page Header" fluid />
                <div className={styles['footer-container']}></div>
            </div>
            {children}
        </section>
    )
}

export default Layout;