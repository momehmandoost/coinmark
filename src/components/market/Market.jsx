import React from "react";
import "./market.css";
import { useContext, useState, useEffect } from "react";

import { CoinContext } from "../../Api/api";
import { Link } from "react-router-dom";

export const Market = () => {
  const { getCoinPerPage, coins } = useContext(CoinContext);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCoinPerPage(currentPage); // Fetch coin data for the first page
  }, [currentPage]);

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <div class="market-content">
        <h2>Market Update</h2>
        <div class="market-content__coin-list">
          <div class="market-content__coin-list__top">
            <p>Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
          </div>
          <div className="market-content__coin-list__row">
            {coins.map((coin) => (
              <Link to={`/coin/${coin.id}`}>
                <a className="coin-row">
                  <span>
                    <img src={coin.image} alt={coin.id} /> {coin.id}
                  </span>
                  <p>${numberWithCommas(coin.current_price.toFixed(2))}</p>
                  <p
                    className={
                      "slider-coin__price " +
                      (coin.price_change_percentage_24h >= 0
                        ? "green-text"
                        : "red-text")
                    }
                  >
                    {coin.price_change_percentage_24h}%
                  </p>
                  <p>{numberWithCommas(coin.market_cap)}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div class="market-content__coin-list__pagination">
          {paginationButtons}
        </div>

        {/* <div>
          <h1>Coin Data</h1>
          {coins.map((coin) => (
            <a class="coin-row" href="/coin/${coin.id}">
              <span>
                <img src={coin.image} alt={coin.id} /> {coin.id}
              </span>
              <p>{coin.current_price}</p>
              <p class="slider-coin__price red-text">
                {coin.price_change_percentage_24h}%
              </p>
              <p>${coin.market_cap}</p>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};
