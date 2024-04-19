"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  bg_hero,
  img_hero,
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
} from "@/assets/images";
import Slider_Hero from "@/components/Slider_Hero";
import "swiper/css";
import { SLIDER_HERO } from "@/constants";

const Hero = () => {
  return (
    <section className="max-container padding-container w-full pt-28 md:pt-32 lg:p-0 ">
      <div className="flexCenter flex-col lg:flex-row lg:gap-[104px] lg:items-start">
        {/* left */}
        <div className="flexCenter flex-col lg:w-[70%] lg:ps-20 3xl:ps-0 lg:h-[620px] lg:mt-12">
          <h1 className="font-bold text-[40px] text-biru-700 capitalize leading-tight">
            the cleanliness of your shoes{" "}
            <span className="text-outline font-sans text-[46px]">
              is part of your faith
            </span>
          </h1>
          <p className="mt-6 text-biru-100">
            Kami melakukan perawatan secara profesional, dengan teknik khusus,
            serta menggunakan alat dan bahan premium untuk melakukan perawatan.
          </p>
          <div className="flexCenter flex-col gap-3 w-full mt-8 lg:flex-row">
            <Link
              href="/"
              className="py-4 w-full text-center rounded-32 bg-hijau-500 text-white font-semibold text-sm "
            >
              Order Now
            </Link>
            <Link
              href="/"
              className="py-3 w-full text-center rounded-32 bg-white border border-biru-700 text-biru-700 font-semibold text-sm flexCenter gap-3 "
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-5 text-kuning-500"
              />
              Location
            </Link>
          </div>
          {/* our sponsorship */}
          <div className="mt-8 w-full">
            <span className="text-biru-200">Our Sponsorship</span>
            <div className="flexStart gap-x-8 flex-wrap">
              <Image src={sponsor1} alt="sponsor 1" width={83} height={64} />
              <Image src={sponsor2} alt="sponsor 2" width={83} height={64} />
              <Image src={sponsor3} alt="sponsor 3" width={83} height={64} />
              <Image src={sponsor4} alt="sponsor 4" width={83} height={64} />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="relative mt-12 w-full md:px-12 lg:mt-0 lg:px-0 overflow-hidden">
          <Image
            src={img_hero}
            alt="image hero"
            width={907}
            height={720}
            className="w-full rounded-3xl object-cover object-center h-[452px] brightness-[0.85] md:h-[523px] lg:rounded-none lg:rounded-bl-[80px] lg:h-[620px]"
          />
          {/* Slider Hero */}
          <div className="relative bottom-32 left-0">
            <div className="pl-12">
              <Swiper spaceBetween={16}>
                {SLIDER_HERO.map((item) => (
                  <SwiperSlide key={item.key} className="max-w-fit">
                    <Slider_Hero title={item.label} desc={item.desc} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <Image
          src={bg_hero}
          alt="background hero"
          width={741}
          height={523}
          className="absolute top-0 left-0 -z-30"
        />
      </div>
    </section>
  );
};

export default Hero;
