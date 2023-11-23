import React, { useContext } from "react";
import Slider from "./components/slider/Slider";
import NewMovies from "./components/newMovies/NewMovies";
import TopFeature from "./components/topFeature/TopFeature";
import Banner from "./components/banner/Banner";
import NewBlog from "./components/newBlog/NewBlog";
import ComingSoon from "./components/comingSoon/ComingSoon";

export default function Home() {
  return (
    <>
      <Slider />
      <NewMovies />
      <Banner />
      <TopFeature />
      <ComingSoon />
      <NewBlog />
    </>
  );
}
