import styled from "styled-components";

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  padding-left: 3vw;
  padding-right: 3vw;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Ul = styled.ul`
  padding: 0px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;
