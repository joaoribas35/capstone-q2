import styled from "styled-components";

export const ContainerPie = styled.div`
  height: 20rem;
  width: 16rem;
  background-color: #2c405a;

  /* margin-top: 20px; */

  color: #fff !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 10px;

  border: 1px solid #fff;

  header {
    width: 100%;
    border-bottom: 1px solid #fff;
    text-align: left;
    padding: 0.5vw;

    h2 {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  & > div {
    width: 95%;
    height: 95%;
    padding-bottom: 0.5rem;
  }
`;
