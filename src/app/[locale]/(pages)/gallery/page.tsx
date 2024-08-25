import { Container} from "react-bootstrap";
import Title from "./title";
import GalleryComponent from "./gallery.components";

const Page = () => {
    return (
        <Container>
            <Title></Title>
            <GalleryComponent></GalleryComponent>
        </Container>
    )
}

export default Page;