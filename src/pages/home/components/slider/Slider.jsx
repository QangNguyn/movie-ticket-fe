import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <div className="slider">
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="slider-content">
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner3.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-content">
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/banner-02.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-content">
              <img
                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
