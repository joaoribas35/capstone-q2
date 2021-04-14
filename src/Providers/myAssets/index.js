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

export const MyAssetsContext = createContext();

export const MyAssetsProvider = ({ children }) => {
  const [myAssets, setMyAssets] = useState({});

  useEffect(() => {
    let coins = [];
    for (let i in mockTransactions) {
      coins.push(mockTransactions[i].coin);
    }

    let coinsFilter = coins.filter(
      (item, pos, self) => self.indexOf(item) === pos
    );

    let myTransactions = {};

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

    for (let i in coinsFilter) {
      if (myAssets[coinsFilter[i]] === undefined) {
        myAssets[coinsFilter[i]] = {};
      }
    }

    for (let i in coinsFilter) {
      myAssets[coinsFilter[i]].avg_cost =
        myTransactions[coinsFilter[i]][0].cost;
      myAssets[coinsFilter[i]].sum_qty = myTransactions[coinsFilter[i]][0].qty;
    }

    for (let j in coinsFilter) {
      for (let i = 1; i < myTransactions[coinsFilter[j]].length; i++) {
        if (myTransactions[coinsFilter[j]][i].type === "buy") {
          myAssets[coinsFilter[j]].avg_cost =
            (myAssets[coinsFilter[j]].avg_cost *
              myAssets[coinsFilter[j]].sum_qty +
              myTransactions[coinsFilter[j]][i].cost *
                myTransactions[coinsFilter[j]][i].qty) /
            (myAssets[coinsFilter[j]].sum_qty +
              myTransactions[coinsFilter[j]][i].qty);

          myAssets[coinsFilter[j]].sum_qty +=
            myTransactions[coinsFilter[j]][i].qty;
        }

        if (myTransactions[coinsFilter[j]][i].type === "sell") {
          myAssets[coinsFilter[j]].sum_qty -=
            myTransactions[coinsFilter[j]][i].qty;
          myAssets[coinsFilter[j]].profit_loss =
            (myTransactions[coinsFilter[j]][i].cost -
              myAssets[coinsFilter[j]].avg_cost) *
            myTransactions[coinsFilter[j]][i].qty;
          myAssets[coinsFilter[j]].sum_sell =
            myTransactions[coinsFilter[j]][i].cost *
            myTransactions[coinsFilter[j]][i].qty;
        }
      }
    }

    setMyAssets(myAssets);
  }, []);

  //   console.log("myAssets Prov", myAssets);
  //   console.log("myCoins Prov", myCoins);
  //   console.log("myTransactionsProv", myTransactions);

  return (
    <MyAssetsContext.Provider value={{ myAssets }}>
      {children}
    </MyAssetsContext.Provider>
  );
};
