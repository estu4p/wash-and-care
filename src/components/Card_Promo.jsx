import React from "react";
import Image from "next/image";
import Link from "next/link";
import { promo1, promo2, promo_card } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faThumbsUp, faClock } from "@fortawesome/free-solid-svg-icons";

const Card_Promo = (props) => {
  const { title, desc, type } = props;
  return (
    <div className="flex flex-col w-72 border border-hijau-700 rounded-2xl p-2">
      <div className="relative  ">
        <Image
          src={promo2}
          alt="image card promo"
          width={270}
          height={270}
          className="rounded-[6px] object-cover object-center max-h-[270px] "
        />
        {/* Type */}
        {type === "popular" && <Popular />}
        {type === "best seller" && <Best />}
        {type === "limited" && <Limited />}
      </div>
      <h3 className="font-semibold text-biru-700 text-2xl mt-4">{title}</h3>
      <h5 className="font-medium text-sm text-biru-100 leading-5 mt-1">
        {desc}
      </h5>
      <div className="w-full flexStart mt-3">
        <Link
          href="#"
          className="bg-biru-700 text-white font-medium text-center rounded-lg py-2 px-3 mt-3"
        >
          Lihat Promo
        </Link>
      </div>
    </div>
  );
};

export default Card_Promo;

const Popular = () => {
  return (
    <div className="flexCenter gap-2 absolute bottom-4 left-5 bg-red-200 py-2 px-4 rounded-32">
      <FontAwesomeIcon icon={faFire} className="text-red-500 w-4" />
      <span className="font-medium text-sm text-red-500">Popular</span>
    </div>
  );
};

const Best = () => {
  return (
    <div className="flexCenter gap-2 absolute bottom-4 left-5 bg-blue-200 py-2 px-4 rounded-32">
      <FontAwesomeIcon icon={faThumbsUp} className="text-biru-500 w-4" />
      <span className="font-medium text-sm text-biru-500">Best Seller</span>
    </div>
  );
};

const Limited = () => {
  return (
    <div className="flexCenter gap-2 absolute bottom-4 left-5 bg-green-200 py-2 px-4 rounded-32">
      <FontAwesomeIcon icon={faClock} className="text-hijau-500 w-4" />
      <span className="font-medium text-sm text-hijau-500">Popular</span>
    </div>
  );
};
