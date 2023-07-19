import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../Api/api";
import "./coinslider.css"

export const Coinslider = () => {
  const { getBitcoin, getEther } = useContext(CoinContext);
  const [bitcoinData, setBitcoinData] = useState(null);
  const [etherData, setEtherData] = useState(null);

  useEffect(() => {
    fetchBitcoinData();
    fetchEtherData();
  }, []);

  const fetchBitcoinData = async () => {
    const data = await getBitcoin();
    setBitcoinData(data);
  };

  const fetchEtherData = async () => {
    const data = await getEther();
    setEtherData(data);
  };

  return (
    <div className="coin-slider">
      {bitcoinData && bitcoinData[0] && etherData && etherData[0] ? (
        <div className="coinrow">
          <div className="coinitem">
            <a className="slider-coin" href="/coin/bitcoin">
              <img src={bitcoinData[0].image} alt={bitcoinData[0].id} />
              <p className="slider-coin__name">
                Bitcoin
                <span className="slider-coin__price red-text">
                  {bitcoinData[0].price_change_percentage_24h}%
                </span>
              </p>
              <p className="slider-coin__price">
                ${bitcoinData[0].current_price}
              </p>
            </a>
          </div>
          <div className="coinitem">
            <a className="slider-coin" href="/coin/ethereum">
              <img src={etherData[0].image} alt={etherData[0].id} />
              <p className="slider-coin__name">
                Ethereum
                <span className="slider-coin__price red-text">
                  {etherData[0].price_change_percentage_24h}%
                </span>
              </p>
              <p className="slider-coin__price">
                ${etherData[0].current_price}
              </p>
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
