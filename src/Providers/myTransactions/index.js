import { createContext, useEffect, useState } from "react";

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

export const MyTransactionsContext = createContext();

export const MyTransactionsProvider = ({ children }) => {
  const [myTransactions, setMyTransactions] = useState([]);

  useEffect(() => {
    let coins = [];
    for (let i in mockTransactions) {
      coins.push(mockTransactions[i].coin);
    }

    let coinsFilter = coins.filter(
      (item, pos, self) => self.indexOf(item) === pos
    );

    // let myTransactions = {};

    for (let i in coinsFilter) {
      if (myTransactions[coinsFilter[i]] === undefined) {
        myTransactions[coinsFilter[i]] = [];
      }
    }

    for (let i in mockTransactions) {
      for (let j in Object.keys(myTransactions))
        if (mockTransactions[i].coin === Object.keys(myTransactions)[j]) {
          myTransactions[mockTransactions[i].coin].push(mockTransactions[i]);
        }
    }

    setMyTransactions(myTransactions);
  }, []);

  return (
    <MyTransactionsContext.Provider value={{ myTransactions }}>
      {children}
    </MyTransactionsContext.Provider>
  );
};
