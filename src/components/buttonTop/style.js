import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.btn1};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
`;

export const Arrow = styled.span`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;
