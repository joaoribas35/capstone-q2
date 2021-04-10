import axios from "axios";

const CoinApi = axios.create({
  baseURL: " https://coingecko.com/api/documentations/v3",
});

const ServerJsonApi = axios.create({
  baseURL: "https://currente-coin.herokuapp.com",
});

export default CoinApi;
export default ServerJsonApi;
