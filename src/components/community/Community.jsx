import React from "react";
import "./Community.css";

export const Community = () => {
  return (
    <div className="community-content">
      <div class="join-content">
        <img
          alt="coin_img"
          className="join-content__btc"
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        />
        <img
          alt="coin_img"
          className="join-content__eth"
          src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        />
        <div className="join-content__text">
          <h2>
            join us via <br /> <span>discord</span>
          </h2>
          <p>Invest and manage all your crypto at one place.</p>
          <a rel="noreferrer" target="_blank" href="https://discord.com/">
            Join via Discord
          </a>
        </div>
      </div>
    </div>
  );
};
