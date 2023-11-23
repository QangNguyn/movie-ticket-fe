import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./login.scss";

export default function MyAccount() {
  const [tab, setTab] = useState("login");
  return (
    <>
      <Banner />
      <div className="form-container">
        <div className="header-account">
          <button
            className={tab == "login" ? "active" : ""}
            onClick={() => {
              setTab("login");
            }}
          >
            Login
          </button>
          <button
            className={tab == "register" ? "active" : ""}
            onClick={() => {
              setTab("register");
            }}
          >
            Register
          </button>
        </div>
        <form action="" className={tab == "login" ? "show" : ""}>
          <div className="form-group">
            <label htmlFor="">Username or email address *</label>
            <input type="text" placeholder="Email or username..." />
          </div>
          <div className="form-group">
            <label htmlFor="">Password *</label>
            <input type="text" placeholder="Password..." />
          </div>
          <input type="submit" value="Log in" />
          <Link className="forgot-link">Lost your password?</Link>
        </form>
        <form action="" className={tab == "register" ? "show" : ""}>
          <div className="form-group">
            <label htmlFor="">Username or email address *</label>
            <input type="text" placeholder="Email or username..." />
          </div>
          <div className="form-group">
            <label htmlFor="">Password *</label>
            <input type="text" placeholder="Password..." />
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm password *</label>
            <input type="text" placeholder="Confirm password..." />
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}
