import React, { useState } from "react";
import "./movieItem.scss";
import { Link } from "react-router-dom";
import TrailerModal from "../TrailerModal/TrailerModal";
import GetTicketModal from "../GetTicketModal/GetTicketModal";

export default function MovieItem({ movie }) {
  const [modalTrailerShow, setModalTrailerShow] = useState(false);
  const [modalGetTicketShow, setModalGetTicketShow] = useState(false);
  return (
    <div className="movie-item">
      <img src={movie.banner} alt="" />
      <div className="movie-info">
        <span className="movie-item-category">{movie.categories[0].name}</span>{" "}
        / <span className="movie-item-duration">{movie.duration} min</span>
        <Link to={`/movie/${movie.slug}`} className="movie-item-name">
          {movie.name}
        </Link>
        {movie.coming_soon ? (
          <button
            onClick={() => {
              setModalTrailerShow(true);
            }}
          >Watch trailer</button>
        ) : (
          <button
          onClick={() => {
            setModalGetTicketShow(true);
          }}
          >Get ticket</button>
        )}
        <TrailerModal
          show={modalTrailerShow}
          onHide={() => setModalTrailerShow(false)}
          linkTrailer={movie?.link_trailer}
        />
        <GetTicketModal show={modalGetTicketShow} onHide={()=> setModalGetTicketShow(false)}/>
      </div>
    </div>
  );
}
