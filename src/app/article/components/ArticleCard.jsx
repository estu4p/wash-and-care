import { img_hero } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = () => {
  return (
    <div className="flex w-full max-w-[380px] mb-12 h-[540px]">
      <Link href="/article/detail">
        <div className="relative flex items-start justify-between flex-col h-[540px]">
          <Image
            src={img_hero}
            alt="semua artikel"
            className="w-[380px] h-[280px] object-cover object-center rounded-xl"
          />
          <div className="">
            <div className="py-2 px-4 bg-hijau-200 rounded-md w-fit mt-6">
              <span className="text-hijau-500">Tips</span>
            </div>
            <h2 className="text-biru-700 leading-[1.6] mt-3 text-xl font-medium">
              Tips Agar Warna Sepatu Kanvas Tidak Pudar!
            </h2>
            <p className="text-biru-100 leading-[1.6] font-light mt-2 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quae aut odio autem! Dolore odit, repudiandae, doloribus.
            </p>
          </div>
          <span className="text-biru-200 font-light">25 Mei 2024</span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
