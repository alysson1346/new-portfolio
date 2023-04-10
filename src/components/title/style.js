import styled from "styled-components";

export const Titles = styled.h2`
  font-weight: 600px;
  font-size: 1.5vw;
  color: ${(props) =>
    props.black === "true"
      ? props.theme.colors.black
      : props.theme.colors.white};

  border-bottom: 3.5px solid
    ${(props) =>
      props.black === "true"
        ? props.theme.colors.titleBlack
        : props.theme.colors.white};
  width: fit-content;
  margin: 0px;

  @media (max-width: 700px) {
    font-size: 5vw;
  }
`;
