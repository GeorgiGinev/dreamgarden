import { Metadata } from "next";
import ServicesTabs from "../tabs/tab";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Partners',
    description: 'Partners information'
};

const Page = () => {
    return(<div>
        <ServicesTabs activeTab="partners"></ServicesTabs>
    </div>)
}

export default Page;