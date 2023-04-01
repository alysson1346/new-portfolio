import { Div, Ul } from "./style";
import { CardProjects } from "../cardProjects";
import { projects } from "../../utils/projects";
import { Title } from "../title";

export const MyProjects = () => {
  return (
    <Div id="MyProjects">
      <Title black="true">Projetos Desenvolvidos</Title>
      <Ul>
        {projects.map((elem) => {
          return (
            <CardProjects
              img={elem.img}
              title={elem.title}
              type={elem.type}
              link={elem.links[1].github}
            />
          );
        })}
      </Ul>
    </Div>
  );
};
