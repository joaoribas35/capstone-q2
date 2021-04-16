import {
  Chart,
  ChartHeader,
  Values,
  ProfitLoss,
  Percentage,
  CoinIcon,
} from "./styles";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CoinsListContext } from "../../Providers/coinsList";
import { MyAssetsContext } from "../../Providers/myAssets";
import formatValue from "../../utils";

const ValueChart = () => {
  const params = useParams();
  const { coinsList } = useContext(CoinsListContext);
  const { myTransactions } = useContext(MyAssetsContext);
  const [coinData, setCoinData] = useState([]);
  const [sumBuy, setSumBuy] = useState(0);
  const [sumSell, setSumSell] = useState(0);
  const [sumBuyQty, setSumBuyQty] = useState(0);
  const [sumSellQty, setSumSellQty] = useState(0);

  useEffect(() => {
    for (let i in coinsList) {
      if (params.id === Object.values(coinsList[i])[0]) {
        setCoinData(coinsList[i]);
      }
    }

    if (myTransactions[params.id]) {
      const BuyTransaction = myTransactions[params.id].filter(
        (coin) => coin.type === "buy"
      );
      const SellTransaction = myTransactions[params.id].filter(
        (coin) => coin.type === "sell"
      );

      const sum = BuyTransaction.reduce(
        (acc, sum) => acc + sum.cost * sum.qty,
        0
      );

      const sumQty = BuyTransaction.reduce((acc, sum) => acc + sum.qty, 0);

      const sub = SellTransaction.reduce(
        (acc, sub) => acc + sub.cost * sub.qty,
        0
      );

      const subQty = SellTransaction.reduce((acc, sub) => acc + sub.qty, 0);

      setSumBuy(sum);
      setSumBuyQty(sumQty);
      setSumSell(sub);
      setSumSellQty(subQty);
    }
    // }
  }, [myTransactions, coinsList, params.id]);

  return (
    <>
      <Chart>
        <ChartHeader>Posição</ChartHeader>
        <CoinIcon src={coinData.image} />
        <Values>
          <h1>{formatValue(sumBuy - sumSell)}</h1>
          <h2>
            {(sumBuyQty - sumSellQty).toFixed(2)}
            {coinData.symbol}
          </h2>
        </Values>
        <ProfitLoss>
          <h1>Lucro/Prejuizo</h1>
          <div>
            <h2>R$12,00</h2>
            <Percentage style={{ backgroundColor: "green" }}>2,5%</Percentage>
          </div>
        </ProfitLoss>
      </Chart>
    </>
  );
};

export default ValueChart;
