"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faSprayCanSparkles,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import Card_Promo from "@/components/Card_Promo";
import { PROMO } from "@/constants";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Promo = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <section className="max-container -mt-3 w-full mb-10 ">
      <div className="padding-container mb-10">
        <div className="flex items-center gap-2 relative -left-3 lg:-left-12 top-0">
          <hr className="border-b-2 border-kuning-500 w-[42px]" />
          <span className="text-kuning-500 font-medium capitalize">
            best offer for you
          </span>
        </div>
        <div className="flexBetween w-full flex-wrap lg:flex-nowrap">
          <h2 className="text-biru-700 font-bold text-[32px] w-full pb-4 lg:w-max lg:p-0">
            Our Promo
          </h2>
          <ul className="flexCenter gap-8 font-medium text-lg"></ul>
          <ul className="flexCenter gap-8 font-medium text-lg">
            <Link
              href="/"
              className="rounded-32 py-3 px-6 bg-blue-200 text-biru-500 md:min-w-[136px] text-center flexCenter gap-2"
            >
              <FontAwesomeIcon icon={faTableList} className="w-5" />
              All
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-5 ml-2 md:hidden"
              />
            </Link>
            <Link
              href="/"
              className="rounded-32 py-3 px-6 bg-white text-center text-gray-700 border-2 border-gray-300 hidden md:flexCenter gap-2"
            >
              <FontAwesomeIcon icon={faSprayCanSparkles} className="w-5" />
              Laundry
            </Link>
            <Link
              href="/"
              className="rounded-32 py-3 px-6 bg-white text-center text-gray-700 border-2 border-gray-300 hidden md:flexCenter gap-2"
            >
              <FontAwesomeIcon icon={faBoxesStacked} className="w-5" />
              Product
            </Link>
          </ul>
          <div className="flexCenter gap-4 ">
            <button
              onClick={handlePrev}
              className="bg-gray-300 text-biru-200 rounded-32 w-[60px] h-[52px] flexCenter "
              disabled={slideBegOrNot.isFirst}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-4" />
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-400 text-white rounded-32 w-[60px] h-[52px] flexCenter "
              disabled={slideBegOrNot.isLast}
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="pl-6 lg:pl-20 3xl:pl-0 w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          ref={SlideRef}
          onSlideChange={onSlideChange}
          navigation={false}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1.2,
            },
            450: {
              slidesPerView: 1.3,
            },
            650: {
              slidesPerView: 2,
            },
            802: {
              slidesPerView: 2.5,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {PROMO.map((promo) => {
            return (
              <SwiperSlide key={promo.key} className="max-w-fit">
                <Card_Promo
                  title={promo.title}
                  desc={promo.desc}
                  type={promo.type}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Promo;
