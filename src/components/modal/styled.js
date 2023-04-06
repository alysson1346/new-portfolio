import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
  max-width: 600px;
  max-height: 80vh;
  .btns {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  p {
    line-height: 30px;
  }
  overflow-y: scroll;
`;

export const DivCloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 15px;

  button {
    background-color: red;
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;

    :hover {
      background-color: #e10101;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 600px;
  color: ${(props) => props.theme.colors.black};
  border-bottom: 3.5px solid ${(props) => props.theme.colors.titleBlack};
  width: fit-content;
  margin: 0px;
`;
