import PieChart from "../../components/DoughnutChart";
import TableRebalance from "../../components/Tables/TableRebalance";
import {RebalanceData, RebalanceCharts} from '../styles/style'
import * as S from "../styles/style";

const Rebalance = () => {
  return (
    <S.Rebalance>

      <RebalanceData>

        <RebalanceCharts>
          <PieChart />
          <PieChart />
        </RebalanceCharts>

        <TableRebalance />
        
      </RebalanceData>

    </S.Rebalance>
  );
};

export default Rebalance;
