import { createContext, useEffect, useState, useContext } from "react";
import { MyTransactionsContext } from "../myTransactions";
import { MyCoinsContext } from "../myCoins";

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
  const { myTransactions } = useContext(MyTransactionsContext);
  const { myCoins } = useContext(MyCoinsContext);

  console.log("Assets myTransactions fora", myTransactions);

  useEffect(() => {
    if (myCoins !== [] && myTransactions !== {}) {
      let myAssetsObj = {};
      console.log("Assets myCoins dentro ", myCoins);
      console.log("Assets myTransactions dentro", myTransactions);

      for (let i in myCoins) {
        if (myAssetsObj[myCoins[i]] === undefined) {
          myAssetsObj[myCoins[i]] = {};
        }
      }

      // insere o valor incial de quantidade e custo de acordo com a primeira transação com determinada moeda

      for (let i in myCoins) {
        myAssetsObj[myCoins[i]].avg_cost = myTransactions[myCoins[i]][0].cost;
        myAssetsObj[myCoins[i]].sum_qty = myTransactions[myCoins[i]][0].qty;
      }

      // transações
      for (let j in myCoins) {
        for (let i = 1; i < myTransactions[myCoins[j]].length; i++) {
          if (myTransactions[myCoins[j]][i].type === "buy") {
            myAssetsObj[myCoins[j]].avg_cost =
              (myAssetsObj[myCoins[j]].avg_cost *
                myAssetsObj[myCoins[j]].sum_qty +
                myTransactions[myCoins[j]][i].cost *
                  myTransactions[myCoins[j]][i].qty) /
              (myAssetsObj[myCoins[j]].sum_qty +
                myTransactions[myCoins[j]][i].qty);

            myAssetsObj[myCoins[j]].sum_qty +=
              myTransactions[myCoins[j]][i].qty;

            //   console.log("compra", myAssetsObj[myCoins[j]]);
          }

          if (myTransactions[myCoins[j]][i].type === "sell") {
            myAssetsObj[myCoins[j]].sum_qty -=
              myTransactions[myCoins[j]][i].qty;
            myAssetsObj[myCoins[j]].profit_loss =
              (myTransactions[myCoins[j]][i].cost -
                myAssetsObj[myCoins[j]].avg_cost) *
              myTransactions[myCoins[j]][i].qty;
            myAssetsObj[myCoins[j]].sum_sell =
              myTransactions[myCoins[j]][i].cost *
              myTransactions[myCoins[j]][i].qty;
            //   console.log("venda", myAssets[myCoins[j]]);
          }
        }
      }

      setMyAssets(myAssetsObj);
    }
  }, [myCoins, myTransactions]);

  //   console.log("myAssets Prov", myAssets);
  //   console.log("myCoins Prov", myCoins);
  //   console.log("myTransactionsProv", myTransactions);

  return (
    <MyAssetsContext.Provider value={{ myAssets }}>
      {children}
    </MyAssetsContext.Provider>
  );
};
