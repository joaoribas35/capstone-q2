import styled from "styled-components";

export const ContainerPie = styled.div`
  height: 20vw;
  width: 16vw;
  background-color: #2c405a;

  margin: 1vw;

  color: #fff !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 10px;

  border: 1px solid #fff;

  header {
    width: 16vw;
    border-bottom: 1px solid #fff;
    text-align: left;
    padding: 0.5vw;

    h2 {
      font-size: 1.6vw;
      font-weight: 400;
    }
  }

  & > div {
    width: 15vw;
    height: 15vw;
    padding-bottom: 1vw;
  }
`;
