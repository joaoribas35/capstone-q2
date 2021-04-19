import styled, { keyframes } from "styled-components";

const anumationButton = keyframes`
  from{
    width: 0px;
  }
  to{
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  color: #f3f8fe;
  font-size: 1rem;
  border: none;
  padding: 15px;
  margin: 15px;
  width: 200px;
  height: 50px;

  &:hover {
    margin: 15px 15px 14px 15px;

    &:after {
      content: "";
      display: block;
      border-bottom: 1px solid #fff;
      padding-top: 10px;
      margin: 0 auto;

      animation: ${anumationButton} 0.5s forwards;
    }
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    background-color: transparent;
    width: 70px;
    &:hover {
      background-color: #0005;
    }
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const ButtonsContainer = styled.div``;
