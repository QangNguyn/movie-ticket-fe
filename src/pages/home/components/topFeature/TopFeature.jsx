import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiMovie2Fill } from "react-icons/ri";
import "./topFeature.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieItem from "../../../../components/movieItem/MovieItem";
import FeatureMovie from "../../../../components/featureMovie/FeatureMovie";

export default function TopFeature() {
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
    <div className="top-feature">
      <Container>
        <RiMovie2Fill />
        <Row>
          <Col xs={12} lg={6}>
            <p className="sub-title">Checkout Movies</p>
            <h4 className="title">Top Featured Movies</h4>
          </Col>
          <Col xs={12} lg={6}>
            <span className="intro">
              Phasellus non cursus ligula, sed mattis urna. Aenean ac tor
              gravida, volutpat quam eget, consequat elit.
            </span>
          </Col>
        </Row>
        <div className="feature-wrap">
          <Swiper slidesPerView={3} spaceBetween={20}>
            {list.map((movie) => (
              <SwiperSlide key={movie.id}>
                <FeatureMovie movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <div className="overlay"></div>
    </div>
  );
}
