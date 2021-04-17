import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { ServerJsonApi } from "../../services/api";

// const mockTransactions = [
// {
//   id: 1,
//   coin: "bitcoin",
//   type: "buy",
//   qty: 0.3,
//   cost: 180000,
//   date: "03-02-2021",
//   is_national: true,
// },
// {
//   id: 2,
//   coin: "bitcoin",
//   type: "buy",
//   qty: 0.3,
//   cost: 190000,
//   date: "13-02-2021",
//   is_national: true,
// },
// {
//   id: 3,
//   coin: "bitcoin",
//   type: "buy",
//   qty: 0.1,
//   cost: 210000,
//   date: "23-02-2021",
//   is_national: true,
// },
// {
//   id: 4,
//   coin: "bitcoin",
//   type: "sell",
//   qty: 0.4,
//   cost: 250000,
//   date: "05-03-2021",
//   is_national: true,
// },
// {
//   id: 5,
//   coin: "bitcoin",
//   type: "buy",
//   qty: 0.2,
//   cost: 180000,
//   date: "15-03-2021",
//   is_national: true,
// },
//   {
//     id: 6,
//     coin: "ethereum",
//     type: "buy",
//     qty: 0.5,
//     cost: 1200,
//     date: "03-02-2021",
//     is_national: false,
//   },
//   {
//     id: 7,
//     coin: "ethereum",
//     type: "buy",
//     qty: 0.4,
//     cost: 1300,
//     date: "13-02-2021",
//     is_national: false,
//   },
//   {
//     id: 8,
//     coin: "ethereum",
//     type: "buy",
//     qty: 0.3,
//     cost: 1400,
//     date: "23-02-2021",
//     is_national: false,
//   },
//   {
//     id: 9,
//     coin: "ethereum",
//     type: "sell",
//     qty: 0.2,
//     cost: 1500,
//     date: "05-03-2021",
//     is_national: false,
//   },
//   {
//     id: 10,
//     coin: "ethereum",
//     type: "buy",
//     qty: 0.1,
//     cost: 1600,
//     date: "15-03-2021",
//     is_national: false,
//   },
//   {
//     id: 11,
//     coin: "litecoin",
//     type: "buy",
//     qty: 1,
//     cost: 600,
//     date: "15-03-2021",
//     is_national: false,
//   },
//   {
//     id: 12,
//     coin: "cardano",
//     type: "buy",
//     qty: 1,
//     cost: 600,
//     date: "15-03-2021",
//     is_national: false,
//   },
//   {
//     id: 12,
//     coin: "cardano",
//     type: "sell",
//     qty: 0.5,
//     cost: 1200,
//     date: "15-03-2021",
//     is_national: false,
//   },
// ];

const getMonth = (monthParameter) => {
  let split = monthParameter.date.split("-")[1];

  switch (split) {
    case "01":
      return "janeiro";

    case "02":
      return "fevereiro";

    case "03":
      return "março";

    case "04":
      return "abril";

    case "05":
      return "maio";

    case "06":
      return "junho";

    case "07":
      return "julho";

    case "08":
      return "agosto";

    case "09":
      return "setembro";

    case "10":
      return "outubro";

    case "11":
      return "novembro";

    case "12":
      return "dezembro";

    default:
      return "indefinido";
  }
};

export const MyAssetsContext = createContext();

export const MyAssetsProvider = ({ children }) => {
  const [myAssets, setMyAssets] = useState({});
  const [myCoins, setMyCoins] = useState([]);
  const [myTransactions, setMyTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  const [mockTransactions, setMockTransactions] = useState([]);

  const token = localStorage.getItem("token");
  const { sub } = jwtDecode(token);

  useEffect(() => {
    ServerJsonApi.get(`/transactions?userId=${sub}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setMockTransactions(response.data);
    });
  }, [token]);

  useEffect(() => {
    let coins = [];
    for (let i in mockTransactions) {
      coins.push(mockTransactions[i].coin);
    }
  }, []);

  useEffect(() => {
    if (apiData !== []) {
      console.log(apiData);

      let coins = [];
      for (let i in mockTransactions) {
        coins.push(mockTransactions[i].coin);
      }

      let coinsFilter = coins.filter(
        (item, pos, self) => self.indexOf(item) === pos
      );

      setMyCoins(coinsFilter);

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

      setMyTransactions(myTransactions);

      for (let i in coinsFilter) {
        if (myAssets[coinsFilter[i]] === undefined) {
          myAssets[coinsFilter[i]] = {
            accounting: {
              janeiro: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              fevereiro: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              março: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              abril: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              maio: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              junho: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              julho: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              agosto: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              setembro: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              outubro: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              novembro: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
              dezembro: {
                profit_loss: [],
                sum_sell: [],
                trades: [],
              },
            },
          };
        }
      }

      for (let i in coinsFilter) {
        myAssets[coinsFilter[i]].avg_cost =
          myTransactions[coinsFilter[i]][0].cost;
        myAssets[coinsFilter[i]].sum_qty =
          myTransactions[coinsFilter[i]][0].qty;
      }

      for (let j in coinsFilter) {
        for (let i = 1; i < myTransactions[coinsFilter[j]].length; i++) {
          const monthName = getMonth(myTransactions[coinsFilter[j]][i]);

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

            myAssets[coinsFilter[j]].accounting[monthName].profit_loss.push(
              (myTransactions[coinsFilter[j]][i].cost -
                myAssets[coinsFilter[j]].avg_cost) *
                myTransactions[coinsFilter[j]][i].qty
            );

            myAssets[coinsFilter[j]].accounting[monthName].sum_sell.push(
              myTransactions[coinsFilter[j]][i].cost *
                myTransactions[coinsFilter[j]][i].qty
            );

            if (myTransactions[coinsFilter[j]][i].is_national === false) {
              myAssets[coinsFilter[j]].accounting[monthName].trades.push(
                myTransactions[coinsFilter[j]][i].cost *
                  myTransactions[coinsFilter[j]][i].qty
              );
            }
          }
        }
      }

      setMyAssets(myAssets);
      setLoading(false);
    }
  }, [apiData, mockTransactions, myAssets]);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <>
        <MyAssetsContext.Provider value={{ myCoins, myTransactions, myAssets }}>
          {children}
        </MyAssetsContext.Provider>
      </>
    );
  }
};
