import { Container } from "react-bootstrap";
import Title from "./title";
import { LayoutInterface } from "@/interfaces/layout.interface";
import ServicesTabs from "./tabs/tab";

const Layout = ({ children }: LayoutInterface) => {
    return (
    <Container>
        <Title></Title>
        {children}
    </Container>
    );
}

export default Layout;