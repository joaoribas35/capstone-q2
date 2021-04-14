import {
  Chart,
  ChartHeader,
  Values,
  ProfitLoss,
  Percentage,
  CoinIcon,
} from "./styles";
import { useParams } from "react-router-dom";

const ValueChart = () => {
  const params = useParams();

  console.log("Params ID Chart", params.id);
  return (
    <Chart>
      <ChartHeader>Posição</ChartHeader>
      <CoinIcon
        src={
          "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
        }
      />
      <Values>
        <h1>R$3750,00</h1>
        <h2>0,351 BTC</h2>
      </Values>
      <ProfitLoss>
        <h1>Lucro/Prejuizo</h1>
        <div>
          <h2>R$12,00</h2>
          <Percentage style={{ backgroundColor: "green" }}>2,5%</Percentage>
        </div>
      </ProfitLoss>
    </Chart>
  );
};

export default ValueChart;
