import { Div, ContainerImage, Img, Text } from "./styles";
import { Title } from "../title";
import Slider from "react-slick";
import { allCertificates } from "../../utils/certificates";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ anchorPlacement: "top-bottom" });

export const MyCertificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    fade: false,
    arrows: true,
  };

  return (
    <Div id="Certificates">
      <div className="CenterDiv">
        <Title black="true">Certificados</Title>
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
        <Slider {...settings}>
          {allCertificates.map((elem) => {
            return (
              <ContainerImage>
                <Img src={elem.img} />
                <Text>{elem.title}</Text>
              </ContainerImage>
            );
          })}
        </Slider>
      </div>
    </Div>
  );
};
