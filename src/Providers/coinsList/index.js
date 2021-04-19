import { createContext, useState, useEffect } from "react";

const coinsListArr = [
  {
    coin_id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
  },
  {
    coin_id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
  },
  {
    coin_id: "binancecoin",
    symbol: "bnb",
    name: "Binance Coin",
    image:
      "https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png?1547034615",
  },
  {
    coin_id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png?1605778731",
  },
  {
    coin_id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
  },
  {
    coin_id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/thumb/cardano.png?1547034860",
  },
  {
    coin_id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    image:
      "https://assets.coingecko.com/coins/images/12171/thumb/aJGBjJFU_400x400.jpg?1597804776",
  },
  {
    coin_id: "uniswap",
    symbol: "uni",
    name: "Uniswap",
    image:
      "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604",
  },
  {
    coin_id: "litecoin",
    symbol: "ltc",
    name: "Litecoin",
    image:
      "https://assets.coingecko.com/coins/images/2/thumb/litecoin.png?1547033580",
  },
  {
    coin_id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700",
  },
  {
    coin_id: "stellar",
    symbol: "xlm",
    name: "Stellar",
    image:
      "https://assets.coingecko.com/coins/images/100/thumb/Stellar_symbol_black_RGB.png?1552356157",
  },
  {
    coin_id: "bitcoin-cash",
    symbol: "bch",
    name: "Bitcoin Cash",
    image:
      "https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png?1594689492",
  },
  {
    coin_id: "theta-token",
    symbol: "theta",
    name: "Theta Network",
    image:
      "https://assets.coingecko.com/coins/images/2538/thumb/theta-token-logo.png?1548387191",
  },
  {
    coin_id: "filecoin",
    symbol: "fil",
    name: "Filecoin",
    image:
      "https://assets.coingecko.com/coins/images/12817/thumb/filecoin.png?1602753933",
  },
  {
    coin_id: "usd-coin",
    symbol: "usdc",
    name: "USD Coin",
    image:
      "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
  },
  {
    coin_id: "tron",
    symbol: "trx",
    name: "TRON",
    image:
      "https://assets.coingecko.com/coins/images/1094/thumb/tron-logo.png?1547035066",
  },
  {
    coin_id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png?1547792256",
  },
  {
    coin_id: "eos",
    symbol: "eos",
    name: "EOS",
    image:
      "https://assets.coingecko.com/coins/images/738/thumb/eos-eos-logo.png?1547034481",
  },
  {
    coin_id: "monero",
    symbol: "xmr",
    name: "Monero",
    image:
      "https://assets.coingecko.com/coins/images/69/thumb/monero_logo.png?1547033729",
  },
  {
    coin_id: "binance-usd",
    symbol: "busd",
    name: "Binance USD",
    image:
      "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png?1568947766",
  },
  {
    coin_id: "tezos",
    symbol: "xtz",
    name: "Tezos",
    image:
      "https://assets.coingecko.com/coins/images/976/thumb/Tezos-logo.png?1547034862",
  },
  {
    coin_id: "neo",
    symbol: "neo",
    name: "NEO",
    image:
      "https://assets.coingecko.com/coins/images/480/thumb/NEO_512_512.png?1594357361",
  },
  {
    coin_id: "nem",
    symbol: "xem",
    name: "NEM",
    image:
      "https://assets.coingecko.com/coins/images/242/thumb/NEM_Logo_256x256.png?1598687029",
  },
  {
    coin_id: "chiliz",
    symbol: "chz",
    name: "Chiliz",
    image:
      "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png?1561970540",
  },
  {
    coin_id: "zilliqa",
    symbol: "zil",
    name: "Zilliqa",
    image:
      "https://assets.coingecko.com/coins/images/2687/thumb/Zilliqa-logo.png?1547036894",
  },
  {
    coin_id: "icon",
    symbol: "icx",
    name: "ICON",
    image:
      "https://assets.coingecko.com/coins/images/1060/thumb/icon-icx-logo.png?1547035003",
  },
  {
    coin_id: "true-usd",
    symbol: "tusd",
    name: "TrueUSD",
    image:
      "https://assets.coingecko.com/coins/images/3449/thumb/TUSD.png?1559172762",
  },
  {
    coin_id: "dash",
    symbol: "dash",
    name: "Dash",
    image:
      "https://assets.coingecko.com/coins/images/19/thumb/dash-logo.png?1548385930",
  },
  {
    coin_id: "decred",
    symbol: "dcr",
    name: "Decred",
    image:
      "https://assets.coingecko.com/coins/images/329/thumb/decred.png?1547034093",
  },
  {
    coin_id: "vechain",
    symbol: "vet",
    name: "VeChain",
    image:
      "https://assets.coingecko.com/coins/images/1167/thumb/VeChain-Logo-768x725.png?1547035194",
  },
];

export const CoinsListContext = createContext();

export const CoinsListProvider = ({ children }) => {
  const [coinsList, setCoinsList] = useState([]);

  useEffect(() => {
    setCoinsList(coinsListArr);
  }, []);

  return (
    <CoinsListContext.Provider value={{ coinsList }}>
      {children}
    </CoinsListContext.Provider>
  );
};
