import { Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#198754] text-white relative pt-12 pb-6 mt-0">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-6 bg-white text-[#198754] rounded-full p-2 shadow-md hover:bg-yellow-300 hover:text-[#1f2937] transition"
        aria-label="Kembali ke atas"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + Identitas Sekolah */}
        <div className="flex flex-col items-center md:items-start gap-2">
          {/* <img src={logo} alt="Logo Sekolah" className="h-12 w-auto mb-1" /> */}
          <h2 className="text-xl font-bold">SMK Bina Mandiri Multimedia</h2>
          <p className="text-sm text-white/80 leading-snug">
            Mendorong siswa untuk aktif, berani berpendapat, dan saling menghargai.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/#hero" className="hover:underline hover:text-yellow-300 transition">Beranda</Link>
            </li>
            <li>
              <Link to="/#form" className="hover:underline hover:text-yellow-300 transition">Kritik & Saran</Link>
            </li>
            <li>
              <Link to="/#harapan" className="hover:underline hover:text-yellow-300 transition">Harapan</Link>
            </li>
            <li>
              <Link to="/#perundungan" className="hover:underline hover:text-yellow-300 transition">Perundungan</Link>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Ikuti OSIS BM3</h3>
          <a
            href="https://www.instagram.com/osisbm_3/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <Instagram size={20} />
            @osisbm_3
          </a>
        </div>
      </div>

      {/* Credit */}
      <div className="border-t border-white/20 mt-10 pt-4 text-sm text-center text-white">
        © {new Date().getFullYear()} OSIS SMK Bina Mandiri Multimedia. Made by 💖.
      </div>
    </footer>
  );
}
 