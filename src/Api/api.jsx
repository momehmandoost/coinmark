import React, { createContext, useState } from "react";

export const CoinContext = createContext({
  coins: [],
  getCoinPerPage: () => {},
  getBitcoin: () => {},
  getEther: () => {},
});

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState([]);

  async function getCoinPerPage(page) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;

    const response = await fetch(url);
    const json = await response.json();
    setCoins(json);
    return json;
  }

  async function getBitcoin() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en`;

    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  async function getEther() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en`;

    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  const ContextValue = {
    coins,
    getCoinPerPage,
    getBitcoin,
    getEther,
  };

  return (
    <CoinContext.Provider value={ContextValue}>{children}</CoinContext.Provider>
  );
}
