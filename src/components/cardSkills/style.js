import styled from "styled-components";

export const Li = styled.li`
  background-color: ${(props) => props.theme.colors.cardSkills};
  width: 30%;
  border-radius: 20px;
  padding: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;

  @media (max-width: 950px) {
    width: 45%;
  }
  @media (max-width: 700px) {
    justify-content: center;
    width: 80%;
  }
`;

export const DivImage = styled.div``;

export const DivContentSkills = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  max-width: 80px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
  margin: 0px;
`;

export const BarPercentage = styled.progress`
  accent-color: #fff;
`;
