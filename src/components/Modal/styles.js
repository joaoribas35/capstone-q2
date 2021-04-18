import styled from "styled-components";

export const ModalBox = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  color: black;

  top: 0;
`;

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); ;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  color: #0093ee;
`;

export const ModalTitle = styled.h1``;

export const ModalButton = styled.h1`
  color: #0093ee;
  font-size: 22px;
`;
