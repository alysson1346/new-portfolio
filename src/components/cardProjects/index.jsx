import { Li, Image, Title } from "./style";
import { Button } from "../button";
import { MyModal } from "../modal";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ anchorPlacement: "top-bottom" });

export const CardProjects = ({ img, title, type, description, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [haveDeploy, setHaveDeploy] = useState(true);

  const VerifyDeploy = (array) => {
    if (array[0].deploy === "" || array[0].deploy === null) {
      setHaveDeploy(false);
    } else {
      setHaveDeploy(true);
    }
  };

  return (
    <Li data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
      <Image src={img} alt="Imagem do projeto" />
      <Title>{title}</Title>
      <p>Tipo: {type}</p>

      <Button
        onClick={() => {
          VerifyDeploy(link);
          handleOpenModal();
        }}
      >
        Ver Descrição
      </Button>
      <MyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        description={description}
        haveDeploy={haveDeploy}
        link={link}
      />
    </Li>
  );
};
