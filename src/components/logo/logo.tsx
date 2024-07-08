"use client"

import { useTranslations } from "next-intl";
import styles from "./logo.module.scss";
import Image from "next/image";

export interface LogoInterface {
    position: 'header' | 'footer'
}

const Logo = (props: LogoInterface) => {
    const t = useTranslations('Header');
    
    return(
        <div className={styles.container}>
            <Image src={props.position === 'header' ? '/images/logo.png' : '/images/logo_footer.png'} alt={t('Logo')} width={80} height={80}></Image>
        </div>
    )
}

export default Logo;