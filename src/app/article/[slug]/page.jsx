import React from "react";
import Category from "../components/Category";
import Image from "next/image";
import { img_hero } from "@/assets/images";
import Link from "next/link";
import ArticleCard from "../components/ArticleCard";

const page = () => {
  return (
    <section className="max-container mt-[130px] padding-container">
      <div className="text-center max-w-[730px] mx-auto">
        <div className="flexCenter gap-6">
          <Category title="Informasi" color="text-blue-500 bg-blue-200 pr-4" />
          <span className="text-biru-200">24 Mei 2024</span>
        </div>
        <h1 className="text-biru-700 leading-[1.5] text-4xl font-medium mt-6 capitalize">
          Tips Agar Warna Sepatu Kanvas Tidak Pudar!
        </h1>
        <p className="text-gray-600 leading-[1.8] font-light mt-5 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          adipisci! Facere nisi eligendi maxime ea esse, odit non omnis
          excepturi, in enim quasi, dolore deserunt repudiandae nulla aspernatur
          nemo amet.
        </p>
        <Image
          src={img_hero}
          alt="img_hero"
          className="w-[730px] h-[350px] lg:h-[410px] object-cover object-center rounded-xl mt-12"
        />
        <div className="text-justify mt-8">
          <p className="text-gray-600 leading-[1.8] font-light">
            3 Cara Terbaik Mengembalikan Suede yang Mengeras – Bahan suede
            memang selalu menjadi pilhan bagi kalian yang ingin tampil beda.
            Namun perawatan yang tidak mudah pada bahan suede sepertinya sudah
            tidak asing lagi ya. Bahan suede memang dikenal sebagai bahan yang
            sangat sentsitif terhadap berbagai macam pembersih sepatu. Jika
            kalian salah memilih pembersih sepatu, bahan suede akan dapat
            berubah menjadi gelap bahkan mengeras. Disini kita mau kasih tau ke
            kalian beberapa cara mengembalikan bahan suede yang mengeras
          </p>
          <h2 className="text-biru-700 font-medium text-2xl mt-6">
            Ini 3 Cara Terbaik Mengembalikan Suede yang Mengeras
          </h2>
          <h2 className="text-biru-700 font-medium text-2xl mt-6">
            1. Eraser Suede
          </h2>
          <p className="text-gray-600 leading-[1.8] font-light mt-2">
            Penggunaan eraser suede memang dianjurkan dalam proses membersihkan
            kotoran atau noda gelap pada bagian-bagian tertentu. Proses ini
            membutuhkan kesabaran dalam pengerjaannya agar dapat maksimal.
            Layaknya menghapus tuilisan di kertas, aplikasikan hal tersebut saat
            proses membersihkan noda pada suede sepatu
          </p>
          <h2 className="text-biru-700 font-medium text-2xl mt-6">
            2. Spons Suede Spons
          </h2>
          <p className="text-gray-600 leading-[1.8] font-light mt-2">
            suede bisa menjadi alat untuk mengeluarkan kotoran yang mengendap.
            Proses tersebut dilakukan secara perlahan. Fungsi lain dari spons
            suede itu sendiri dapat mengembalikan suede yang mengeras akibat
            terkena air. 3. Nail Buffer Yang satu ini mungkin tidak asing bagi
            kaum hawa ya. Tapi jangan salah, barang ini dapat digunakan bagi
            kalian yang sedang mencari cara mengembalikan bahan suede yang sudah
            mengeras. Barang ini bisa kalian pakai sebagai pengganti sikat
            khusus sepatu suede yang jauh lebih lembut. Untuk mendapatkan hasil
            yang lebih maksimal kalian bisa bawa sepatu kalian ke tempat yang
            memang sudah dipercaya dan serahkan kepada yang memang sudah ahli
            dalam pengerjaan bahan suede. Shoes and Care tetap menjadi pilihan
            kebanyakan orang untuk merawat berbagai jenis material sepatu.
            Semoga bermanfaat yaa
          </p>
          <h2 className="text-biru-700 font-medium text-2xl mt-6">
            3. Nail Buffer
          </h2>
          <p className="text-gray-600 leading-[1.8] font-light mt-2">
            Yang satu ini mungkin tidak asing bagi kaum hawa ya. Tapi jangan
            salah, barang ini dapat digunakan bagi kalian yang sedang mencari
            cara mengembalikan bahan suede yang sudah mengeras. Barang ini bisa
            kalian pakai sebagai pengganti sikat khusus sepatu suede yang jauh
            lebih lembut. Untuk mendapatkan hasil yang lebih maksimal kalian
            bisa bawa sepatu kalian ke tempat yang memang sudah dipercaya dan
            serahkan kepada yang memang sudah ahli dalam pengerjaan bahan suede.
            Shoes and Care tetap menjadi pilihan kebanyakan orang untuk merawat
            berbagai jenis material sepatu. Semoga bermanfaat yaa
          </p>
        </div>
      </div>
      {/* all article */}
      <div className="mt-20">
        <div className="flexBetween">
          <h3 className="font-medium text-biru-700 text-3xl">
            Baca artikel lainnya
          </h3>
          <Link
            href="/article"
            className="font-semibold text-biru-700 underline underline-offset-[6px] cursor-pointer text-end min-w-fit "
          >
            Lihat semua
          </Link>
        </div>
        <div className="flexCenter min-[1331px]:flexBetween flex-wrap gap-x-4 mt-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <ArticleCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
