import styled from "styled-components";

export const LandingPage = styled.div`
  background-image: url("https://financialtribune.com/sites/default/files/cryptobackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;

  width: 100%;
`;

export const AppSumary = styled.div`
  width: 50%;
  border-radius: 8px;
  background-color: #0005;
  padding: 10px;
  color: white;

  & a {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
  }
  & h1 {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  & p {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const CoinsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 100px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Sumary = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;
