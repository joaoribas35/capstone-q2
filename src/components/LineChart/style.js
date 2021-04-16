import styled from "styled-components";
import { ContainerPie } from "../DoughnutChart/style";

export const ConstaineLine = styled(ContainerPie)`
  height: 50%;
  margin-top: 10px;

  display: flex;

  & > div {
    background-color: #2e3b5b;
    overflow-x: scroll;
    /* width: 14vw;
    height: 20vw; */

    canvas {
      width: 14vw !important;
      height: 14vw !important;
    }
  }
  h2 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Porcent = styled.div`
  border-radius: 10px;
  background: #008000;
  padding: 0.5vw;

  font-size: 0.8vw;

  display: flex;
  align-items: center;
  height: 1.1rem;
`;

export const Dados = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 1vw;
  background-color: #2c405a;

  p:first-child {
    font-size: 16px;
  }

  p:nth-child(2) {
    font-size: 0.8vw;
    color: #008000;
    font-weight: 600;

    text-align: left;
  }
`;
