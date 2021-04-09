import styled from "styled-components";

//Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Inputs
export const Input = styled.input`
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 15px;
  border-radius: 8px;
  padding: 10px;
  background-color: #f3f8fe;
  height: 40px;
  width: 200px;
  @media (min-width: 768px) {
    height: 45px;
    width: 265px;
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
  width: 200px;
`;

export const Erro = styled.div`
  color: red;
  height: 15px;
  margin-bottom: 10px;
`;
export const CardLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 2px solid white;
  padding: 2em;
  border-radius: 8px;
  background-color: #2c405a;
`;

export const CardRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  border: 2px solid white;
  padding: 2em;
  border-radius: 8px;
  background-color: #2c405a;
`;

export const Tittle = styled.h1`
  font-family: arial, sans-serif;
  color: #f3f8fe;
`;
