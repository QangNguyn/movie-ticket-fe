import React, { useEffect, useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./newMovie.scss";
import MovieItem from "../../../../components/movieItem/MovieItem";
import movieRequest from "../../../../requests/movieRequest";
import Loading from "../../../../components/Loading/Loading";

export default function NewMovies() {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMoviesNowPlaying = async () => {
    const response = await movieRequest.getMovieNowPlaying();
    if (response.data.length > 0) {
      setMoviesNowPlaying(response.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getMoviesNowPlaying();
  }, []);
  return (
    <div className="new-movie">
      <Container>
        <div className="new-movie__heading">
          <RiMovie2Fill />
          <p className="sub-heading">Watch New Movies</p>
          <h4>Movies Now Playing</h4>
        </div>
        {isLoading ? (
          <Loading />
        ) : moviesNowPlaying.length > 0 ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {moviesNowPlaying.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieItem movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <h2>Updating...</h2>
        )}
      </Container>
    </div>
  );
}
