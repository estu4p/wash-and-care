import { img_our_service } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Slider_OurService = (props) => {
  const { title, desc } = props;
  return (
    <div className="relative flexCenter flex-col w-full z-10">
      <Image
        src={img_our_service}
        alt="Image our service"
        className="rounded-lg w-[740px] h-[400px] object-cover object-center min-h-[280px] brightness-90 hover:brightness-100"
      />
      <div className="relative z-10 p-4 sm:p-8 rounded-2xl shadow-md bg-gray-100 w-11/12 max-w-[612px] bottom-16">
        {" "}
        {/* bottom-[-50%] min-[557px]:bottom-[-35%] lg:bottom-[-20%] */}
        <h3 className="font-semibold text-biru-700 text-xl">{title}</h3>
        <p className="text-biru-200 text-sm leading-6 mt-4">{desc}</p>
      </div>
    </div>
  );
};

export default Slider_OurService;
