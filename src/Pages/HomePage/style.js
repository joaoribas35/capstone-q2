import styled, { keyframes } from "styled-components";

export const LandingPage = styled.div`
  background-image: url("./svg/BackgroundImgHome.svg");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
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
  text-align:center;

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
  padding: 2rem;
  width: 80%;
  max-width: 540px;
  border-radius: 4px;
  color: white;
  background-image: linear-gradient(
    to bottom,
    rgb(3 21 35 / 40%),
    rgb(31 74 107 / 40%),
    rgb(19 61 77 / 40%)
  );

  animation: ${animationParagraph} 0.4s forwards;

  img {
    opacity: 0;
    width: 29rem;
    object-fit: cover;
    height: 6rem;

    animation: ${animationTitle} 0.4s 0.8s forwards;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
  }

  & a {
    display: block;
    text-decoration: none;
    margin: 2rem auto 0 auto;
    width: fit-content;
    text-transform: uppercase;
    background: rgb(0 0 0 / 70%);
    padding: 0.8rem;
    border-radius: 4px;
    color: #fff;
    font-weight: 400;
    font-size: 1.2rem;
    transition: 0.3s;

    opacity: 0;
    animation: ${animationTitle} 0.4s 0.3s forwards;

    &:hover {
      transition: 0.3s;

      background: #fff;
      color: #333;
      box-shadow: 0 0 30px 5px rgb(0 0 0 / 70%);
    }
  }

  & h1 {
    text-align: center;
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
