import { Container} from "react-bootstrap";
import Title from "./title";
import GalleryImages from "../../../../components/gallery-images/gallery-images";
import { Swiper, SwiperSlide } from "swiper/react";
import GallerySwiper from "./gallery-swiper";

const Page = () => {
    return (
        <Container>
            <Title></Title>
            <GallerySwiper />
        </Container>
    )
}

export default Page;