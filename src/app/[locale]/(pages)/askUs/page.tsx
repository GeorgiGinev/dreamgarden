import { Metadata } from "next";
import Title from "./title";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Ask us',
    description: 'Ask us information'
};

const Page = () => {
    return (
        <Title />
    )
}

export default Page;