import { useState } from "react";
import React from "react";
import moment from "moment/moment";
import "./Header.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";

const Header = () => {
  const [time, setTime] = useState(moment());
  const displayDate = time.format("DD MMMM YYYY");

  const setNextDate10 = moment().add(10, "days").calendar();
  const setNextDate90 = moment().add(90, "days").calendar();
  const setNextDate120 = moment().add(120, "days").calendar();
  const setNextDate180 = moment().add(180, "days").calendar();

  return (
    <header className="top">
      <h5>Cabin Maintenance</h5>
      <h2>{displayDate}</h2>

      <Swiper
        className="container header__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="moment">
          <h5>10 day from today</h5>
          <h4>{setNextDate10}</h4>
        </SwiperSlide>
        <SwiperSlide className="moment">
          <h5>90 day from today</h5>
          <h4>{setNextDate90}</h4>
        </SwiperSlide>
        <SwiperSlide className="moment">
          <h5>120 day from today</h5>
          <h4>{setNextDate120}</h4>
        </SwiperSlide>
        <SwiperSlide className="moment">
          <h5>180 day from today</h5>
          <h4>{setNextDate180}</h4>
        </SwiperSlide>
      </Swiper>

      <a href="#mel" className='scroll__down'>Scroll Down</a>
    </header>
  );
};

export default Header;
