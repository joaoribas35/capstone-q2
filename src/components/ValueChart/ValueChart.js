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
import { GetPriceContext } from "../../Providers/getPrice";
import formatValue from "../../utils";

const ValueChart = () => {
  const params = useParams();
  const { coinsList } = useContext(CoinsListContext);
  const { myTransactions } = useContext(MyAssetsContext);
  const { getPrice } = useContext(GetPriceContext);
  const [coinData, setCoinData] = useState([]);
  const [coinsQty, setCoinsQty] = useState(0);

  useEffect(() => {
    for (let i in coinsList) {
      if (params.id === Object.values(coinsList[i])[0]) {
        setCoinData(coinsList[i]);
      }
    }

    const resultCoinQty =
      myTransactions[params.id]
        .filter((coin) => coin.type === "buy")
        .reduce((acc, sum) => acc + sum.qty, 0) -
      myTransactions[params.id]
        .filter((coin) => coin.type === "sell")
        .reduce((acc, sub) => acc + sub.qty, 0);

    setCoinsQty(resultCoinQty);
  }, []);

  return (
    <>
      <Chart>
        <ChartHeader>Posição</ChartHeader>
        <CoinIcon src={coinData.image} />
        <Values>
          <h1>{formatValue(coinsQty * getPrice[params.id].brl)}</h1>
          <h2>
            {coinsQty.toFixed(2)}
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
