import project1 from "../../assets/img/myProjects/horaRango.jpg";
import project2 from "../../assets/img/myProjects/kenziehub.jpg";
import project3 from "../../assets/img/myProjects/kenzieshop.jpg";
import project4 from "../../assets/img/myProjects/nodeCapa.jpg";
import project5 from "../../assets/img/myProjects/pythonCapa.jpg";

export const projects = [
  {
    index: 1,
    img: project1,
    title: "Hora do Rango",
    type: "Frontend",
    description:
      "Uma plataforma projetada em React onde é possível o usuário se cadastrar no sistema e solicitar uma dieta personalizada, os cozinheiros cadastrados no sistema terão acesso as dietas e poderão fazer suas propostas. A melhor proposta sera aceita pelo cliente. Algumas das tecnologias utilizadas foram Chakra UI para construir interfaces de usuário rapidamente, Yup para validação de esquemas de objetos e valores, React Hook Form para gerenciamento de formulários, React Router Dom para rotas entre outras biblioetcas.",
    links: [
      { deploy: "https://capstone-m3-grupo-5.vercel.app/" },
      { github: "https://github.com/alysson1346/hora-do-rango-Front-End" },
    ],
  },
  {
    index: 2,
    img: project2,
    title: "KenzieHub",
    type: "Frontend",
    description:
      "Objetivo desse projeto realizado em React é demontrar conhecimento no consumo de uma api (json server). No Kenziehub o usuário poderá criar uma conta e cadastrar as tecnologias que está estudando. O layout foi baseado num design feito no Figma. Foi utilizado  React Router Dom para rotas, react-toastify para efeitos de aviso, e axios para o consumo da API. ",
    links: [
      { deploy: "https://react-entrega-s2-kenzie-hub-alysson1346.vercel.app/" },
      {
        github:
          "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-alysson1346",
      },
    ],
  },
  {
    index: 3,
    img: project3,
    title: "KenzieShop",
    type: "Frontend",
    description:
      "Um app simples utilizando uma ferramenta para gerenciar os estados de nossa aplicação. No projeto foi escolhido o Redux. KenzieShop tem por objetivo demonstrar o conhecimento no gerenciamento de estados do React.",
    links: [
      { deploy: "https://react-entrega-s3-kenzieshop-alysson1346.vercel.app/" },
      {
        github:
          "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-alysson1346",
      },
    ],
  },
  {
    index: 4,
    img: project4,
    title: "Gerenciador de Contatos",
    type: "FullStack",
    description:
      "Projeto completo. O usuário pode se cadastrar no sistema, fazer login, cadastrar, editar e deletar a rede de contatos dele (CRUD). Nesse projeto foi utilizado Node com Typescript para projetar o backend e React para o frontend. Para rodar o projeto basta seguir as instruções da documentação.",
    links: [
      { deploy: "" },
      {
        github:
          "https://github.com/alysson1346/projeto-fullstack-gerenciador-de-contatos",
      },
    ],
  },
  {
    index: 5,
    img: project5,
    title: "Gustapão",
    type: "Backend",
    description:
      "Este projeto visa ajudar uma panificadora localizada em Curitiba, Brasil, que possui um excelente atendimento e produtos, porém, não possui um sistema dedicado ao gerenciamento de pedidos. Para resolver o problema foi desenvolvido uma API onde seria possível realizar o cadastro de usuários e produtos como também solicitar uma encomenda. Projeto foi desenvolvido em Python juntamente com Djanjo.",
    links: [
      { deploy: "" },
      {
        github:
          "https://github.com/alysson1346/projeto-python-padaria-gustapao",
      },
    ],
  },
];
