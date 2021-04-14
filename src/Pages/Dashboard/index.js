import TableMyAssets from "../../components/Tables/TableMyAssets";
import {DashboardData} from '../styles/style'
import * as S from "../styles/style";
import PieChart from '../../components/DoughnutChart/index'
import LineChart from '../../components/LineChart/index'

const Dashboard = () => {
  return (
    <S.Dashboard>
      <DashboardData>
        <PieChart/>
        <LineChart/>
      </DashboardData>
      <TableMyAssets />
    </S.Dashboard>
  );
};

export default Dashboard;
