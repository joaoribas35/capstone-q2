import TableAccounting from "../../components/Tables/TableAccounting";
import LineChart from "../../components/LineChart/index";
import { AccountingData, AccountingCharts } from "../styles/style";
import MenuNavBar from "../../components/MenuNavBar";

import * as S from "../styles/style";

const Accounting = () => {
  return (
    <>
      <MenuNavBar />
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
