import styled from "styled-components";

export const ContainerPie = styled.div`
  height: 28vw;
  width: 20vw;
  background-color: #2c405a;

  color: #fff !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 10px;

  border: 1px solid #fff;

  header {
    width: 20vw;
    border-bottom: 1px solid #fff;
    text-align: left;
    padding: 1vw;

    h2 {
      font-size: 2.5vw;
      font-weight: 400;
    }
  }

  & > div {
    width: 20vw;
    height: 25vw;
    padding-bottom: 3vw;
  }
`;
