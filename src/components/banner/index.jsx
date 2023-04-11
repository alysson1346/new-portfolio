import Alysson from "../../assets/img/Banner/alysson.png";
import {
  Container,
  Div,
  Img,
  Section,
  TitleBanner,
  TextBanner,
  DivBtn,
} from "./style";
import { Bolha } from "../particle";
import { Button } from "../button";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Banner = () => {
  return (
    <Container>
      <Div id="Home">
        <Bolha>
          <Img src={Alysson} />
        </Bolha>

        <Section
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="500"
        >
          <TitleBanner>Olá, sou Alysson Colombo</TitleBanner>
          <TextBanner>
            Seja bem-vindo ao meu portfólio aqui apresento minhas habilidades e
            projetos!
          </TextBanner>
          <DivBtn>
            <a href="#MySkills">
              <Button color="btn1">Ver Habilidades</Button>
            </a>
            <a href="#MyProjects">
              <Button color="btn2">Ver Projetos</Button>
            </a>
          </DivBtn>
        </Section>
      </Div>
    </Container>
  );
};
