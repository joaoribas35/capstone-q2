import { SymbolStyle } from "./style";
import { useContext, useEffect, useState } from "react";
import { CoinsListContext } from "../../../Providers/coinsList";

const Symbol = ({ coin }) => {
  const { coinsList } = useContext(CoinsListContext);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    for (let i in coinsList) {
      if (coin === Object.values(coinsList[i])[0]) {
        setCoinData(coinsList[i]);
      }
    }
  }, []);

  console.log("coinsListSymbol", coinsList);

  console.log("symbol", coinData);
  return (
    <SymbolStyle>
      <img alt={coinData.name} src={coinData.image} width="20px" />
      <h2>{coinData.name}</h2>
      <h3>{coinData.symbol}</h3>
    </SymbolStyle>
  );
};

export default Symbol;
