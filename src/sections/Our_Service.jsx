"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider_OurService from "@/components/Slider_OurService";
import { OUR_TREATMENT } from "@/constants";
import React from "react";
import "swiper/css";

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
        <div className="mt-10 h-full w-full relative">
          <Swiper slidesPerView={1}>
            {OUR_TREATMENT.map((item) => {
              return (
                <SwiperSlide
                  className="max-w-fit mr-5 md:mr-8 lg:mr-14"
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
