import styled, { keyframes } from "styled-components";

export const DoubleLineCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;

  h2 {
    font-size: 16px;
    font-weight: normal;
    padding: 0 5px;
    text-transform: capitalize;
  }

  h3 {
    font-size: 14px;
    font-weight: normal;
    color: #8796b2;
    text-transform: uppercase;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  margin-bottom: 0.3vw;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const animationTable = keyframes`
  from{
    opacity:0;
    transform: translateX(40px);
  }
  top{
    opacity:initial;
    transform: initial;
  }
`;

export const Tables = styled.div`
  height: fit-content;
  background-color: #2c405a;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 0;

  width: 100%;
  max-width: 900px;

  margin-bottom: 2rem;

  animation: ${animationTable} 0.2s ease-in;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  th,
  td {
    text-align: center;
    border-bottom: 1px solid white;
    padding: 0.5vw;
  }
`;

export const Div = styled.div`
  display: flex;
  & h1 {
    margin-right: 10px;
  }
`;

export const Capitalize = styled.td`
  text-transform: capitalize;
`;

export const ActionsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    margin: 0 5px;
  }
`;
