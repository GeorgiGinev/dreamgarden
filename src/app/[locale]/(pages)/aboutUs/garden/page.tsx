import { Metadata } from "next";
import ServicesTabs from "../tabs/tab";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Garden',
    description: 'Garden information'
};

const Page = () => {
    return(<div>
        <ServicesTabs activeTab="garden"></ServicesTabs>
    </div>)
}

export default Page;