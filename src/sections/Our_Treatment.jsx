import { icon_export } from "@/assets/icons";
import { bg_vector1, bg_vector2, img_our_treatment } from "@/assets/images";
import Treatment from "@/components/Treatment";
import {
  faAward,
  faHeadphones,
  faMedal,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Our_treatment = () => {
  return (
    <section className="relative max-container mt-[120px] w-full ">
      <div className="padding-container flex items-start flex-col gap-14 w-full lg:flexBetween lg:flex-row ">
        {/* left */}
        <div className="w-full">
          <div className="flex items-center gap-2 relative -left-3 lg:-left-12 top-0 mb-3">
            <hr className="border-b-2 border-kuning-500 w-[42px]" />
            <span className="text-kuning-500 font-medium capitalize">
              ini tim kami
            </span>
          </div>
          <h2 className="font-semibold text-[32px] text-biru-700 capitalize leading-tight">
            Bagaimana Tim Kami Bekerja
          </h2>
          <p className="text-biru-100 my-4 sm:w-2/3 lg:w-full leading-tight md:leading-6">
            Kami melakukan perawatan dan perbaikan barang kesayangan anda secara
            profesional dan terpercaya.
          </p>
          {/* <span className="font-semibold text-biru-200">Layanan Kami</span> */}
          <div className="flexBetween mt-4 max-[570px]:w-full w-2/3 lg:w-5/6 mx-auto flex-wrap ">
            <div className="flexBetween flex-col gap-6 mx-auto sm:mx-0 mb-6 min-[368px]:mb-0">
              <Treatment
                icon={faMedal}
                title={"Expert Team"}
                desc={"Kami adalah tim yang berpengalaman"}
              />
              <Treatment
                icon={faTruckFast}
                title={"Free Delivery"}
                desc={"Gratis antar maksimal 5 km"}
              />
            </div>
            <div className="flexBetween flex-col gap-6 mx-auto sm:mx-0">
              <Treatment
                icon={faAward}
                title={"Warranty"}
                desc={"Jaminan garansi apabila terdapat kerusakan"}
              />
              <Treatment
                icon={faHeadphones}
                title={"Customer Service"}
                desc={"Dukungan customer service yang responsif"}
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flexCenter w-full lg:justify-end">
          <Image
            src={img_our_treatment}
            alt="Image Our Treatment"
            className="w-[528px] h-[459px]"
          />
        </div>
      </div>
      {/* background */}
      <div className="absolute -top-60 md:-top-56 max-sm:-right-56 -right-44 ">
        <Image
          src={bg_vector1}
          alt="bg blue blue"
          width={438}
          height={494}
          className="relative top-0 -z-50 w-[438px] h-[494px]"
        />
        <Image
          src={bg_vector2}
          alt="bg blue blue"
          width={438}
          height={494}
          className="absolute top-28 lg:top-44 -z-40 w[438px] h-[494px]"
        />
      </div>
    </section>
  );
};

export default Our_treatment;
