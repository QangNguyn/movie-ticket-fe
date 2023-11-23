import React from "react";
import "./banner.scss";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
      <img
        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/background-camera-home-3.png"
        alt=""
      />
      <div className="banner-text">
        <span>Selected Movies</span>
        <h3>Enjoy 30% Discount on Tickets</h3>
        <Link>Get ticket</Link>
      </div>
    </div>
  );
}
