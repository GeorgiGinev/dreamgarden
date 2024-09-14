"use client"

import { PageTitleInterface } from "@/interfaces/page.interface";
import { createContext } from "react";

const PageContext = createContext<PageTitleInterface>({
    primaryTitle: 'Primary',
    setPrimaryTitle: () => {},
    secondaryTitle: 'Secondary',
    setSecondaryTitle: () => {},
    isContactFormVisible: true,
    setIsContactFormVisible: () => {},
    setPageImage: () => {}
});

export default PageContext;