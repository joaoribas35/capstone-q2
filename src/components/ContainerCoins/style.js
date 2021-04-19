import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("./img/wallpaper1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
