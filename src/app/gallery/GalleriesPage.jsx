import {
  img_hero,
  img_our_service,
  nike_blue,
  promo2,
  promo_card,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const GalleriesPage = () => {
  return (
    <section className="max-container padding-container mt-[170px] max-xs:px-3">
      {/* title */}
      <div className="w-full text-center">
        <h1 className="text-biru-700 font-medium text-4xl leading-[1.4]">
          Galeri Workshop Wash and Care
        </h1>
        <p className="text-gray-600 mt-7 lg:mt-4 text-lg">
          Temukan hasil kerja worksop Wash and Care di berbagai kota
        </p>
      </div>
      {/* images */}
      <div className="my-5 mx-auto gap-x-5 max-[350px]:columns-1 columns-2 md:columns-3 lg:columns-4 mt-20">
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={img_hero}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya!
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={nike_blue}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={promo2}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={img_our_service}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={nike_blue}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={promo_card}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={promo2}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
        <div className="w-full mt-[10px] break-inside-avoid">
          <Image
            src={img_hero}
            alt="image galleries wnc"
            loading="lazy"
            className="max-w-full rounded-[15px] brightness-90"
          />
          <p className="mt-2 px-1 leading-tight mb-5 font-medium ">
            Sepatu ke menjadi keren ya! ah masak siih
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleriesPage;
