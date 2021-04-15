import styled from "styled-components";

// CELLS

//Cell rendering more than one item in column
export const DoubleLineCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;

  h2 {
    font-size: 1.3vw;
    font-weight: normal;
    padding: 0 5px;
    text-transform: capitalize;
  }

  h3 {
    font-size: 0.7vw;
    font-weight: normal;
    color: #8796b2;
    text-transform: uppercase;
  }
`;

// TABLES

//Table header
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

export const Tables = styled.div`
  background-color: #2c405a;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 0;
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
