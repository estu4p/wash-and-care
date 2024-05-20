import { img_hero } from "@/assets/images";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Category from "./components/Category";
import ArticleCard from "./components/ArticleCard";

const HomeArticle = () => {
  const categories = [
    { title: "Informasi", color: "text-blue-500 bg-blue-200" },
    { title: "Tips", color: "text-green-500 bg-green-200" },
    { title: "Viral", color: "text-red-500 bg-red-200" },
    { title: "Promo", color: "text-purple-500 bg-purple-200" },
  ];

  return (
    <section className="relative max-container padding-container mt-[170px]">
      <div className="w-full text-center">
        <h1 className="text-biru-700 font-medium text-4xl leading-[1.4]">
          Artikel Perawatan dan Infomasi Barang Kesayangan Anda
        </h1>
        <p className="text-gray-600 mt-7 lg:mt-4 text-lg">
          Temukan informasi mengenai barang kesayangan anda
        </p>
        <div className="border rounded-md border-biru-200 mx-auto p-1 w-max mt-9 flex">
          <input
            type="text"
            placeholder="Temukan artikel"
            className="text-biru-200 placeholder:text-biru-200 ml-2 focus:outline-none bg-transparent"
          />
          <button className="bg-black text-white py-1 px-4 rounded-md">
            Cari
          </button>
        </div>
      </div>
      {/* List of articel */}
      <List_Article />
      {/*  */}
      <div className="flex items-start justify-between mt-6 relative h-20">
        <button className="flexCenter text-biru-700">
          <FontAwesomeIcon icon={faArrowLeft} width={32} height={32} />
          <span className="">Sebelumnya</span>
        </button>
        <div className="flexCenter gap-12 cursor-pointer max-sm:absolute max-sm:bottom-0 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2">
          <div className="w-4 h-4 bg-kuning-500 rounded-full flexCenter p-4 bg-opacity-50 relative -mr-4">
            1
          </div>
          <div className="">2</div>
          <div className="">3</div>
          {/* <div className="">4</div>
          <div className="">5</div> */}
          <div className="">....</div>
        </div>
        <button className="flexCenter text-biru-700 cursor-pointer">
          <span className="">Berikutnya</span>
          <FontAwesomeIcon icon={faArrowRight} width={32} height={32} />
        </button>
      </div>
      {/* category */}
      <hr className="bg-gray-400 h-[2px] mb-3 mt-10 sm:mt-0" />
      <h3 className="text-center font-medium text-biru-700 text-2xl mt-12">
        Baca artikel berdasarkan kategori
      </h3>
      <div className="flexCenter flex-wrap gap-3 my-10">
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            color={category.color}
            arrow={category.title}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeArticle;

export const List_Article = () => {
  const articles = [1, 2, 3, 4, 5, 6];
  return (
    <section className="mt-[120px]">
      {/* popular article */}
      <div className="w-full">
        <h1 className="font-medium text-2xl text-biru-700 mb-3">
          Artikel Populer
        </h1>
        <Link href="/article/detail">
          <div className="lg:flex gap-8">
            <Image
              src={img_hero}
              alt="artikel populer"
              className="rounded-2xl min-w-[40%] h-[340px] object-cover object-center"
            />
            <div className="relative">
              <div className="py-2 px-4 bg-blue-200 rounded-md w-fit mt-8 lg:mt-2">
                <span className="text-blue-500">Promo</span>
              </div>
              <h2 className="text-biru-700 font-medium text-3xl mt-3 leading-[1.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <p className="text-biru-100 mt-4 leading-[1.7]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                bibendum, neque sit amet dictum aliquam, metus ex lacinia nunc,
                nec varius eros nisl nec nisi. Nulla facilisi. Ut et semper
                nunc.
              </p>
              <h3 className="text-biru-200 mt-8 lg:absolute bottom-8 left-0">
                24 Mei 2024
              </h3>
            </div>
          </div>
        </Link>
      </div>
      {/* all articles */}
      <h1 className="font-medium text-2xl text-biru-700 mb-3 mt-20">
        Semua Artikel
      </h1>
      <div className="flexCenter min-[1331px]:flexBetween flex-wrap gap-x-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </section>
  );
};
