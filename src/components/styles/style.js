import styled, { keyframes } from "styled-components";

const animationMessage = keyframes`
  from{
    opacity: 0;
    transform: translateY(30px);
  }
  top{
    opacity: initial;
    transform: initial;
  }
`;

export const MessageSucess = styled.div`
  position: absolute;
  left: 56px;
  bottom: 56px;

  background-color: #00695c;
  padding: 1rem;
  border-radius: 4px;
  color: #fff;

  animation: ${animationMessage} 0.3s forwards;
`;

export const MessageError = styled(MessageSucess)`
  background-color: red;
`;

const animationCard = keyframes`
 from{
    opacity:0;
    transform: translateY(-30px);
  }
  to{
    opacity:initial;
    transform: initial;
  }`;

//Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
`;

export const ContainerInput = styled.div`
  width: 100%;

  label,
  p {
    font-size: 0.95rem;
    color: #252525;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  background-color: #f3f8fe;
  height: 40px;
  width: 100%;

  &::placeholder {
    color: #252525;
  }
`;

//Button Submit Login/Register
export const Button = styled.button`
  border: none;
  outline: none;
  margin-top: 15px;
  padding: 0;
  border-radius: 8px;
  background-color: #0093ee;
  color: #f3f8fe;
  height: 40px;
  width: 100%;

  transition: 0.3s;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #177bb9;
  }
`;

export const Erro = styled.div`
  color: red;
  height: 15px;
  margin: 0 0 0.5rem 0;
  width: 100%;
  text-align: left;
`;

export const CardLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  border: 2px solid white;
  padding: 2em;
  border-radius: 8px;
  background-color: rgb(44 64 90 / 90%);

  position: relative;

  animation: ${animationCard} 0.6s forwards;

  & h3,
  a {
    margin-top: 10px;
    color: #fff;
  }
  & a {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const CardRegister = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  border: 2px solid white;
  padding: 2em;
  border-radius: 8px;
  background-color: rgb(44 64 90 / 90%);

  position: relative;

  animation: ${animationCard} 0.6s forwards;

  @media (max-width: 768px) {
    margin-top: 50px;
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

export const Tittle = styled.h1`
  font-family: arial, sans-serif;
  color: #f3f8fe;
  margin-bottom: 1.5rem;
  opacity: 0;

  animation: ${animationTitle} 0.4s 0.1s forwards;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  background-color: #f3f8fe;
  height: 40px;
  width: 100%;

  color: #252525;
`;
