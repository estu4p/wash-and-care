import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Our_Galleries from "@/sections/Our_Galleries";
import Our_Location from "@/sections/Our_Location";
import Our_Service from "@/sections/Our_Service";
import Our_Treatment from "@/sections/Our_Treatment";
import Promo from "@/sections/Promo";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Promo />
      <Our_Treatment />
      <Our_Service />
      <Our_Galleries />
      <Our_Location />
      <Footer />
    </main>
  );
}
