import { Metadata } from "next";
import Title from "./title";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - AboutUs',
    description: 'About us information'
};


const Page = () => {
    return (<section>
        <Title></Title>
        about us
    </section>)
}

export default Page;