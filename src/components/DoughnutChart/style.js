import styled from "styled-components";

export const ContainerPie = styled.div`
  height: 23.8rem;
  width: 18.75rem;
  background-color: #2c405a;
  margin: 0 auto;

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
    padding: 0.5rem;

    h2 {
      font-weight: 400;
    }
  }

  & > div {
    width: 15.75rem;
    height: 20.75rem;
  }
`;
