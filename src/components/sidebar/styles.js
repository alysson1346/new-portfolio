import { Drawer } from "@material-ui/core";
import styled from "styled-components";

export const Ul = styled.ul`
  width: 85%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  padding-left: 15px;
`;

export const DivBtn = styled.div`
  padding-top: 20px;
`;

export const Li = styled.li`
  padding-top: 10px;
  color: ${(props) => props.theme.colors.white};

  button {
    font-weight: 500;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    background-color: #fff0;
    border: none;
    :hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
  }
`;

export const DivCloseSidebar = styled.div`
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};

  button {
    background-color: #fff0;
    border: none;
    color: ${(props) => props.theme.colors.white};
  }
`;
