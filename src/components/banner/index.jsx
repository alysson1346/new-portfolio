import Alysson from "../../assets/img/Banner/alysson.svg";
import {
  Div,
  DivImage,
  DivContent,
  Img,
  Section,
  TitleBanner,
  TextBanner,
  DivBtn,
} from "./style";

import { Button } from "../button";

export const Banner = () => {
  return (
    <Div id="Home">
      <DivImage>
        <Img src={Alysson} />
      </DivImage>
      <DivContent>
        <Section>
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
      </DivContent>
    </Div>
  );
};
