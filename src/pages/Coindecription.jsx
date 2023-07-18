import React from "react";


export const Coindecription = () => {
  return (
    <div>
      <div class="coin-content">
        <div class="coin-content__img-side">
          <img
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt="bitcoin"
          />
          <h2>Bitcoin</h2>
          <p>Rank: #1</p>
        </div>
        <div class="coin-content__text-side">
          <div class="numb">
            <div class="coin-content__text-side__24h">
              <span>24h Change:</span>
              <p class="red-text">-0.80%</p>
            </div>
            <div class="coin-content__text-side__current">
              <span>Price:</span>
              <p class="green-text">$29,838.00</p>
            </div>
            <div class="coin-content__text-side__symbol">
              <p>Symbol:</p>
              <span>btc</span>
            </div>
          </div>
          <div class="description">
            <p>
              Bitcoin is the first successful internet money based on
              peer-to-peer technology; whereby no central bank or authority is
              involved in the transaction and production of the Bitcoin
              currency. It was created by an anonymous individual/group under
              the name, Satoshi Nakamoto. The source code is available publicly
              as an open source project, anybody can look at it and be part of
              the developmental process. Bitcoin is changing the way we see
              money as we speak. The idea was to produce a means of exchange,
              independent of any central authority, that could be transferred
              electronically in a secure, verifiable and immutable way. It is a
              decentralized peer-to-peer internet currency making mobile payment
              easy, very low transaction fees, protects your identity, and it
              works anywhere all the time with no central authority and banks.
              Bitcoin is designed to have only 21 million BTC ever created, thus
              making it a deflationary currency. Bitcoin uses the{" "}
              <a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">
                SHA-256
              </a>{" "}
              hashing algorithm with an average transaction confirmation time of
              10 minutes. Miners today are mining Bitcoin using ASIC chip
              dedicated to only mining Bitcoin, and the hash rate has shot up to
              peta hashes. Being the first successful online cryptography
              currency, Bitcoin has inspired other alternative currencies such
              as{" "}
              <a href="https://www.coingecko.com/en/coins/litecoin">Litecoin</a>
              ,{" "}
              <a href="https://www.coingecko.com/en/coins/peercoin">Peercoin</a>
              ,{" "}
              <a href="https://www.coingecko.com/en/coins/primecoin">
                Primecoin
              </a>
              , and so on. The cryptocurrency then took off with the innovation
              of the turing-complete smart contract by{" "}
              <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a>{" "}
              which led to the development of other amazing projects such as{" "}
              <a href="https://www.coingecko.com/en/coins/eos">EOS</a>,{" "}
              <a href="https://www.coingecko.com/en/coins/tron">Tron</a>, and
              even crypto-collectibles such as{" "}
              <a href="https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos">
                CryptoKitties
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
