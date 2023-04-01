import styled from "styled-components";

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: "100%";
  border-bottom: 0.1px solid #e0e0e0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Img = styled.img`
  width: 100%;

  @media (max-width: 700px) {
    width: 70%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
export const TitleBanner = styled.h1`
  font-size: 2.5vw;
  margin-bottom: 0px;

  @media (max-width: 700px) {
    font-size: 5.5vw;
  }
`;
export const TextBanner = styled.p`
  font-size: 1.8vw;

  @media (max-width: 700px) {
    font-size: 3.5vw;
  }
`;

export const DivImage = styled.div`
  width: 40%;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: center;
  width: 55%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
