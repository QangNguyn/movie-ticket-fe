import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./newMovie.scss";
import MovieItem from "../../../../components/movieItem/MovieItem";
export default function NewMovies() {
  const list = [
    {
      id: 1,
      name: "The fifty day",
      thumbnail:
        "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-10-768x660.jpg",
      category: "Comedy",
      duration: "180",
      trailer: "https://www.youtube.com/watch?v=irG-D2iaQgE",
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
    <div className="new-movie">
      <Container>
        <div className="new-movie__heading">
          <RiMovie2Fill />
          <p className="sub-heading">Watch New Movies</p>
          <h4>Movies Now Playing</h4>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
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
