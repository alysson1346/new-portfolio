import Computer from "../../assets/img/AboutMe/pc.svg";
import { Div, Img, DivContent, DivImage, Text } from "./style";
import { Title } from "../title";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const AboutMe = () => {
  return (
    <Div id="AboutMe">
      <DivContent>
        <Title black="true">Sobre Mim</Title>
        <Text data-aos="fade-up" data-aos-duration="3000">
          Desde criança me interesso pela tecnologia e o que ela pode nos
          oferecer. Eu passava horas pesquisando artigos e vídeos sobre
          celulares, videogames e a experiência que eles nos proporcionavam.
          Como amante da tecnologia resolvi estudar programação para sempre
          estar por dentro das últimas novidades desse mercado que vem crescendo
          a cada dia que se passa. Tenho experiência em programação numa startup
          que criei com um amigo onde desenvolvi muito bem a base da programação
          juntamente com sua lógica. Atualmemte continuo estudando para sempre
          atender as necessidades do mercado!
        </Text>
      </DivContent>
      <DivImage
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-offset="200"
      >
        <Img src={Computer} />
      </DivImage>
    </Div>
  );
};
