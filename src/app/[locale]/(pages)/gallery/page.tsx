import { Container} from "react-bootstrap";
import Title from "./title";
import GalleryComponent from "./gallery.components";
import GalleryProvider from "./gallery.provider";

const Page = () => {
    return (
        <Container>
            <Title></Title>
            <GalleryProvider></GalleryProvider>
        </Container>
    )
}

export default Page;