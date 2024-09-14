import ServicesTabs from "../tabs/tab";

const Page = () => {
    const url: string = process.env.NEXT_PUBLIC_API_URL as string;

    return (
        <div>
            <ServicesTabs activeTab="weddings"></ServicesTabs>
            Weddings
        </div>
    )
}

export default Page;