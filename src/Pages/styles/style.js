import styled from "styled-components";

export const LoginPage = styled.div`
  background-image: linear-gradient(to bottom, #031523, #1f4a6b, #133d4d);
  min-height: 100vh;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const TopBarConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const RegisterPage = styled.div`
  background-image: linear-gradient(to bottom, #031523, #1f4a6b, #133d4d);
  min-height: 100vh;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Rebalance = styled.div`
  background-color: #212f41;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const RebalanceData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RebalanceCharts = styled.div`
  display: flex;
`;

export const Accounting = styled.div`
  background-color: #212f41;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const AccountingData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AccountingCharts = styled.div`
  display: flex;
`;

export const Dashboard = styled.div`
  background-color: #212f41;
  padding-right: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #ffffff;
`;

export const DashboardData = styled.div`
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

export const Transactions = styled.div`
  background-color: #212f41;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  display: flex;
  padding-left: 3.5rem;

  min-height: calc(100vh - 50px);

  aside {
    margin: 0 0.5rem;
  }
`;
