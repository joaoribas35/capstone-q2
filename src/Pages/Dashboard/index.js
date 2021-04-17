import TableMyAssets from "../../components/Tables/TableMyAssets";
import { DashboardData } from "../styles/style";
import * as S from "../styles/style";
import PieChart from "../../components/DoughnutChart/index";
import LineChart from "../../components/LineChart/index";

import TopBar from "../../components/TopBar";
import { motion } from "framer-motion";

import { useContext, useEffect, useState } from "react";
import { MyAssetsContext } from "../../Providers/myAssets";
import { GetPriceContext } from "../../Providers/getPrice";

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

  let totalBalance = total.reduce((a, b) => {
    return a + b;
  });

  let Labels = myCoins;
  let asIsData = [];

  for (let i in myCoins) {
    for (let j in Object.keys(myAssets)) {
      if (Object.keys(myAssets)[i] === myCoins[j]) {
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

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-90%",
    },
  };

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
          <LineChart inputLabels={Labels} inputData={asIsData} />
        </DashboardData>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
        >
          <TableMyAssets myAssets={myAssets} />
        </motion.div>
      </S.Dashboard>
    </>
  );
};

export default Dashboard;
