import React, { useState } from "react";
import "./movieItem.scss";
import { Link } from "react-router-dom";
import TrailerModal from "../TrailerModal/TrailerModal";

export default function MovieItem({ movie }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="movie-item">
      <img src={movie.thumbnail} alt="" />
      <div className="movie-info">
        <span className="movie-item-category">{movie.category}</span> /{" "}
        <span className="movie-item-duration">{movie.duration} min</span>
        <Link className="movie-item-name">{movie.name}</Link>
        <button
          onClick={() => {
            setModalShow(true);
          }}
        >
          {movie.coming_soon ? "Watch Trailer" : "Get ticket"}
        </button>
        <TrailerModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          linkTrailer={movie?.trailer}
        />
      </div>
    </div>
  );
}
