import { Container} from "react-bootstrap";
import Title from "./title";
import GalleryImages from "./gallery-images/gallery-images";

const Page = async () => {
    return (
        <Container>
            <Title></Title>
            <GalleryImages></GalleryImages>
        </Container>
    )
}

export default Page;