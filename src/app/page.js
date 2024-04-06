import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Promo from "@/sections/Promo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Promo />
    </main>
  );
}
