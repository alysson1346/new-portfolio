import styled from "styled-components";

export const Div = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.footer};
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: flex-start;
  justify-content: center;
  .contact {
    display: flex;
    flex-direction: column;
  }
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  margin: 0px;
`;
export const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  :hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
