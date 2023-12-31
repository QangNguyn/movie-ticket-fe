import React from "react";
import MovieItem from "../../../../components/movieItem/MovieItem";
import { RiMovie2Fill } from "react-icons/ri";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./comingSoon.scss";

export default function ComingSoon() {
  const list = [
    {
      id: 1,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-10-768x660.jpg",
      category: "Comedy",
      duration: "180",
      coming_soon: true,
    },
    {
      id: 2,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg",
      category: "Comedy",
      duration: "180",
      coming_soon: false,
    },
    {
      id: 3,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg",
      category: "Comedy",
      duration: "180",
      coming_soon: false,
    },
    {
      id: 4,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg",
      category: "Comedy",
      duration: "180",
      coming_soon: false,
    },
    {
      id: 5,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg",
      category: "Comedy",
      duration: "180",
      coming_soon: false,
    },
    {
      id: 6,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg",
      category: "Comedy",
      duration: "180",
      coming_soon: false,
    },
  ];
  return (
    <div className="coming-soon">
      <Container>
        <div className="new-movie__heading">
          <RiMovie2Fill />
          <p className="sub-heading">New Upcoming Movies</p>
          <h4>Movies Coming Soon</h4>
        </div>
        <Swiper slidesPerView={4} spaceBetween={20}>
          {list.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
