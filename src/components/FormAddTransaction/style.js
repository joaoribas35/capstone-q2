import styled from "styled-components";

export const TitleTransference = styled.h1`
  color: #0093ee;
  margin-bottom: 1.5rem;

  img {
    height: 1.2rem;
    margin-right: 0.5rem;
  }
`;

export const ResultTransaction = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  label {
    font-size: 0.95rem;
    color: #252525;
  }

  p {
    font-weight: 600;
    color: #252525;
    font-size: 2rem;
  }
`;
