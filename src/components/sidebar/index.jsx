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
          <button
            onClick={() => {
              onClose();
              window.location.hash = "#Home";
            }}
          >
            <FaHome /> Home
          </button>
        </Li>
        <Li>
          <button
            onClick={() => {
              onClose();
              window.location.hash = "#AboutMe";
            }}
          >
            <FaUserCircle /> Sobre Mim
          </button>
        </Li>
        <Li>
          <button
            onClick={() => {
              onClose();
              window.location.hash = "#MySkills";
            }}
          >
            <FaCode /> Habilidades
          </button>
        </Li>
        <Li>
          <button
            onClick={() => {
              onClose();
              window.location.hash = "#MyProjects";
            }}
          >
            <FaLaptopCode /> Projetos
          </button>
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
