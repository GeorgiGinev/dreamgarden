import { useTranslations } from "next-intl";
import styles from "./logo.module.scss";
import Image from "next/image";
import { Link } from "@/routing";

export interface LogoInterface {
    position: 'header' | 'footer'
}

const Logo = (props: LogoInterface) => {
    const t = useTranslations('Header');
    
    return(
        <Link className={styles.container} href="/home">
            <Image src={props.position === 'header' ? '/images/logo.png' : '/images/logo_footer.png'} alt={t('Logo')} width={80} height={80} priority></Image>
        </Link>
    )
}

export default Logo;