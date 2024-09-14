import { Container } from "react-bootstrap";
import Title from "./title";
import { LayoutInterface } from "@/interfaces/layout.interface";

const Layout = ({ children }: LayoutInterface) => {
    return(
        <Container style={{
            paddingTop: 72,
            paddingBottom: 72
        }}>
            <Title></Title>
            {children}
        </Container>
    );
}

export default Layout;