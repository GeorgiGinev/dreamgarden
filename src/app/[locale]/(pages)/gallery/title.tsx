"use client"

import { useContext, useEffect } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('Gallery')
    const {setPrimaryTitle, setSecondaryTitle} = useContext(PageContext);
    
    useEffect(() => {
        setPrimaryTitle(translation('primaryPageTitle'));
        setSecondaryTitle(translation('secondaryPageTitle'));
    });

    return(<div>asd</div>);
}

export default Title;