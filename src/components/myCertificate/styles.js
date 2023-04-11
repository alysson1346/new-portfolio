import styled from "styled-components";

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  padding-left: 3vw;
  padding-right: 3vw;
  .CenterDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ContainerImage = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 800px;

  @media (max-width: 805px) {
    max-width: 80%;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  text-align: center;
  font-size: 5vw;
  @media (min-width: 900px) {
    font-size: 1.3vw;
  }
`;
