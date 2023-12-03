import React from "react";
import "./notFound.scss";
import notFound from "../../assets/images/404.png";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Banner />
      <div className="page-not-found">
        <img src={notFound} alt="" />
        <h2>Sorry we can't find that page!</h2>
        <p>The page you are looking for was never existed.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
}
