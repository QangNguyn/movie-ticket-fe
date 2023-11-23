import React from "react";
import "./featureMovie.scss";
import { Link } from "react-router-dom";
import { BsFillStickiesFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";

export default function FeatureMovie({ movie }) {
  return (
    <>
      <div className="feature-item">
        <Link>
          <img src={movie.thumbnail} alt="" />
        </Link>
        <div className="movie-info">
          <Link className="movie-name">{movie.name}</Link>
          <Link className="movie-category">
            <BsFillStickiesFill />
            {movie.category}
          </Link>{" "}
          /{" "}
          <span className="movie-duration">
            <BiSolidTimeFive />
            {movie.duration} min
          </span>
          <div>
            <button> Watch Trailer</button>
            <button> Get ticket</button>
          </div>
        </div>
      </div>
    </>
  );
}
