import PieChart from "../../components/DoughnutChart";
import TableRebalance from "../../components/Tables/TableRebalance";
import { RebalanceData, RebalanceCharts } from "../styles/style";
import TopBar from "../../components/TopBar";
import * as S from "../styles/style";

import { useContext, useState } from "react";
import { MyPortfolioContext } from "../../Providers/myPortfolio";
import { MyAssetsContext } from "../../Providers/myAssets";
import { GetPriceContext } from "../../Providers/getPrice";

const Rebalance = () => {
  const { myPortfolio } = useContext(MyPortfolioContext);
  const { myAssets } = useContext(MyAssetsContext);
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

  for (let i in Object.keys(myAssets)) {
    for (let j in Object.keys(myPortfolio)) {
      if (Object.keys(myAssets)[i] === Object.keys(myPortfolio)[j]) {
        myAssets[Object.keys(myAssets)[i]].portfolio = Object.values(
          myPortfolio
        )[j];
      }
    }
  }

  for (let i in Object.keys(myAssets)) {
    for (let j in Object.keys(myPortfolio)) {
      if (Object.keys(myAssets)[i] === Object.keys(myPortfolio)[j]) {
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

  let totalBalance = total.reduce((a, b) => {
    return a + b;
  });

  let Labels = Object.keys(myPortfolio);
  let toBeData = Object.values(myPortfolio);
  let asIsData = [];

  for (let i in Object.keys(myPortfolio)) {
    for (let j in Object.keys(myAssets)) {
      if (Object.keys(myAssets)[i] === Object.keys(myPortfolio)[j]) {
        asIsData.push(
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

  console.log("rebalance", myPortfolio);
  console.log("rebalance", myAssets);

  return (
    <>
      <TopBar />
      <S.Rebalance>
        <RebalanceData>
          <RebalanceCharts>
            <PieChart
              title={"Carteira ideal"}
              inputLabels={Labels}
              inputData={toBeData}
            />
            <PieChart
              title={"Carteira atual"}
              inputLabels={Labels}
              inputData={asIsData}
            />
          </RebalanceCharts>
          <TableRebalance
            myPortfolio={myPortfolio}
            myAssets={myAssets}
            totalBalance={totalBalance}
          />
        </RebalanceData>
      </S.Rebalance>
    </>
  );
};

export default Rebalance;
