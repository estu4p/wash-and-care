import Footer from "@/sections/Footer";
import Nav from "../article/components/Nav";
import GalleriesPage from "./GalleriesPage";

export default function galleries() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <GalleriesPage />
      <Footer />
    </main>
  );
}
