"use client"

import { useContext, useEffect } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('AboutUs')
    const {setPrimaryTitle, setSecondaryTitle, setPageImage, setIsContactFormVisible} = useContext(PageContext);
    
    useEffect(() => {
        setPrimaryTitle(translation('primaryPageTitle'));
        setSecondaryTitle(translation('secondaryPageTitle'));
        setIsContactFormVisible(true);
        setPageImage('/images/page_header.webp');
    });

    return(<></>);
}

export default Title;