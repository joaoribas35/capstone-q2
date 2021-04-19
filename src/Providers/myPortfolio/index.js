import { createContext, useContext, useEffect, useState } from "react";
import { GetPriceContext } from "../getPrice";

export const MyPortfolioContext = createContext();

export const MyPortfolioProvider = ({ children }) => {
  const [myPortfolio, setMyPortfolio] = useState({});

  const { mockTransactions } = useContext(GetPriceContext);

  useEffect(() => {
    const mockPortfolio = mockTransactions.map((mock) => {
      return {
        userId: mock.userId,
        coin: mock.coin,
      };
    });

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
            mockPortfolio[i]["to-be-percent"] || 100 / coinsFilter.length;
        }
    }

    setMyPortfolio(myPortfolio);
  }, []);

  return (
    <MyPortfolioContext.Provider value={{ myPortfolio }}>
      {children}
    </MyPortfolioContext.Provider>
  );
};
