import TableAccounting from "../../components/Tables/TableAccounting";
import LineChart from "../../components/LineChart/index";
import { AccountingData, AccountingCharts } from "../styles/style";
import MenuNavBar from "../../components/MenuNavBar";
import { useContext } from "react";
import { MyAssetsContext } from "../../Providers/myAssets";

import * as S from "../styles/style";

const Accounting = () => {
  const { myCoins, myAssets } = useContext(MyAssetsContext);

  let totalizer = {
    janeiro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    fevereiro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    março: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    abril: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    maio: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    junho: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    julho: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    agosto: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    setembro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    outubro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    novembro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    dezembro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
  };

  let totals = {
    janeiro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    fevereiro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    março: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    abril: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    maio: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    junho: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    julho: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    agosto: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    setembro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    outubro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    novembro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
    dezembro: {
      profit_loss: [],
      sum_sell: [],
      trades: [],
    },
  };

  let month = Object.keys(myAssets.bitcoin.accounting);

  for (let i in month) {
    for (let j in Object.keys(totalizer)) {
      for (let k in myCoins) {
        if (month[i] === Object.keys(totalizer)[j]) {
          totalizer[month[i]].profit_loss.push(
            myAssets[myCoins[k]].accounting[month[i]].profit_loss
          );

          totalizer[month[i]].sum_sell.push(
            myAssets[myCoins[k]].accounting[month[i]].sum_sell
          );

          totalizer[month[i]].trades.push(
            myAssets[myCoins[k]].accounting[month[i]].trades
          );
        }
      }
    }
  }

  for (let j in month) {
    for (let i in totalizer[month[j]].profit_loss) {
      if (totalizer[month[j]].profit_loss[i][0] !== undefined) {
        totals[month[j]].profit_loss.push(
          totalizer[month[j]].profit_loss[i][0]
        );
      }
    }
  }

  for (let j in month) {
    for (let i in totalizer[month[j]].sum_sell) {
      if (totalizer[month[j]].sum_sell[i][0] !== undefined) {
        totals[month[j]].sum_sell.push(totalizer[month[j]].sum_sell[i][0]);
      }
    }
  }

  for (let j in month) {
    for (let i in totalizer[month[j]].trades) {
      if (totalizer[month[j]].trades[i][0] !== undefined) {
        totals[month[j]].trades.push(totalizer[month[j]].trades[i][0]);
      }
    }
  }

  for (let i in month) {
    for (let j in Object.keys(totals)) {
      if (month[i] === Object.keys(totals)[j]) {
        if (totals[month[i]].profit_loss.length !== 0) {
          totals[month[i]].profit_loss = totals[month[i]].profit_loss.reduce(
            (a, b) => {
              return a + b;
            }
          );
        } else {
          totals[month[i]].profit_loss = 0;
        }

        if (totals[month[i]].sum_sell.length !== 0) {
          totals[month[i]].sum_sell = totals[month[i]].sum_sell.reduce(
            (a, b) => {
              return a + b;
            }
          );
        } else {
          totals[month[i]].sum_sell = 0;
        }

        if (totals[month[i]].trades.length !== 0) {
          totals[month[i]].trades = totals[month[i]].trades.reduce((a, b) => {
            return a + b;
          });
        } else {
          totals[month[i]].trades = 0;
        }
      }
    }
  }

  console.log("accounting", totals);

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
          <TableAccounting totals={totals} />
        </AccountingData>
      </S.Accounting>
    </>
  );
};

export default Accounting;
