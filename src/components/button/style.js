import styled from "styled-components";

export const ButtonComponent = styled.button`
  background-color: ${(props) =>
    props.color === "btn1"
      ? props.theme.colors.btn1
      : props.color === "btn2"
      ? props.theme.colors.btn2
      : props.theme.colors.btn3};
  color: #fff;
  padding: 10px;
  border-radius: 20px;
  border: none;

  :hover {
    cursor: pointer;
    filter: brightness(92%);
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
