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
    is_national: true,
  },
  {
    id: 2,
    coin: "bitcoin",
    type: "buy",
    qty: 0.3,
    cost: 190000,
    date: "13-02-2021",
    is_national: true,
  },
  {
    id: 3,
    coin: "bitcoin",
    type: "buy",
    qty: 0.1,
    cost: 210000,
    date: "23-02-2021",
    is_national: true,
  },
  {
    id: 4,
    coin: "bitcoin",
    type: "sell",
    qty: 0.4,
    cost: 250000,
    date: "05-03-2021",
    is_national: true,
  },
  {
    id: 5,
    coin: "bitcoin",
    type: "buy",
    qty: 0.2,
    cost: 180000,
    date: "15-03-2021",
    is_national: true,
  },
  {
    id: 6,
    coin: "ethereum",
    type: "buy",
    qty: 0.5,
    cost: 1200,
    date: "03-02-2021",
    is_national: false,
  },
  {
    id: 7,
    coin: "ethereum",
    type: "buy",
    qty: 0.4,
    cost: 1300,
    date: "13-02-2021",
    is_national: false,
  },
  {
    id: 8,
    coin: "ethereum",
    type: "buy",
    qty: 0.3,
    cost: 1400,
    date: "23-02-2021",
    is_national: false,
  },
  {
    id: 9,
    coin: "ethereum",
    type: "sell",
    qty: 0.2,
    cost: 1500,
    date: "05-03-2021",
    is_national: false,
  },
  {
    id: 10,
    coin: "ethereum",
    type: "buy",
    qty: 0.1,
    cost: 1600,
    date: "15-03-2021",
    is_national: false,
  },
  {
    id: 11,
    coin: "litecoin",
    type: "buy",
    qty: 1,
    cost: 600,
    date: "15-03-2021",
    is_national: false,
  },
  {
    id: 12,
    coin: "cardano",
    type: "buy",
    qty: 1,
    cost: 600,
    date: "15-03-2021",
    is_national: false,
  },
  {
    id: 12,
    coin: "cardano",
    type: "sell",
    qty: 0.5,
    cost: 1200,
    date: "15-03-2021",
    is_national: false,
  },
];

export const HistoricalDataContext = createContext();

export const HistoricalDataProvider = ({ children }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    let coins = [];
    for (let i in mockTransactions) {
      coins.push(mockTransactions[i].coin);
    }

    let coinsFilter = coins.filter(
      (item, pos, self) => self.indexOf(item) === pos
    );

    for (let i in coinsFilter) {
      const response = await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coinsFilter[i]}/market_chart/range?vs_currency=brl&from=1609642800&to=1618542000`
        )
        .then((response) =>
          setHistoricalData([...historicalData, response.data])
        )
        .catch((error) => console.log(error));
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  console.log("historicalData", historicalData);

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
      <HistoricalDataContext.Provider value={{ historicalData }}>
        {children}
      </HistoricalDataContext.Provider>
    );
  }
};
