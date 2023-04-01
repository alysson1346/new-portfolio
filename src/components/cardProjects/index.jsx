import { Li, Image, Title } from "./style";
import { Button } from "../button";

export const CardProjects = ({ img, title, type, link }) => {
  return (
    <Li>
      <Image src={img} alt="Imagem do projeto" />
      <Title>{title}</Title>
      <p>Tipo: {type}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <Button>Ver mais</Button>
      </a>
    </Li>
  );
};
