import React, { useContext } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AllMovies from "../pages/allMovies/AllMovies";
import Detail from "../pages/detail/Detail";
import MyAccount from "../pages/myAccount/MyAccount";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-movie" element={<AllMovies />} />
        <Route path="/movie/:slug" element={<Detail />} />
        <Route path="/account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  );
}
