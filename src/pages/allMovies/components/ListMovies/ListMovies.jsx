import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./listMovie.scss";
import MovieItem from "../../../../components/movieItem/MovieItem";
export default function ListMovies() {
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
    <div className="list-movie">
      <Container>
        <Row>
          {list.map((movie) => (
            <Col sx={12} lg={3} key={movie.id}>
              <MovieItem movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
