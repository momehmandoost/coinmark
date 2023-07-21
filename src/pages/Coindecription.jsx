// import React from "react";
// import "./Coindescription.css";

// import { CoinContext } from "../Api/api";
// import { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// export const Coindecription = () => {
//   const { getDescri } = useContext(CoinContext);
//   const { coinId } = useParams();
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetchData(); // Fetch coin data for the first page
//   }, []);
//   const fetchData = async () => {
//     const data = await getDescri(coinId);
//     setData(data);
//   };
//   if (!data) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div>
//       <div class="coin-content">
//         <div class="coin-content__img-side">
//           <img src={data[0].image} alt={data[0].id} />
//           <h2>{data[0].id}</h2>
//           <p>Rank: #1</p>
//         </div>
//         <div class="coin-content__text-side">
//           <div class="numb">
//             <div class="coin-content__text-side__24h">
//               <span>24h Change:</span>
//               <p class="red-text">-0.80%</p>
//             </div>
//             <div class="coin-content__text-side__current">
//               <span>Price:</span>
//               <p class="green-text">$29,838.00</p>
//             </div>
//             <div class="coin-content__text-side__symbol">
//               <p>Symbol:</p>
//               <span>btc</span>
//             </div>
//           </div>
//           <div class="description">
//             <p>
//               Bitcoin is the first successful internet money based on
//               peer-to-peer technology; whereby no central bank or authority is
//               involved in the transaction and production of the Bitcoin
//               currency. It was created by an anonymous individual/group under
//               the name, Satoshi Nakamoto. The source code is available publicly
//               as an open source project, anybody can look at it and be part of
//               the developmental process. Bitcoin is changing the way we see
//               money as we speak. The idea was to produce a means of exchange,
//               independent of any central authority, that could be transferred
//               electronically in a secure, verifiable and immutable way. It is a
//               decentralized peer-to-peer internet currency making mobile payment
//               easy, very low transaction fees, protects your identity, and it
//               works anywhere all the time with no central authority and banks.
//               Bitcoin is designed to have only 21 million BTC ever created, thus
//               making it a deflationary currency. Bitcoin uses the{" "}
//               <a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">
//                 SHA-256
//               </a>{" "}
//               hashing algorithm with an average transaction confirmation time of
//               10 minutes. Miners today are mining Bitcoin using ASIC chip
//               dedicated to only mining Bitcoin, and the hash rate has shot up to
//               peta hashes. Being the first successful online cryptography
//               currency, Bitcoin has inspired other alternative currencies such
//               as{" "}
//               <a href="https://www.coingecko.com/en/coins/litecoin">Litecoin</a>
//               ,{" "}
//               <a href="https://www.coingecko.com/en/coins/peercoin">Peercoin</a>
//               ,{" "}
//               <a href="https://www.coingecko.com/en/coins/primecoin">
//                 Primecoin
//               </a>
//               , and so on. The cryptocurrency then took off with the innovation
//               of the turing-complete smart contract by{" "}
//               <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a>{" "}
//               which led to the development of other amazing projects such as{" "}
//               <a href="https://www.coingecko.com/en/coins/eos">EOS</a>,{" "}
//               <a href="https://www.coingecko.com/en/coins/tron">Tron</a>, and
//               even crypto-collectibles such as{" "}
//               <a href="https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos">
//                 CryptoKitties
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useContext, useState, useEffect } from "react";
// import { CoinContext } from "../Api/api"; // Update the file path for CoinContext
// import { useParams } from "react-router-dom";
// import "./Coindescription.css";

// export const Coindecription = () => {
//   const { getDescri } = useContext(CoinContext);
//   const { coinId } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log(data); // Log the updated data state
//   }, [data]); // Run the effect whenever data changes

//   const fetchData = async () => {
//     const coinData = await getDescri(coinId);
//     setData(coinData);
//   };

//   if (
//     !data ||
//     !data.image ||
//     !data.id ||
//     !data.market_cap_rank ||
//     !data.price_change_percentage_24h ||
//     !data.current_price ||
//     !data.symbol ||
//     !data.description
//   ) {
//     return <p>Data not found.</p>;
//   }

//   const {
//     image,
//     id,
//     market_cap_rank,
//     price_change_percentage_24h,
//     current_price,
//     symbol,
//     description,
//   } = data;

//   return (
//     <div>
//       <div className="coindescription">
//         <div className="coin-content__img-side">
//           <img src={image} alt={id} />
//           <h2>{id}</h2>
//           <p>Rank: #{market_cap_rank}</p>
//         </div>
//         <div className="coin-content__text-side">
//           <div className="numb">
//             <div className="coin-content__text-side__24h">
//               <span>24h Change:</span>
//               <p className="red-text">{price_change_percentage_24h}%</p>
//             </div>
//             <div className="coin-content__text-side__current">
//               <span>Price:</span>
//               <p className="green-text">${current_price}</p>
//             </div>
//             <div className="coin-content__text-side__symbol">
//               <p>Symbol:</p>
//               <span>{symbol}</span>
//             </div>
//           </div>
//           <div className="description">
//             <p>{description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Coindescription.css";

function Coindesc() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const [loadCoin, setLoadCoin] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log(coin);

  const h24 = coin.market_data ? coin.market_data.price_change_24h : "";

  return (
    <>
      <section className="coin-page">
        <div className="container">
          <div onLoad={() => setLoadCoin(false)} className="coin-content">
            <div className="coin-content__img-side">
              {loadCoin && <span className="loader"></span>}
              {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
              <h2>{coin.name}</h2>
              <p>Rank: #{coin.coingecko_rank}</p>
            </div>
            <div className="coin-content__text-side">
              <div className="numb">
                <div className="coin-content__text-side__24h">
                  <span>24h Change:</span>
                  <p className={h24 >= 0 ? "green-text" : "red-text"}>
                    {coin.market_data
                      ? coin.market_data.price_change_percentage_24h.toFixed(
                          2
                        ) + "%"
                      : ""}
                  </p>
                </div>
                <div className="coin-content__text-side__current">
                  <span>Price:</span>
                  <p className={"green-text"}>
                    {coin.market_data
                      ? "$" +
                        numberWithCommas(
                          coin.market_data.current_price.usd.toFixed(2)
                        )
                      : null}
                  </p>
                </div>
                <div className="coin-content__text-side__symbol">
                  <p>Symbol:</p>
                  <span>{coin.symbol}</span>
                </div>
              </div>
              {loadCoin && <span className="loader"></span>}
              <div className="description">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Coindesc;
