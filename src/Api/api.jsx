import React, { createContext, useState } from "react";

export const CoinContext = createContext({
  coins: [],
  getCoinPerPage: () => {},
  getBitcoin: () => {},
  getEther: () => {},
  getDescri: () => {},
});

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState([]);

  async function getCoinPerPage(page) {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch coin data");
      }

      const json = await response.json();
      setCoins(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  async function getBitcoin() {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch Bitcoin data");
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  async function getEther() {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch Ethereum data");
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
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
