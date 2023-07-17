import React from "react";
import "./header.css";

export const Header = () => {
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
            <a href="#choose-us">Choose Us</a>
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
          <i class="fa-solid fa-bars-staggered hamburger-menu"></i>
        </span>
      </div>
    </div>
  );
};
