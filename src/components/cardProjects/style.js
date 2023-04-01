import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  width: 30%;

  p {
    margin: 5px 0px 5px 0px;
  }

  @media (max-width: 950px) {
    width: 45%;
  }
  @media (max-width: 700px) {
    width: 85%;
  }
`;
export const Image = styled.img`
  width: 100%;
  min-height: 190px;
`;
export const Title = styled.p`
  margin: 0px;
  font-size: 1.5vw;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 4.7vw;
  }
`;
