import { Container} from "react-bootstrap";
import Title from "./title";
import GalleryProvider from "./gallery.provider";
import { Suspense } from "react";
import Loading from "./loading";

const Page = () => {
    return (
        <Container>
            <Title></Title>
            <GalleryProvider></GalleryProvider>
        </Container>
    )
}

export default Page;