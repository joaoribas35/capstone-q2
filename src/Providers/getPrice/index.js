import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

import jwtDecode from "jwt-decode";
import { ServerJsonApi } from "../../services/api";
import { useHistory } from "react-router-dom";

export const GetPriceContext = createContext();

export const GetPriceProvider = ({ children }) => {
  const [getPrice, setGetPrice] = useState({});
  const [loading, setLoading] = useState(true);

  const [mockTransactions, setMockTransactions] = useState([]);

  const token = localStorage.getItem("token");
  const { sub } = jwtDecode(token);

  useEffect(() => {
    ServerJsonApi.get(`/transactions?userId=${sub}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setMockTransactions(response.data);
    });
  }, [token, sub]);

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
    if (mockTransactions.length) {
      loadData();
    }
  }, [mockTransactions]);

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
      <GetPriceContext.Provider value={{ getPrice, mockTransactions }}>
        {children}
      </GetPriceContext.Provider>
    );
  }
};
