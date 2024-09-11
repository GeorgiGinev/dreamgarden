import { Container, Tab, Tabs } from "react-bootstrap";
import Title from "./title";
import ServicesTabs from "./tabs/tab";

const Page = () => {
    return (
    <Container>
        <Title></Title>
        <ServicesTabs></ServicesTabs>
    </Container>
    );
}

export default Page;