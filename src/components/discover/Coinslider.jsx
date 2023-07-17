import React from "react";
import "./coinslider.css";

export const Coinslider = () => {
  return (
    <div className="coin-slider">
      <div className="coinrow">
        <div className="coinitem">
          <a className="slider-coin" href="/coin/bitcoin">
            <img
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              alt="Bitcoin"
            />
            <p className="slider-coin__name">
              Bitcoin<span class="slider-coin__price red-text">-0.17%</span>
            </p>
            <p className="slider-coin__price">$ 30,266.00</p>
          </a>
        </div>
        <div className="coinitem">
          <a className="slider-coin" href="/coin/ethereum">
            <img
              src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
              alt="Ethereum"
            />
            <p className="slider-coin__name">
              Ethereum<span class="slider-coin__price red-text">-0.22%</span>
            </p>
            <p class="slider-coin__price">$ 1,928.68</p>
          </a>
        </div>
      </div>
      {/* <div className="coinrow">
        <div className="coinitem">
          <a className="slider-coin" href="/coin/tether">
            <img
              src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
              alt="Tether"
            />
            <p className="slider-coin__name">
              Tether <span class="slider-coin__price green-text">0.06%</span>
            </p>
            <p className="slider-coin__price">$ 1.00</p>
          </a>
        </div>
        <div className="coinitem">
          <a className="slider-coin" href="/coin/ripple">
            <img
              src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
              alt="XRP"
            />
            <p className="slider-coin__name">
              XRP <span class="slider-coin__price green-text">3.31%</span>
            </p>
            <p className="slider-coin__price">$ 0.75</p>
          </a>
        </div>
      </div> */}
    </div>
  );
};
