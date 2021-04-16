import TableAccounting from "../../components/Tables/TableAccounting";
import LineChart from "../../components/LineChart/index";
import { AccountingData, AccountingCharts } from "../styles/style";
import TopBar from "../../components/TopBar";

import * as S from "../styles/style";

const Accounting = () => {
  return (
    <>
      <TopBar />
      <S.Accounting>
        <AccountingData>
          <AccountingCharts>
            <LineChart />
            <LineChart />
            <LineChart />
          </AccountingCharts>
          <TableAccounting />
        </AccountingData>
      </S.Accounting>
    </>
  );
};

export default Accounting;
