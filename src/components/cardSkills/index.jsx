import {
  Li,
  DivImage,
  DivContentSkills,
  Image,
  Text,
  BarPercentage,
} from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const CardSkills = ({ img, title, percentage }) => {
  return (
    <Li data-aos="fade-up" data-aos-duration="1500">
      <DivImage>
        <Image src={img} />
      </DivImage>
      <DivContentSkills>
        <Text>{title}</Text>
        <BarPercentage value={percentage} max="100" />
      </DivContentSkills>
    </Li>
  );
};
