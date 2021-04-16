import styled, { keyframes } from "styled-components";

export const LandingPage = styled.div`
  background-image: linear-gradient(to bottom, #031523, #1f4a6b, #133d4d);
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const animationParagraph = keyframes`
  from{
    opacity:0;
    transform: translateY(-20px);
  }
  to{
    opacity:initial;
    transform: initial;
  }
`;

const animationTitle = keyframes`
  from{
    opacity:0;
    transform: translateX(-20px);
  }
  to{
    opacity:initial;
    transform: initial;
  }
`;

export const AppSumary = styled.div`
  width: 50%;
  border-radius: 8px;
  background-color: #0005;
  padding: 10px;
  color: white;

  height: 15rem;

  animation: ${animationParagraph} 0.4s forwards;

  & a {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
  }
  & h1 {
    opacity: 0;
    font-size: 3rem;
    animation: ${animationTitle} 0.4s 0.8s forwards;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  & p {
    opacity: 0;
    font-size: 1.2rem;
    margin-top: 1.8rem;
    animation: ${animationParagraph} 0.4s 0.5s forwards;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: initial;
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
  margin-top: 120px;
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 70px;
    align-items: initial;
  }
`;
