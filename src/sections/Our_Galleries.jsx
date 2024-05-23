import {
  cleaningShoes,
  img_car1,
  img_car2,
  img_gallery1,
  img_gallery2,
  img_gallery3,
} from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Our_Galleries = () => {
  return (
    <section className="max-container mt-0 lg:mt-[56px]">
      <div className="relative flex flex-col padding-container mb-10">
        <div className="flex items-center gap-2 relative -left-3 lg:-left-12 top-0 mb-1">
          <hr className="border-b-2 border-kuning-500 w-[42px]" />
          <span className="text-kuning-500 font-medium capitalize">
            lihat tim kami bekerja
          </span>
        </div>
        <h2 className="font-semibold text-[32px] text-biru-700 capitalize leading-tight my-2">
          Galeri Kami
        </h2>
        <Link
          href="/gallery"
          className="font-semibold text-kuning-500 underline underline-offset-[6px] cursor-pointer text-end w-full -mt-9"
        >
          Lihat Semua
        </Link>
      </div>
      <Galleries reverse={"animate-loop-scroll"} />
      <div className="mt-6">
        <Galleries reverse={"animate-loop-scroll-reverse"} />
      </div>
    </section>
  );
};

export default Our_Galleries;

export const Galleries = ({ reverse }) => {
  return (
    <>
      <div className="flex overflow-hidden space-x-10 group">
        <div className={`flex space-x-7 ${reverse} group-hover:paused`}>
          {Array.from({ length: 7 }).map((_, i) => (
            <Image
              key={i}
              loading="lazy"
              src={cleaningShoes}
              className="min-w-60 h-60 object-cover object-center"
              alt="Image 1"
            />
          ))}
        </div>
        <div
          className={`flex space-x-7 ${reverse} group-hover:paused`}
          aria-hidden="true"
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <Image
              key={i}
              loading="lazy"
              src={cleaningShoes}
              className="min-w-60 h-60 object-cover object-center"
              alt="Image 1"
            />
          ))}
        </div>
      </div>
    </>
  );
};
