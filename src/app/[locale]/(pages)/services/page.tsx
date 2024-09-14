import { Metadata } from "next";
import Page from "./weddings/page"

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Wedding service',
    description: 'Wedding service information'
};

const SPage = () => {
    return (<Page></Page>);
}

export default SPage;