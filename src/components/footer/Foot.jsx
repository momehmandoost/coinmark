import React from "react";
import "./foot.css";

export const Foot = () => {
  return (
    <div>
      <div class="footer-content">
        <div class="footer-content__socials">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-discord"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div class="footer-content__text">
          <p>Privacy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};
