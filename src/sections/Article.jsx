import { nike_blue } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Article = () => {
  return (
    <section className="max-container padding-container mt-[120px]">
      <div className="">
        {/* top */}
        <div className="w-full mb-7">
          <div className="flex items-center gap-2 relative -left-3 lg:-left-12 top-0 mb-3">
            <hr className="border-b-2 border-kuning-500 w-[42px]" />
            <span className="text-kuning-500 font-medium capitalize">
              artikel terbaru
            </span>
          </div>
          <h2 className="font-semibold text-[32px] text-biru-700 capitalize leading-tight">
            Atrikel
          </h2>
          <div className="flexBetween flex-wrap w-full">
            <p className="text-biru-100 my-4 w-3/4 leading-tight md:leading-6 min-w-72 ">
              Temukan artikel terbaru mengenai sepatu dan perawatannya
            </p>
            <Link
              href="/article"
              className="font-semibold text-kuning-500 underline underline-offset-[6px] cursor-pointer text-end min-w-fit "
            >
              Lihat semua
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="flexCenter flex-wrap gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="w-[340px] shadow-lg px-4 py-6 rounded-xl"
              key={index}
            >
              <Image
                src={nike_blue}
                alt="article nike"
                className="w-[340px] h-52 object-cover object-center mb-3 rounded-xl"
              />
              <span className="text-biru-200">25 April, 2024</span>
              <h3 className="text-biru-700 font-semibold text-xl leading-tight">
                Apa yang terjadi jika sepatu anda dicuci dengan asal
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
