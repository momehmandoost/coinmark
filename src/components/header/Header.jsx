import { useState } from "react";
import React from "react";
import "./header.css";

export const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">COINMARK</div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#market">Market</a>
          </li>
          <li>
            <a href="#getstart">Getting start</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
        </ul>
      </div>
      <div className="social">
        <span>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-discord"></i>

          <div className="hamburger" onClick={() => setClick(!click)}>
            {click ? (
              <i class="fa-solid fa-xmark close-mobile"></i>
            ) : (
              <i class="fa-solid fa-bars-staggered hamburger-menu"></i>
            )}
            {click ? (
              <div className="sidemenu">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li></li>
                </ul>
              </div>
            ) : null}
          </div>
        </span>
      </div>
    </div>
  );
};
