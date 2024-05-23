import Footer from "@/sections/Footer";
import Nav from "../article/components/Nav";
import AboutUsPage from "./AboutUs";

export default function aboutUs() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <AboutUsPage />
      <Footer />
    </main>
  );
}
