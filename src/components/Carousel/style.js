import styled from "styled-components";

export const Coin = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 400px;
  margin: 20px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const P = styled.p`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const Price = styled.p`
  font-size: 2rem;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const CoinsContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Div = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
