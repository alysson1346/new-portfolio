import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  padding: 20px;
  min-height: 500px;
  border-bottom: 0.1px solid #e0e0e0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  @media (min-width: 900px) {
    max-width: 300px;
  }
  @media (min-width: 700px) {
    max-width: 200px;
  }
  @media (max-width: 700px) {
    max-width: 200px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TitleBanner = styled.h1`
  margin-bottom: 0px;
  @media (min-width: 900px) {
    font-size: 2vw;
  }
  @media (max-width: 700px) {
    font-size: 5.5vw;
  }
  @media (max-width: 700px) {
    font-size: 5.5vw;
  }
`;
export const TextBanner = styled.p`
  @media (min-width: 900px) {
    font-size: 1.3vw;
  }
  @media (max-width: 700px) {
    font-size: 3vw;
  }
  @media (max-width: 700px) {
    font-size: 2.5vw;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
