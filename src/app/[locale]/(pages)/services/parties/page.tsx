import ServicesTabs from "../tabs/tab";

const Page = () => {
    const url: string = process.env.NEXT_PUBLIC_API_URL as string;

    return (
        <div>
            <ServicesTabs activeTab="parties"></ServicesTabs>
            Parties
        </div>
    )
}

export default Page;