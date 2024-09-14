"use client"

import { useContext, useEffect } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('Gallery')
    const {setPrimaryTitle, setSecondaryTitle, setIsContactFormVisible, setPageImage} = useContext(PageContext);
    
    useEffect(() => {
        setPrimaryTitle(translation('primaryPageTitle'));
        setSecondaryTitle(translation('secondaryPageTitle'));
        setIsContactFormVisible(true);
        setPageImage('/images/page_header.png');
    });

    return(<></>);
}

export default Title;