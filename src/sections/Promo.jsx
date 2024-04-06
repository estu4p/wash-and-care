import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faSprayCanSparkles,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import Card_Promo from "@/components/Card_Promo";

const Promo = () => {
  return (
    <section className="relative max-container mt-[120px] padding-container ">
      <div className="flex items-center gap-2 relative -left-3 lg:-left-12 top-0">
        <hr className="border-b-2 border-kuning-500 w-[42px]" />
        <span className="text-kuning-500 font-medium capitalize">
          best offer for you
        </span>
      </div>
      <div className="flexBetween w-full flex-wrap lg:flex-nowrap">
        <h2 className="text-biru-700 font-bold text-[32px] w-full pb-4 lg:w-max lg:p-0">
          Our Promo
        </h2>
        <ul className="flexCenter gap-8 font-medium text-lg">
          {/* {PROMO_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-32 py-3 px-6 bg-white"
            >
              {link.label}
            </Link>
          ))} */}
          <Link
            href="/"
            className="rounded-32 py-3 px-6 bg-hijau-200 text-hijau-700 md:min-w-[136px] text-center flexCenter gap-2"
          >
            <FontAwesomeIcon icon={faTableList} className="w-5" />
            All
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-5 ml-2 md:hidden"
            />
          </Link>
          <Link
            href="/"
            className="rounded-32 py-3 px-6 bg-white text-center text-gray-700 border-2 border-gray-300 hidden md:flexCenter gap-2"
          >
            <FontAwesomeIcon icon={faSprayCanSparkles} className="w-5" />
            Laundry
          </Link>
          <Link
            href="/"
            className="rounded-32 py-3 px-6 bg-white text-center text-gray-700 border-2 border-gray-300 hidden md:flexCenter gap-2"
          >
            <FontAwesomeIcon icon={faBoxesStacked} className="w-5" />
            Product
          </Link>
        </ul>
        <div className="flexCenter gap-4">
          <button className="bg-gray-300 text-biru-200 rounded-32 w-[60px] h-[52px] flexCenter">
            <FontAwesomeIcon icon={faChevronLeft} className="w-4" />
          </button>
          <button className="bg-hijau-500 text-white rounded-32 w-[60px] h-[52px] flexCenter">
            <FontAwesomeIcon icon={faChevronRight} className="w-4" />
          </button>
        </div>
      </div>
      {/* Card */}
      <div className="flexCenter flex-wrap mt-10 gap-8 lg:flexStart">
        <Card_Promo />
        <Card_Promo />
        <Card_Promo />
      </div>
    </section>
  );
};

export default Promo;
