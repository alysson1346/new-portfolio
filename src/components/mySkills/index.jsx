import { skills } from "../../utils/index";
import { Div, Ul } from "./style";
import { CardSkills } from "../cardSkills";
import { Title } from "../title";

export const MySkills = () => {
  return (
    <Div id="MySkills">
      <Title>Minhas Habilidades</Title>
      <Ul>
        {skills.map((elem) => {
          return (
            <CardSkills
              img={elem.img}
              title={elem.title}
              percentage={elem.value}
            />
          );
        })}
      </Ul>
    </Div>
  );
};
