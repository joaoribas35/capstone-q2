import styled from "styled-components";

export const ContainerBtn = styled.div`
  height: 100%;
  width: 3.5rem;
  border-right: 1px solid #fff;

  position: absolute;
  z-index: 10;
  left: 0px;
  top: 0px;
  background: #161b2e;

  display: flex;
  justify-content: center;

  padding-top: 2rem;

  & > div {
    cursor: pointer;
    height: 1.8rem;

    display: flex;
    align-items: center;
  }
`;
