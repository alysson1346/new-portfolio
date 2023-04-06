import { Drawer } from "@material-ui/core";
import { Ul, Li, DivCloseSidebar, DivBtn } from "./styles";
import { Button } from "../button";
import { FaHome, FaUserCircle, FaCode, FaLaptopCode } from "react-icons/fa";

export const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      PaperProps={{ style: { backgroundColor: "#038080", width: "47%" } }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Ul>
        <DivCloseSidebar>
          <button onClick={onClose}>X</button>
        </DivCloseSidebar>

        <Li>
          <a href="#Home">
            <button
              onClick={() => {
                onClose();
              }}
            >
              <FaHome /> Home
            </button>
          </a>
        </Li>

        <Li>
          <a href="#AboutMe">
            <button
              onClick={() => {
                onClose();
              }}
            >
              <FaUserCircle /> Sobre Mim
            </button>
          </a>
        </Li>
        <Li>
          <a href="#MySkills">
            <button
              onClick={() => {
                onClose();
              }}
            >
              <FaCode /> Habilidades
            </button>
          </a>
        </Li>
        <Li>
          <a href="#MyProjects">
            <button
              onClick={() => {
                onClose();
              }}
            >
              <FaLaptopCode /> Projetos
            </button>
          </a>
        </Li>
        <DivBtn>
          <Button
            color="btn1"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Oacv6SHePF-DQQMhL8OO7XUtuDpiTymB/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Ver Currículo
          </Button>
        </DivBtn>
      </Ul>
    </Drawer>
  );
};
