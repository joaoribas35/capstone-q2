import styled from "styled-components";
import { ContainerPie } from "../DoughnutChart/style";

export const ConstaineLine = styled(ContainerPie)`
  height: initial;
  margin-bottom: 4rem;

  display: flex;

  & > div {
    background-color: #2e3b5b;
    height: initial;
  }
`;

export const Porcent = styled.div`
  border-radius: 10px;
  background: #008000;
  padding: 0.1rem;

  font-size: 0.8rem;

  display: flex;
  align-items: center;
  height: 1.1rem;
`;

export const Dados = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0.8rem 0 1rem 0;
  background-color: #2c405a;

  p:first-child {
    font-size: 1.4rem;
  }

  p:nth-child(2) {
    font-size: 0.8rem;
    color: #008000;
    font-weight: 600;

    text-align: left;
  }
`;

export const SpaceFinish = styled.div`
  height: 30px;
`;
