import React from "react";
import Image from "next/image";
import Link from "next/link";
import { promo_card } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Card_Promo = () => {
  return (
    <div className="flex flex-col w-72">
      <div className="relative">
        <Image
          src={promo_card}
          alt="image card promo"
          width={288}
          height={320}
          className="rounded-3xl object-cover object-center h-80"
        />
        {/* Rating */}
        <div className="flexCenter gap-2 absolute bottom-4 left-5 bg-red-200 py-2 px-4 rounded-32">
          <FontAwesomeIcon icon={faFire} className="text-red-500 w-4" />
          <span className="font-medium text-sm text-red-500">Popular</span>
        </div>
      </div>
      <h3 className="font-semibold text-biru-700 text-2xl mt-4">
        Promo Ramadhan
      </h3>
      <h5 className="font-medium text-sm text-biru-100 leading-5 mt-2">
        Promo khusus bulan ramadhan, jangan sampai kelewatan!
      </h5>
      <Link
        href="#"
        className="bg-hijau-500 bg-opacity-80 text-green-900 font-medium text-center rounded-lg py-2 px-6 mt-3"
      >
        See Promo
      </Link>
    </div>
  );
};

export default Card_Promo;
