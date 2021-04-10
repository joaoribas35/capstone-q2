import styled from "styled-components";

export const SymbolStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.Color};
    padding: 0 2px;
  }
`;
