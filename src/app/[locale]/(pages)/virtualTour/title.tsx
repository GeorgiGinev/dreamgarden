"use client"

import { useContext, useEffect } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('VirtualTour')
    const {setPrimaryTitle, setSecondaryTitle} = useContext(PageContext);
    
    useEffect(() => {
        setPrimaryTitle(translation('primaryPageTitle'));
        setSecondaryTitle(translation('secondaryPageTitle'));
    });

    return(<></>);
}

export default Title;