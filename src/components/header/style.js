import styled from "styled-components";

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: "100%";
  border-bottom: 3px solid #e0e0e0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 950px) {
    justify-content: center;
    padding-bottom: 10px;
  }
`;

export const Img = styled.img`
  width: auto;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.header};

  :hover {
    font-weight: 500;
    border-bottom: 2px solid ${(props) => props.theme.colors.titleBlack};
  }
`;

export const DivLogo = styled.div``;

export const Divlinks = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const DivBtn = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;
