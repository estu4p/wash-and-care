import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bg_hero, img_hero } from "@/assets/images";

const Hero = () => {
  return (
    <section className="max-container padding-container w-full pt-28 md:pt-32 lg:p-0">
      <div className="flexCenter flex-col lg:flex-row lg:gap-[104px] lg:items-start">
        {/* left */}
        <div className="flexCenter flex-col lg:w-[70%] lg:ps-20 3xl:ps-0 lg:h-[620px]">
          <h1 className="font-bold text-[40px] text-biru-700 capitalize leading-tight">
            the cleanliness of your shoes{" "}
            <span className="text-outline">is part of your faith</span>
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
        </div>
        {/* right */}
        <div className="mt-12 w-full md:px-12 lg:mt-0 lg:px-0 ">
          <Image
            src={img_hero}
            alt="image hero"
            width={907}
            height={720}
            className="w-full rounded-3xl object-cover object-center h-[452px] brightness-[0.85] md:h-[523px] lg:rounded-none lg:rounded-bl-[80px] lg:h-[620px]"
          />
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
