import Footer from "@/sections/Footer";
import Nav from "./components/Nav";

export default function ArticleLayout({ children }) {
  return (
    <div className="relative overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
