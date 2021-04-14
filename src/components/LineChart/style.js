import styled from "styled-components";
import { ContainerPie } from "../DoughnutChart/style";

export const ConstaineLine = styled(ContainerPie)`
  height: 50%;
  margin: 2vw;

  display: flex;

  & > div {
    background-color: #2e3b5b;
    width: 18vw;
    height: 30vw;

    canvas {
      width: 18vw!important;
      height: 23vw !important;
    }
  }

  h2{
    font-size: 2.5vw
  }
`;

export const Porcent = styled.div`
  border-radius: 10px;
  background: #008000;
  padding: 0.1vw;

  font-size: 1vw;

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
    font-size: 2.7vw;
  }

  p:nth-child(2) {
    font-size: 1.2vw;
    color: #008000;
    font-weight: 600;

    text-align: left;
  }
`;
