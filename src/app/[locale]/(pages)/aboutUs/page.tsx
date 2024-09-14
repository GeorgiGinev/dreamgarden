import { Metadata } from "next";
import Page from "./garden/page";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - AboutUs',
    description: 'About us information'
};


const SPage = () => {
    return (<Page></Page>)
}

export default SPage;