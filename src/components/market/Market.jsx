import React from "react";
import "./market.css";
import { useContext, useState, useEffect } from "react";

import { CoinContext } from "../../Api/api";

export const Market = () => {
  const { getBitcoin } = useContext(CoinContext);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    fetchBitcoinPrice();
  }, []);

  const fetchBitcoinPrice = async () => {
    const bitcoinData = await getBitcoin();
    const price = bitcoinData[0]?.current_price || null;
    setBitcoinPrice(price);
  };
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
          <div class="market-content__coin-list__row">
            <a class="coin-row" href="/coin/bitcoin">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="Bitcoin"
                />{" "}
                Bitcoin
              </span>
              <p>$ 30266.00</p>
              <p class="slider-coin__price red-text">-0.17 %</p>
              <p>$ 588,125,832,480</p>
            </a>
            <a class="coin-row" href="/coin/ethereum">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                  alt="Ethereum"
                />{" "}
                Ethereum
              </span>
              <p>$ 1928.68</p>
              <p class="slider-coin__price red-text">-0.22 %</p>
              <p>$ 231,831,683,308</p>
            </a>
            <a class="coin-row" href="/coin/tether">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
                  alt="Tether"
                />{" "}
                Tether
              </span>
              <p>$ 1.00</p>
              <p class="slider-coin__price green-text">0.06 %</p>
              <p>$ 83,683,546,936</p>
            </a>
            <a class="coin-row" href="/coin/ripple">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
                  alt="XRP"
                />{" "}
                XRP
              </span>
              <p>$ 0.75</p>
              <p class="slider-coin__price green-text">3.31 %</p>
              <p>$ 39,482,001,902</p>
            </a>
            <a class="coin-row" href="/coin/binancecoin">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
                  alt="BNB"
                />{" "}
                BNB
              </span>
              <p>$ 244.60</p>
              <p class="slider-coin__price red-text">-2.82 %</p>
              <p>$ 38,123,238,870</p>
            </a>
            <a class="coin-row" href="/coin/usd-coin">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389"
                  alt="USD Coin"
                />{" "}
                USD Coin
              </span>
              <p>$ 1.00</p>
              <p class="slider-coin__price red-text">-0.01 %</p>
              <p>$ 27,275,548,275</p>
            </a>
            <a class="coin-row" href="/coin/staked-ether">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546"
                  alt="Lido Staked Ether"
                />{" "}
                Lido Staked Ether
              </span>
              <p>$ 1927.23</p>
              <p class="slider-coin__price red-text">-0.28 %</p>
              <p>$ 14,928,530,578</p>
            </a>
            <a class="coin-row" href="/coin/cardano">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                  alt="Cardano"
                />{" "}
                Cardano
              </span>
              <p>$ 0.32</p>
              <p class="slider-coin__price red-text">-3.96 %</p>
              <p>$ 11,086,983,544</p>
            </a>
            <a class="coin-row" href="/coin/solana">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
                  alt="Solana"
                />{" "}
                Solana
              </span>
              <p>$ 27.44</p>
              <p class="slider-coin__price red-text">-1.47 %</p>
              <p>$ 11,078,078,597</p>
            </a>
            <a class="coin-row" href="/coin/dogecoin">
              <span>
                <img
                  src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"
                  alt="Dogecoin"
                />{" "}
                Dogecoin
              </span>
              <p>$ 0.07</p>
              <p class="slider-coin__price red-text">-4.00 %</p>
              <p>$ 9,748,843,507</p>
            </a>
          </div>
        </div>
        <div class="market-content__coin-list__pagination">
          <button class="">1</button>
          <button class="">2</button>
          <button class="">3</button>
          <button class="">4</button>
          <button class="">5</button>
        </div>

        <div>
          <h1>Bitcoin Price</h1>
          {bitcoinPrice !== null ? (
            <p>The current price of Bitcoin is ${bitcoinPrice}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
