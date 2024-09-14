import React from "react";
import ServicesTabs from "../tabs/tab";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Happy clients',
    description: 'Happy clients information'
};

const Page = () => {
    return(<div>
        <ServicesTabs activeTab="happyClients"></ServicesTabs>
    </div>)
}

export default Page;