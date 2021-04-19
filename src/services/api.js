import axios from "axios";

export const CoinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

export const ServerJsonApi = axios.create({
  baseURL: "https://currente-coin.herokuapp.com",
});
