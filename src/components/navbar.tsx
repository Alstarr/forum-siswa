import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30); // jarak scroll, sesuaikan jika mau
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo OSIS"
            className="h-10 w-10 rounded-full border border-white shadow"
          />
          <span
            className={`font-semibold text-base md:text-lg tracking-wide transition-colors duration-500 ${
              isScrolled ? "text-[#198754]" : "text-white"
            }`}
          >
            OSIS SMK Bina Mandiri Multimedia
          </span>
        </Link>
      </div>
    </nav>
  );
}
