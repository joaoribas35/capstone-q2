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
  const { myTransactions, myAssets } = useContext(MyAssetsContext);
  const { getPrice } = useContext(GetPriceContext);
  const [coinData, setCoinData] = useState([]);

  const [coinsQty, setCoinsQty] = useState(0);
  const [resultPosition, setResultPosition] = useState({
    currency: 0,
    percentage: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    for (let i in coinsList) {
      if (params.id === Object.values(coinsList[i])[0]) {
        setCoinData(coinsList[i]);
      }
    }

    if (myTransactions[params.id]) {
      const resultCoinQty =
        Number(
          myTransactions[params.id]
            .filter((coin) => coin.type === "buy")
            .reduce((acc, sum) => acc + Number(sum.qty), 0)
        ) -
        Number(
          myTransactions[params.id]
            .filter((coin) => coin.type === "sell")
            .reduce((acc, sub) => acc + Number(sub.qty), 0)
        );

      setCoinsQty(resultCoinQty);

      setLoading(false);
    }
  }, [myTransactions, coinsList, params.id]);

  useEffect(() => {
    if (coinsQty !== 0) {
      const currencyPosition =
        coinsQty * getPrice[params.id].brl -
        coinsQty * myAssets[params.id].avg_cost;

      const percentagePosition =
        (currencyPosition / myAssets[params.id].avg_cost) * coinsQty * 100;

      setResultPosition({
        ...resultPosition,
        currency: currencyPosition,
        percentage: percentagePosition,
      });
    }
  }, [coinsQty]);

  if (loading) {
    return <div></div>;
  } else {
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
              <h2>{formatValue(resultPosition.currency)}</h2>
              <Percentage
                style={
                  resultPosition.currency > 0
                    ? { backgroundColor: "#5dd098", fontWeight: "bold" }
                    : { backgroundColor: "#ea4543", fontWeight: "bold" }
                }
              >
                {resultPosition.percentage.toFixed(2)}%
              </Percentage>
            </div>
          </ProfitLoss>
        </Chart>
      </>
    );
  }
};

export default ValueChart;
