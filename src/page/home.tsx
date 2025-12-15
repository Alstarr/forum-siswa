import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import StrukturOsis from "../components/struktur.tsx";
import ForumAjuan from "../components/card.tsx";

import heroBg from "../assets/image/hero/bg-hero.jpg";

// Elemen dekorasi
import yellow1 from "../assets/image/hero/Vector.png";
import yellow2 from "../assets/image/hero/Vector-1.png";
import yellow3 from "../assets/image/hero/Vector-2.png";

// Hero OSIS (UNIFIED IMAGE)
import heroOsis from "../assets/image/osis/hero.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="hero"
        className={`relative ${
          isMobile ? "min-h-[72vh]" : "min-h-screen"
        } bg-[#198754] text-white overflow-hidden py-12 px-4 sm:px-6 lg:px-8`}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative">
          
          {/* ===== Elemen Dekorasi ===== */}
          <motion.img
            src={yellow1}
            alt=""
            className="absolute bottom-[-50px] right-[-100px] w-52 md:w-72 opacity-90 pointer-events-none select-none"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src={yellow2}
            alt=""
            className="absolute top-[-50px] right-[-100px] w-40 md:w-56 opacity-90 pointer-events-none select-none"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src={yellow3}
            alt=""
            className="absolute top-[-50px] left-[-100px] w-52 md:w-72 opacity-90 pointer-events-none select-none"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* ===== Hero Image OSIS ===== */}
          <div className="order-2 md:order-none relative w-full hidden md:flex justify-center items-end">
            <motion.img
              src={heroOsis}
              alt="Hero OSIS"
              className="
                relative z-10
                w-[85%]
                sm:w-[75%]
                md:w-[520px]
                lg:w-[600px]
                object-contain
                drop-shadow-2xl
              "
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* ===== Text Hero ===== */}
          <div className="order-1 md:order-none z-10 text-center md:text-left space-y-4 mt-20">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg md:text-6xl text-yellow-300 font-bold">
                Selamat Datang di
              </h2>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Forum OSIS BM3
              </h1>

              <p className="text-base md:text-lg max-w-lg mx-auto md:mx-0 hidden md:block">
                Kami menyediakan forum untuk siswa-siswi dalam menyampaikan
                kritik, saran, harapan, serta laporan perundungan secara aman
                dan bertanggung jawab.
              </p>
              <motion.img
                src={heroOsis}
                alt="Hero OSIS"
                className="md:hidden mx-auto w-[85%] sm:w-[75%] object-contain drop-shadow-2xl mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              />

              <a
                href="/#form"
                className="inline-block mt-4 px-6 py-3 bg-white text-green-800 font-semibold rounded-full shadow hover:bg-yellow-300 transition"
              >
                Lihat Forum
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      {/* <StrukturOsis /> */}
      <ForumAjuan />
    </>
  );
}
 
