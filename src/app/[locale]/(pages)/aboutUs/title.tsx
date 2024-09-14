"use client"

import { useContext, useEffect } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('AboutUs')
    const {setPrimaryTitle, setSecondaryTitle, setPageImage} = useContext(PageContext);
    
    useEffect(() => {
        setPrimaryTitle(translation('primaryPageTitle'));
        setSecondaryTitle(translation('secondaryPageTitle'));
        setPageImage('/images/page_header.png');
    });

    return(<></>);
}

export default Title;