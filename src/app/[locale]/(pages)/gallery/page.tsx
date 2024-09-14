import { Container} from "react-bootstrap";
import Title from "./title";
import GalleryProvider from "./gallery.provider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: process.env.TITLE_PREFIX as string + ' - Gallery',
    description: 'Gallery'
};

const Page = () => {
    return (
        <Container>
            <Title></Title>
            <GalleryProvider></GalleryProvider>
        </Container>
    )
}

export default Page;