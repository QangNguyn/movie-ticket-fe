import React, { useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const headerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
      if (scrollTop == 0) {
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0.5)";
      } else {
        headerRef.current.style.backgroundColor = "rgba(0,0,0,1)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className="d-flex align-items-center justify-content-between"
      ref={headerRef}
    >
      <Link to="/" className="logo">
        <img
          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
          alt=""
        />
      </Link>
      <ul className="d-flex align-items-center menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movie</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li> 
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
      <div className="header-right">
        <AiOutlineSearch />
        <Link to="/account">
          <AiOutlineUser />
        </Link>
      </div>
    </header>
  );
}
