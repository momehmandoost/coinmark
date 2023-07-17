import React from "react";
import "./discover.css";
import { Coinslider } from "./Coinslider";

export const Discover = () => {
  return (
    <div className="hero-content">
      <div className="hero-left">
        <div className="hero-text-title">
          Discover, collect, and charity in extraordinary NFT marketplace
        </div>

        <div className="hero-text">Track and trade cryptocurrencies</div>

        <div className="hero-btn">
          <div className="hero-btn-grad">Explore</div>
          <div className="hero-btn-outline">Market</div>
        </div>
      </div>

      <div className="price">
        <Coinslider />
      </div>
    </div>
  );
};
