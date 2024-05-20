import { img_hero } from "@/assets/images";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <section className="max-container mt-24">
      <div className="relative flexCenter">
        <Image
          src={img_hero}
          alt="img_aboutUs"
          className="w-full h-[350px] object-cover object-center brightness-[.2]"
        />
        <h1 className="font-bold text-white text-7xl absolute ml-4 sm:m-0">
          Tentang Kami
        </h1>
      </div>
      <div className="padding-container">
        <h3 className="font-medium text-gray-800 text-3xl mt-20">
          Tentang Kami
        </h3>
        <h2 className="text-gray-800 font-semibold text-4xl mt-6 leading-tight">
          Perjalanan Shoes and Care
        </h2>
        <p className="text-gray-600 font-light text-lg mt-8 leading-[1.8]">
          Shoes and Care merupakan jasa perawatan premium sepatu yang pertama di
          Yogyakarta, dan jasa perawatan premium sepatu pertama di Indonesia
          yang berbasis media sosial. Untuk melayani pelanggan, saat ini Shoes
          and Care sudah memiliki lebih dari 70 workshop di 20 kota di
          Indonesia. Kami menangani perawatan sepatu, tas, topi dan dompet
          secara profesional, dengan teknik khusus, serta menggunakan alat dan
          bahan premium untuk melakukan perawatan. <br /> <br />
          Berdiri di Yogyakarta, Shoes and Care mulai memberikan perawatan
          sepatu sejak 12 Oktober 2013. Tragedi erupsi Gunung Kelud pada 14
          Februari 2014, membuat Shoes and Care melahirkan akun media sosial dan
          melayani perawatan sepatu secara online. Sejak saat itu sampai saat
          ini, lebih dari 700.000 pasang sepatu telah ditangani. Pelanggan tidak
          hanya berasal dari Yogyakarta, tetapi juga dari seluruh Indonesia,
          bahkan ada pelanggan yang berasal dari Australia, Singapura, Malaysia,
          dan Amsterdam. <br /> <br />
          Shoes and Care melakukan perawatan sepatu secara profesional, dengan
          teknik khusus, serta menggunakan alat dan bahan premium untuk
          perawatan sepatu, baik produk lokal maupun luar negeri. Selain
          melayani perawatan sepatu, Shoes and Care paham bahwa edukasi
          sangatlah penting untuk meningkatkan kesadaran masyarakat. Maka dari
          itulah, Shoes and Care selalu memberikan tips-tips perawatan sepatu
          dan konsultasi gratis. Shoes and Care juga sering diundang dalam
          berbagai acara untuk memberikan tips dan workshop mengenai perawatan
          sepatu. <br /> <br />
          Kini, Shoes and Care tidak hanya menangani sepatu, tetapi juga tas,
          topi, dan dompet. Menu yang ditawarkan pun makin beragam, mulai
          cleaning, repaint, dan repair. <br />
          <br />
          Beberapa achievement Shoes and Care antara lain: <br />
          Termasuk dalam 50 Usaha yang paling banyak dicari di Indonesia (dari
          Google Singapore, Google ID, dan Mitra Google Indonesia) Talkshow di
          radio, di antaranya Geronimo FM dan Swaragama FM Diliput oleh berbagai
          media, baik media cetak, elektronik, dan online, di antaranya adalah
          Tribun Jogja, Suara Merdeka, Indosiar TV Regio Yogyakarta, Net TV
          Jakarta, Jawa Pos, Radar Jogja, Kompas, RRI, Hai Magazine, Bisnis
          Indonesia, Tabloid Kontan, SWA Magazine, dan The Jakarta Post.
        </p>
      </div>
      <div className="relative flexCenter flex-col mt-24">
        <Image
          src={img_hero}
          alt="image mail"
          className="w-full h-[400px] object-cover object-center brightness-[.2]"
        />
        <div className="absolute text-center">
          <h3 className="font-bold text-5xl capitalize text-white">
            Hubungi Kami
          </h3>
          <div className="flexCenter gap-6 text-white mt-9 text-lg">
            <div className="">
              <FontAwesomeIcon icon={faEnvelope} width={32} height={32} />
              <span>washandcare@mail.com</span>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faPhone} width={32} height={32} />
              <span>+62 812 3456 7890</span>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faLocationDot} width={32} height={32} />
              <span>Jl. Raya Bogor No. 12, Jakarta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
