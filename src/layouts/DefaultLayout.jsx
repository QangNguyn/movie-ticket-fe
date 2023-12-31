import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import AllMovies from "@/pages/allMovies/AllMovies";
import Detail from "@/pages/detail/Detail";
import MyAccount from "@/pages/myAccount/MyAccount";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/notFound/NotFound";
import ChooseSeat from "@/pages/chooseSeat/ChooseSeat";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-movie" element={<AllMovies />} />
        <Route path="/movie/:slug" element={<Detail />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/choose-seat" element={<ChooseSeat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
