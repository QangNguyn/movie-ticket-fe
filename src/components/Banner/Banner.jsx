import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner-wrap">
      <div className="header-banner">
        <div className="banner-breadcrumb">
          <Link>home</Link> <MdArrowForwardIos />
          <span>movie all</span>
        </div>
        <div className="banner-heading">
          <h4>Movie all</h4>
        </div>
      </div>
    </div>
  );
}
