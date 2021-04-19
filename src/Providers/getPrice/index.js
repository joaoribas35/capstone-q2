import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { GetTransactionsContext } from "../getTransactions";

import jwtDecode from "jwt-decode";
import { ServerJsonApi } from "../../services/api";
import { Container } from "../styles";

export const GetPriceContext = createContext();

export const GetPriceProvider = ({ children }) => {
  const [getPrice, setGetPrice] = useState({});
  const [loading, setLoading] = useState(true);

  const { mockTransactions } = useContext(GetTransactionsContext);

  // console.log("mockTransactionsGetPrice", mockTransactions);

  const token = localStorage.getItem("token");
  const { sub } = jwtDecode(token);

  // useEffect(() => {
  //   ServerJsonApi.get(`/transactions?userId=${sub}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   }).then((response) => {
  //     setMockTransactions(response.data);
  //   });
  // }, [token, sub]);

  async function loadData() {
    let coins = [];
    for (let i in mockTransactions) {
      coins.push(mockTransactions[i].coin);
    }

    let coinsFilter = coins.filter(
      (item, pos, self) => self.indexOf(item) === pos
    );

    let string =
      "bitcoin%2Cethereum%2Cbinancecoin%2Cripple%2Ctether%2Ccardano%2Cpolkadot%2Cuniswap%2Clitecoin%2Cchainlink%2Cstellar%2Cbitcoin-cash%2Ctheta-token%2Cfilecoin%2Cusd-coin%2Ctron%2Cdogecoin%2Ceos%2Cmonero%2Cbinance-usd%2Ctezos%2Cneo%2Cnem%2Cchiliz%2Czilliqa%2Cicon%2Ctrue-usd%2Cdash%2Cdecred%2Cvechain";

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

  return (
    <>
      {loading ? (
        <Container>
          <Loading type={"spokes"} color={"blue"} />
        </Container>
      ) : (
        <GetPriceContext.Provider value={{ getPrice, mockTransactions }}>
          {children}
        </GetPriceContext.Provider>
      )}
    </>
  );
};
