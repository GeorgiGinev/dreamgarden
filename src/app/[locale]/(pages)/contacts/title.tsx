"use client"

import { useContext, useEffect } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('Contacts')
    const {setPrimaryTitle, setSecondaryTitle, setIsContactFormVisible, setPageImage} = useContext(PageContext);
    
    useEffect(() => {
        setPrimaryTitle(translation('primaryPageTitle'));
        setSecondaryTitle(translation('secondaryPageTitle'));
        setIsContactFormVisible(false);
        setPageImage('/images/contact-page-image-title.webp');
    });

    return(<></>);
}

export default Title;