import { Div, Img, Ul, Link, DivLogo, Divlinks, DivBtn } from "./style";
import Logo from "../../assets/img/logo.svg";
import { Button } from "../button";

export const Header = () => {
  return (
    <Div>
      <DivLogo>
        <Img src={Logo} />
      </DivLogo>

      <Divlinks>
        <Ul>
          <li>
            <Link href="#Home">Home</Link>
          </li>
          <li>
            <Link href="#AboutMe">Sobre Mim</Link>
          </li>
          <li>
            <Link href="#MySkills">Minhas Habilidades</Link>
          </li>
          <li>
            <Link href="#MyProjects"> Meus Projetos</Link>
          </li>
        </Ul>
      </Divlinks>

      <DivBtn>
        <a
          href="https://api.whatsapp.com/send?phone=5519999281346"
          target="_blank"
          rel="noreferrer"
        >
          <Button color="btn1">Entrar em contato</Button>
        </a>
      </DivBtn>
    </Div>
  );
};
