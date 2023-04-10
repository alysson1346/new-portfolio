import styled from "styled-components";

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: "100%";
  border-bottom: 0.1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-left: 3vw;
  padding-right: 3vw;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const DivContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const DivImage = styled.div`
  width: 35%;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.2vw;
  line-height: 2.5vw;

  @media (max-width: 700px) {
    font-size: 3.5vw;
    line-height: 5vw;
  }
`;
