import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
const mockTransactions = [
  {
    id: 1,
    coin: "bitcoin",
    type: "buy",
    qty: 0.3,
    cost: 180000,
    date: "03-02-2021",
    is_national: "yes",
  },
  {
    id: 2,
    coin: "bitcoin",
    type: "buy",
    qty: 0.3,
    cost: 190000,
    date: "13-02-2021",
    is_national: "yes",
  },
  {
    id: 3,
    coin: "bitcoin",
    type: "buy",
    qty: 0.1,
    cost: 210000,
    date: "23-02-2021",
    is_national: "yes",
  },
  {
    id: 4,
    coin: "bitcoin",
    type: "sell",
    qty: 0.4,
    cost: 250000,
    date: "05-03-2021",
    is_national: "yes",
  },
  {
    id: 5,
    coin: "bitcoin",
    type: "buy",
    qty: 0.2,
    cost: 180000,
    date: "15-03-2021",
    is_national: "yes",
  },
  {
    id: 6,
    coin: "ethereum",
    type: "buy",
    qty: 0.5,
    cost: 1200,
    date: "03-02-2021",
    is_national: "no",
  },
  {
    id: 7,
    coin: "ethereum",
    type: "buy",
    qty: 0.4,
    cost: 1300,
    date: "13-02-2021",
    is_national: "no",
  },
  {
    id: 8,
    coin: "ethereum",
    type: "buy",
    qty: 0.3,
    cost: 1400,
    date: "23-02-2021",
    is_national: "no",
  },
  {
    id: 9,
    coin: "ethereum",
    type: "sell",
    qty: 0.2,
    cost: 1500,
    date: "05-03-2021",
    is_national: "no",
  },
  {
    id: 10,
    coin: "ethereum",
    type: "buy",
    qty: 0.1,
    cost: 1600,
    date: "15-03-2021",
    is_national: "no",
  },
  {
    id: 11,
    coin: "litecoin",
    type: "buy",
    qty: 1,
    cost: 600,
    date: "15-03-2021",
    is_national: "no",
  },
  {
    id: 12,
    coin: "cardano",
    type: "buy",
    qty: 1,
    cost: 600,
    date: "15-03-2021",
    is_national: "no",
  },
  {
    id: 12,
    coin: "cardano",
    type: "sell",
    qty: 0.5,
    cost: 1200,
    date: "15-03-2021",
    is_national: "no",
  },
];

export const GetPriceContext = createContext();

export const GetPriceProvider = ({ children }) => {
  const [getPrice, setGetPrice] = useState({});
  const [loading, setLoading] = useState(true);

  async function loadData() {
    let coins = [];
    for (let i in mockTransactions) {
      coins.push(mockTransactions[i].coin);
    }

    let coinsFilter = coins.filter(
      (item, pos, self) => self.indexOf(item) === pos
    );

    let string = coinsFilter.join("%2C");

    const response = await axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${string}&vs_currencies=brl&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false`
      )
      .then((response) => setGetPrice(response.data))
      .catch((error) => console.log(error));

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div>
        {setTimeout(function () {
          <div>
            <Loading />
          </div>;
        }, 10000)}
      </div>
    );
  } else {
    return (
      <GetPriceContext.Provider value={{ getPrice }}>
        {children}
      </GetPriceContext.Provider>
    );
  }
};
