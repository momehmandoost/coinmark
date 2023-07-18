import React from "react";
import "./coin.css";
import { Header } from "../components/header/Header";
import { Foot } from "../components/footer/Foot";
import { Coindecription } from "./Coindecription";

export const Coin = () => {
  return (
    <div className="coinback">
      <div className="container">
        <nav>
          <Header />
        </nav>
        <div className="coindescription">
          <Coindecription />
        </div>
        <footer>
          <Foot />
        </footer>
      </div>
    </div>
  );
};
