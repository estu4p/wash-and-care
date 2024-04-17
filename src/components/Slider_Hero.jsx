import { promo_card } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Slider_Hero = () => {
  return (
    <div className="flexStart gap-4 min-w-fit">
      <div className="bg-white px-6 py-5 rounded-[42px] flexCenter gap-4">
        <Image
          src={promo_card}
          alt="Profesional people"
          width={56}
          height={56}
          //   priority
          className="rounded-3xl object-cover object-center w-14 h-14"
        />
        <div className="max-w-[152px] flex flex-col ">
          <span className="font-semibold text-biru-700">Profesional</span>
          <p className="text-xs text-biru-100 leading-4">
            Dikerjakan oleh orang-orang profesional
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider_Hero;
