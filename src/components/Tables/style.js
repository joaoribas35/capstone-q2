import styled from "styled-components";

// CELLS

//Table header
export const TableHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 10px;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    width: ${(props) => props.Width};
  }
`;

//Cell rendering more than one item in row
export const SingleLineCell = styled.div`
  width: 95%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 5px 0;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    width: ${(props) => props.Width};
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.Color};
  }
`;

//Cell rendering more than one item in column
export const DoubleLineCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TABLES

export const Tables = styled.div`
  background-color: #2c405a;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 0;
`;
