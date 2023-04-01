import {
  Li,
  DivImage,
  DivContentSkills,
  Image,
  Text,
  BarPercentage,
} from "./style";

export const CardSkills = ({ img, title, percentage }) => {
  return (
    <Li>
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
