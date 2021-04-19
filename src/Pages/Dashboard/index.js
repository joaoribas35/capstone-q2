import TableMyAssets from "../../components/Tables/TableMyAssets";
import { DashboardData } from "../styles/style";
import * as S from "../styles/style";
import PieChart from "../../components/DoughnutChart/index";
import LineChart from "../../components/LineChart/index";

import TopBar from "../../components/TopBar";

import { useContext, useEffect, useState } from "react";
import { MyAssetsContext } from "../../Providers/myAssets";
import { GetPriceContext } from "../../Providers/getPrice";

const Dashboard = () => {
  const { myCoins, myAssets } = useContext(MyAssetsContext);
  const { getPrice } = useContext(GetPriceContext);

  const [Labels, setLabel] = useState({});
  const [asIsData, setAsIsData] = useState([]);

  for (let i in Object.keys(myAssets)) {
    for (let j in Object.keys(getPrice)) {
      if (Object.keys(myAssets)[i] === Object.keys(getPrice)[j]) {
        myAssets[Object.keys(myAssets)[i]].api_data = Object.values(getPrice)[
          j
        ];
      }
    }
  }

  useEffect(() => {
    if (myCoins && myAssets) {
      for (let i in Object.keys(myAssets)) {
        for (let j in myCoins) {
          if (Object.keys(myAssets)[i] === myCoins[j]) {
            myAssets[Object.keys(myAssets)[i]].balance =
              myAssets[Object.keys(myAssets)[i]].api_data.brl *
              myAssets[Object.keys(myAssets)[i]].sum_qty;
          }
        }
      }

      let total = [];
      for (let i in Object.values(myAssets)) {
        total.push(Object.values(myAssets)[i].balance);
      }
      let totalBalance = 0;

      if (total.length) {
        totalBalance = total.reduce((a, b) => {
          return a + b;
        });
      }

      setLabel(myCoins);

      let soma = [];

      for (let i in myCoins) {
        for (let j in Object.keys(myAssets)) {
          if (Object.keys(myAssets)[i] === myCoins[j]) {
            soma.push(
              (
                ((myAssets[Object.keys(myAssets)[i]].api_data.brl *
                  myAssets[Object.keys(myAssets)[i]].sum_qty) /
                  totalBalance) *
                100
              ).toFixed(0)
            );
          }
        }
      }

      setAsIsData(soma);
    }
  }, [myCoins, myAssets, getPrice]);

  let profitLossCoin = [];

  for (let i in myCoins) {
    for (let j in Object.keys(myAssets)) {
      if (Object.keys(myAssets)[i] === myCoins[j]) {
        profitLossCoin.push(
          (myAssets[myCoins[i]].api_data.brl - myAssets[myCoins[i]].avg_cost) *
            myAssets[myCoins[i]].sum_qty
        );
      }
    }
  }

  let profitLossSum = profitLossCoin.reduce((a, b) => {
    return a + b;
  });

  return (
    <>
      <TopBar />
      <S.Dashboard>
        <DashboardData>
          <PieChart
            title={"Minha carteira"}
            inputLabels={Labels}
            inputData={asIsData}
          />
          <LineChart
            inputData={profitLossCoin}
            labelData={myCoins}
            sum={profitLossSum}
            title={"Lucro/Prejuízo"}
          />
        </DashboardData>

        <TableMyAssets myAssets={myAssets} />
      </S.Dashboard>
    </>
  );
};

export default Dashboard;
