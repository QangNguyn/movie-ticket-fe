import React, { useState } from "react";
import "./detail.scss";
import Banner from "../../components/Banner/Banner";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import MovieItem from "../../components/movieItem/MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import TrailerModal from "../../components/TrailerModal/TrailerModal";

export default function Detail() {
  const [modalShow, setModalShow] = useState(false)
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
    <div className="detail-movie">
      <Banner />
      <Container>
        <div className="detail-container">
          <h4 className="movie-name">The Pursuit of Dreams</h4>
          <Link>Animation </Link>
          <span>/ 180 Mins</span>
          <div className="movie-thumbnail">
            <Row>
              <Col xs={12} lg={5}>
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/img-3-gallery-slide.jpg"
                  alt=""
                />
              </Col>
              <Col xs={12} lg={7}>
                <div className="trailer-thumbnail">
                  <img
                    src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-08.jpg"
                    alt=""
                  />
                  <button className="link-trailer" onClick={()=> {
                    setModalShow(true)
                  }}>
                    <BsFillPlayFill />
                  </button>
                  <TrailerModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <ul className="movie-info-text">
            <li>
              <span className="info-title">Director: </span>
              <span>Christine Eve</span>
            </li>
            <li>
              <span className="info-title">Director: </span>
              <span>Christine Eve</span>
            </li>
            <li>
              <span className="info-title">Director: </span>
              <span>Christine Eve</span>
            </li>
            <li>
              <span className="info-title">Director: </span>
              <span>Christine Eve</span>
            </li>
            <li>
              <span className="info-title">Director: </span>
              <span>Christine Eve</span>
            </li>
          </ul>
          <div className="movie-cast">
            <h2>Top Cast</h2>
            <div className="cast-container">
              <div className="cast-item">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-01.jpg"
                  alt=""
                />
                <div className="cast-info">
                  <h4 className="cast-name">Le Tung Duong</h4>
                  <p className="cast-description">as Ton Ngo Khong</p>
                </div>
              </div>
              <div className="cast-item">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-01.jpg"
                  alt=""
                />
                <div className="cast-info">
                  <h4 className="cast-name">Le Tung Duong</h4>
                  <p className="cast-description">as Ton Ngo Khong</p>
                </div>
              </div>
              <div className="cast-item">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-01.jpg"
                  alt=""
                />
                <div className="cast-info">
                  <h4 className="cast-name">Le Tung Duong</h4>
                  <p className="cast-description">as Ton Ngo Khong</p>
                </div>
              </div>
              <div className="cast-item">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-01.jpg"
                  alt=""
                />
                <div className="cast-info">
                  <h4 className="cast-name">Le Tung Duong</h4>
                  <p className="cast-description">as Ton Ngo Khong</p>
                </div>
              </div>
              <div className="cast-item">
                <img
                  src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/cast-01.jpg"
                  alt=""
                />
                <div className="cast-info">
                  <h4 className="cast-name">Le Tung Duong</h4>
                  <p className="cast-description">as Ton Ngo Khong</p>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-storyline">
            <h2>Story Line</h2>
            <div className="storyline-content">
              In a small town where everyone knows everyone, a peculiar incident
              starts a chain of events that leads to a child’s disappearance,
              which begins to tear at the fabric of an otherwise-peaceful
              community. Dark government agencies and seemingly malevolent
              supernatural forces converge on the town, while a few of the
              locals begin to understand that more is going on than meets the
              eye.
            </div>
          </div>
          <div className="movie-like-this">
            <h2>More Movies Like This</h2>
            <Swiper slidesPerView={4} spaceBetween={20}>
              {list.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieItem movie={movie} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
