import styled from "styled-components";

export const ToggleBtn = styled.div`
  width: 1.8rem;
  height: 0.2rem;
  background-color: #fff;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: #fff;

    transform: translateY(-13px);
  }

  &::before {
    transform: translateY(10px);
  }
`;
