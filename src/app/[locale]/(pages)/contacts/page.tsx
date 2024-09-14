import { Metadata } from "next";
import Title from "./title";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Contacts',
    description: 'Contacts information'
};

const Page = () => {
    return (
        <section>
            <Title />
            Контакти
        </section>
    );
}

export default Page;