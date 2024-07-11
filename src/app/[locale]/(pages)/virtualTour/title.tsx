"use client"

import { useContext } from "react";
import PageContext from "../page.context";
import { useTranslations } from "next-intl";

const Title = () => {
    const translation = useTranslations('VirtualTour')
    const {setPrimaryTitle, setSecondaryTitle} = useContext(PageContext);
    setPrimaryTitle(translation('primaryPageTitle'));
    setSecondaryTitle(translation('secondaryPageTitle'));

    return(<></>);
}

export default Title;