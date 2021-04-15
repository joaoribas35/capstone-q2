import styled from "styled-components";

export const Button = styled.button`
  background-color: #0093ee;
  outline: none;
  color: #f3f8fe;
  font-size: 1rem;
  border: none;
  margin: 15px;
  width: 200px;
  height: 50px;
  border-radius: 10px;

  &:hover {
    background-color: #177bb9;
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
