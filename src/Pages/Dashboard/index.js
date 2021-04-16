import TableMyAssets from "../../components/Tables/TableMyAssets";
import { DashboardData } from "../styles/style";
import * as S from "../styles/style";
import PieChart from "../../components/DoughnutChart/index";
import LineChart from "../../components/LineChart/index";

import MenuNavBar from "../../components/MenuNavBar";

import { useContext, useEffect, useState } from "react";
import { MyAssetsContext } from "../../Providers/myAssets";
import { GetPriceContext } from "../../Providers/getPrice";
import { ServerJsonApi } from "../../services/api";

const Dashboard = () => {
  const { myCoins, myTransactions, myAssets } = useContext(MyAssetsContext);
  const { getPrice } = useContext(GetPriceContext);

  for (let i in Object.keys(myAssets)) {
    for (let j in Object.keys(getPrice)) {
      if (Object.keys(myAssets)[i] === Object.keys(getPrice)[j]) {
        myAssets[Object.keys(myAssets)[i]].api_data = Object.values(getPrice)[
          j
        ];
      }
    }
  }

  return (
    <>
      <MenuNavBar />
      <S.Dashboard>
        <DashboardData>
          <PieChart />
          <LineChart />
        </DashboardData>
        <TableMyAssets myAssets={myAssets} />
      </S.Dashboard>
    </>
  );
};

export default Dashboard;
