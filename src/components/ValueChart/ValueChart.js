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
  const [averageCost, setAverageCost] = useState(0);
  const [profit_loss, setProfit_loss] = useState({type: "",value: 0, percentage:0})

  useEffect(() => {
    for (let i in coinsList) {
      if (params.id === Object.values(coinsList[i])[0]) {
        setCoinData(coinsList[i]);
      }
    }
    // .api_data.brl
    const resultCoinQty =
      myTransactions[params.id]
        .filter((coin) => coin.type === "buy")
        .reduce((acc, sum) => acc + sum.qty, 0) -
      myTransactions[params.id]
        .filter((coin) => coin.type === "sell")
        .reduce((acc, sub) => acc + sub.qty, 0);

    setCoinsQty(resultCoinQty);

    const resultAverageCost =
      myTransactions[params.id]
        .reduce((acc, tran) => acc + tran.cost, 0)/myTransactions[params.id].length

    setAverageCost(resultAverageCost);
    defineProfit_loss()
  }, []);

  const defineProfit_loss = () => {
    const averageValue = coinsQty * averageCost
    const currentValue = coinsQty * myAssets[params.id].api_data.brl

    if(currentValue < averageValue){
      setProfit_loss(
        {type: "loss",
        value: formatValue(currentValue - averageValue), 
        percentage: Number(String(averageValue/currentValue*100).split(".")[0])})
    }else{
      setProfit_loss(
        {type: "profit",
        value: formatValue(currentValue - averageValue), 
        percentage: Number(String(currentValue/averageValue*100).split(".")[0])})
    }
  }

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
            <h2>{profit_loss.value}</h2>
            {profit_loss.type === "profit" ?
              <Percentage style={{ backgroundColor: "green" }}>{profit_loss.percentage}%</Percentage>
            :
              <Percentage style={{ backgroundColor: "red" }}>-{profit_loss.percentage}%</Percentage>
            }   
          </div>
        </ProfitLoss>
      </Chart>
    </>
  );
};

export default ValueChart;
