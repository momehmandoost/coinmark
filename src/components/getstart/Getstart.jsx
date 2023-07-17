import React from "react";
import "./Getstart.css";

export const Getstart = () => {
  return (
    <div className="getstartcontain">
      <div className="getstart-title">Getting started</div>
      <div className="getstart-option">
        <div className="getstarticon">
          <i class="fa-solid fa-wallet fa-5x"></i>
          <div className="getstarticon-des">CONNECT YOUR WALLET</div>
        </div>
        <div className="getstarticon">
          <i class="fa-solid fa-pen-ruler fa-5x"></i>
          <div className="getstarticon-des">SELECT YOUR QUANTITY</div>
        </div>
        <div className="getstarticon">
          <i class="fa-solid fa-satellite-dish fa-5x"></i>
          <div className="getstarticon-des">RECEIVE YOUR OWN NFTS</div>
        </div>
        <div className="getstarticon">
          <i class="fa-solid fa-chess-knight fa-5x"></i>
          <div className="getstarticon-des">TAKE A MARKET TO SELLT</div>
        </div>
      </div>
    </div>
  );
};
