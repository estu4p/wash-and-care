import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Our_service from "@/sections/Our_service";
import Promo from "@/sections/Promo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Promo />
      <Our_service />
    </main>
  );
}
