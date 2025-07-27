import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper"; // 👈 Import type

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FlightCarouselSwiper.css";
import { FlightPreviewType } from "../../object/flightPreview";
import FlightCard from "../FlightCard/FlightCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  flights: FlightPreviewType[];
  onSelect: (flight: FlightPreviewType) => void;
};

const FlightCarouselSwiper: React.FC<Props> = ({ flights, onSelect }) => {
  const swiperRef = useRef<SwiperClass | null>(null); // 👈 Đúng type

  useEffect(() => {
    if (swiperRef.current && flights.length > 0) {
      swiperRef.current.slideToLoop(0);
    }
  }, [flights]);

  return (
    <div className="flight-carousel-container">
      <Swiper
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)} // 👈 Khai báo rõ kiểu
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {flights.map((flight) => (
          <SwiperSlide key={flight.departureTime}>
            <div onClick={() => onSelect(flight)}>
              <FlightCard
                flight={flight}
                image={flight.toAirport.city.imageUrl}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow" />
          <div className="swiper-button-next slider-arrow" />
        </div>
    </div>
  );
};

export default FlightCarouselSwiper;
