import { useEffect, useState } from "react";
import "./detail.scss";
import Banner from "../../components/Banner/Banner";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import MovieItem from "../../components/movieItem/MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import TrailerModal from "../../components/TrailerModal/TrailerModal";
import movieRequest from "../../requests/movieRequest";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "../../pages/notFound/NotFound";

export default function Detail() {
  let { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [detail, setDetail] = useState({
    isLoading: true,
    data: {},
    isError: false,
  });
  const [moviesCategory, setMoviesCategory] = useState({
    isLoading: true,
    moviesCategory: [],
  });
  const getDetail = async (slug) => {
    const response = await movieRequest.getDetail(slug);
    if (response.statusCode == 200) {
      setDetail({
        isLoading: false,
        data: response.data,
      });
    } else {
      setDetail({
        ...detail,
        isError: true,
      });
    }
  };
  const getMovieByCategory = async (id) => {
    const response = await movieRequest.getMovieByCategory(id);
    if (response.statusCode == 200) {
      const data = response.data.filter((movie) => movie.id !== detail.data.id);
      console.log({ id, data });
      setMoviesCategory({
        isLoading: false,
        moviesCategory: data,
      });
    }
  };
  useEffect(() => {
    setDetail({ isLoading: true , data: []});
    getDetail(slug);
  }, [slug]);

  useEffect(() => {
    if (!detail.isLoading) {
      getMovieByCategory(detail.data.categories[0].id);
    }
  }, [detail]);
  const {
    name,
    banner,
    director,
    description,
    duration,
    link_trailer,
    performers,
    categories,
  } = detail.data;
  const markup = { __html: description };
  return (
    <>
      {!detail.isError ? (
        <>
          {!detail.isLoading ? (
            <div className="detail-movie">
              <Banner />
              <Container>
                <div className="detail-container">
                  <h4 className="movie-name">{name}</h4>
                  <Link>{categories[0].name}</Link>
                  <span>/{duration} mins</span>
                  <div className="movie-thumbnail">
                    <Row>
                      <Col xs={12} lg={5}>
                        <img src={performers[0].thumbnail} alt="" />
                      </Col>
                      <Col xs={12} lg={7}>
                        <div className="trailer-thumbnail">
                          <img src={banner} alt="" />
                          <button
                            className="link-trailer"
                            onClick={() => {
                              setModalShow(true);
                            }}
                          >
                            <BsFillPlayFill />
                          </button>
                          <TrailerModal
                            linkTrailer={link_trailer}
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
                      <span>{director.name}</span>
                    </li>
                    <li>
                      <span className="info-title">Time: </span>
                      <span>{duration} mins</span>
                    </li>
                    <li>
                      <span className="info-title">Category: </span>
                      <span>
                        {categories.map((category) => (
                          <span key={category.id}>{category.name}, </span>
                        ))}
                      </span>
                    </li>
                    <li>
                      <span className="info-title">Writer: </span>
                      <span>
                        {detail.data.writer ? detail.data.writer : "Update..."}
                      </span>
                    </li>
                  </ul>
                  <div className="movie-cast">
                    <h2>Top Cast</h2>
                    <div className="cast-container">
                      {performers?.map((performer) => (
                        <div className="cast-item" key={performer.id}>
                          <img src={performer.thumbnail} alt="" />
                          <div className="cast-info">
                            <h4 className="cast-name">{performer.name}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="movie-storyline">
                    <h2>Story Line</h2>
                    <div className="storyline-content">
                      <div dangerouslySetInnerHTML={markup} />
                    </div>
                  </div>
                  <div className="movie-like-this">
                    <h2>More Movies Like This</h2>

                    {!moviesCategory.isLoading ? (
                      <Swiper slidesPerView={4} spaceBetween={20}>
                        {moviesCategory.moviesCategory.map((movie) => (
                          <SwiperSlide key={movie.id}>
                            <MovieItem movie={movie} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <Row>
                        <Col xs={3}>
                          <Skeleton height={250} />
                        </Col>
                        <Col xs={3}>
                          <Skeleton height={250} />
                        </Col>
                        <Col xs={3}>
                          <Skeleton height={250} />
                        </Col>
                        <Col xs={3}>
                          <Skeleton height={250} />
                        </Col>
                      </Row>
                    )}
                  </div>
                </div>
              </Container>
            </div>
          ) : (
            <span>Loading...</span>
          )}
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
