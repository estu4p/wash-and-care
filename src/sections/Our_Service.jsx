"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Slider_OurService from "@/components/Slider_OurService";
import { OUR_TREATMENT } from "@/constants";
import { Pagination } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Our_Service = () => {
  return (
    <section className="max-container mt-[120px] ">
      <div className="">
        {/* top */}
        <div className="relative flexCenter flex-col padding-container">
          <hr className="border-b-2 border-kuning-500 w-[48px]" />
          <span className="text-kuning-500 font-medium capitalize mt-1">
            our best service
          </span>
          <h2 className="font-semibold text-[32px] text-biru-700 capitalize leading-tight my-2">
            Our Service
          </h2>
          <p className="text-biru-100 sm:w-2/3 leading-tight md:leading-6 text-center">
            Kami memberikan berbagai macam layanan untuk perawatan barang
            kesayangan anda yang dikerjakan oleh tim kami yang sudah
            berpengalaman dan professional.
          </p>
        </div>
        {/* bottom */}
        <div className="mt-10 h-full w-full relative z-30">
          <Swiper
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              650: {
                slidesPerView: 1,
              },
              802: {
                slidesPerView: 1.2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            <SliderButton />
            {OUR_TREATMENT.map((item) => {
              return (
                <SwiperSlide
                  className="max-w-fit mr-4 md:mr-8 lg:mr-14"
                  key={item.key}
                >
                  {" "}
                  <Slider_OurService title={item.title} desc={item.desc} />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <Slider_OurService /> */}
        </div>
      </div>
    </section>
  );
};

export default Our_Service;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    // <div className="flexEnd padding-container gap-4 relative -mt-7 z-10 lg:-mt-5 :">
    <div className="flexBetween px-4 sm:px-8 w-full absolute z-20 top-[30%]">
      <button
        className="underline underline-offset-[5px] text-white font-semibold bg-white p-3 rounded-full bg-opacity-25 hover:bg-opacity-40"
        onClick={() => swiper.slidePrev()}
        // disabled={slideBegOrNot.isFirst}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-8 w-8 flexCenter" />
      </button>
      <button
        className="underline underline-offset-[5px] text-white font-semibold bg-white p-3 rounded-full bg-opacity-25 hover:bg-opacity-40"
        onClick={() => swiper.slideNext()}
        // disabled={slideBegOrNot.isLast}
      >
        <FontAwesomeIcon icon={faChevronRight} className="h-8 w-8 flexCenter" />
      </button>
    </div>
  );
};
