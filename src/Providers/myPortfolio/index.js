import { createContext, useEffect, useState } from "react";

const mockPortfolio = [
  {
    userId: "1",
    coin: "bitcoin",
    "to-be-percent": 60,
  },
  {
    userId: "1",
    coin: "ethereum",
    "to-be-percent": 25,
  },
  {
    userId: "1",
    coin: "litecoin",
    "to-be-percent": 10,
  },
  {
    userId: "1",
    coin: "cardano",
    "to-be-percent": 5,
  },
];

export const MyPortfolioContext = createContext();

export const MyPortfolioProvider = ({ children }) => {
  const [myPortfolio, setMyPortfolio] = useState({});

  useEffect(() => {
    let coins = [];
    for (let i in mockPortfolio) {
      coins.push(mockPortfolio[i].coin);
    }

    let coinsFilter = coins.filter(
      (item, pos, self) => self.indexOf(item) === pos
    );

    for (let i in coinsFilter) {
      if (myPortfolio[coinsFilter[i]] === undefined) {
        myPortfolio[coinsFilter[i]] = {};
      }
    }

    for (let i in mockPortfolio) {
      for (let j in Object.keys(myPortfolio))
        if (mockPortfolio[i].coin === Object.keys(myPortfolio)[j]) {
          myPortfolio[mockPortfolio[i].coin] =
            mockPortfolio[i]["to-be-percent"];
        }
    }

    setMyPortfolio(myPortfolio);
  }, []);

  console.log("Prov myPortfolio", myPortfolio);

  return (
    <MyPortfolioContext.Provider value={{ myPortfolio }}>
      {children}
    </MyPortfolioContext.Provider>
  );
};
