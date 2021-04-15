import styled from "styled-components";

export const Coin = styled.div`
  background-color: #0005;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const P = styled.p`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const Price = styled.p`
  font-size: 2rem;
`;

export const Img = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;

export const CoinsContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Div = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
