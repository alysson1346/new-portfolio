import {
  Div,
  Img,
  Ul,
  Link,
  DivLogo,
  Divlinks,
  DivBtn,
  DivSIdebar,
} from "./style";
import Logo from "../../assets/img/logo.svg";
import { Button } from "../button";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Sidebar } from "../sidebar";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Div>
      <DivSIdebar>
        <button onClick={() => setSidebarOpen(true)}>
          <MenuIcon />
        </button>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </DivSIdebar>
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
        <Button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Oacv6SHePF-DQQMhL8OO7XUtuDpiTymB/view?usp=sharing",
              "_blank"
            );
          }}
          color="btn1"
        >
          Ver Currículo
        </Button>
      </DivBtn>
    </Div>
  );
};
