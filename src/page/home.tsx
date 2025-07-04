import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StrukturOsis from "../components/struktur.tsx";
import ForumAjuan from "../components/card.tsx";
import heroBg from "../assets/image/hero/bg-hero.jpg";

import yellow1 from "../assets/image/hero/Vector.png";
import yellow2 from "../assets/image/hero/Vector-1.png";
import yellow3 from "../assets/image/hero/Vector-2.png";

import osis1 from "../assets/image/osis/osis1.png";
import osis2 from "../assets/image/osis/osis2.png";
import osis3 from "../assets/image/osis/osis3.png";
import pembina from "../assets/image/osis/pembina.png";
import osisMobile from "../assets/image/osis/osis-mobile.png";

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
      {/* HERO */}
      <section
        id="hero"
        className={`relative ${isMobile ? "min-h-[72vh]" : "min-h-screen"} bg-[#198754] text-white overflow-hidden py-12 px-4 sm:px-6 lg:px-8`}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* === Elemen Kuning === */}
          <motion.img
            src={yellow1}
            alt=""
            className="absolute bottom-0 right-0 w-44 md:w-60 opacity-80"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={yellow2}
            alt=""
            className="absolute top-0 right-0 w-44 md:w-60 opacity-80"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={yellow3}
            alt=""
            className="absolute top-0 left-0 w-44 md:w-60 opacity-80"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* === Gambar OSIS === */}
          <div className="order-2 md:order-none relative w-full flex justify-center">
            {/* === Mobile === */}
            <div className="block md:hidden w-full relative max-w-sm">
              <div className="absolute top-0 right-5 w-full h-[180px]">
                <motion.img
                  src={osisMobile}
                  alt="OSIS Mobile"
                  className="relative z-10 w-[80%] mx-auto object-contain"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </div>

            {/* === Desktop === */}
            <div className="hidden md:block w-full relative">
              <motion.img
                src={pembina}
                alt="Pembina"
                className="absolute bottom-[-320px] left-[33%] -translate-x-1/2 w-[650px]"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
              <motion.img
                src={osis3}
                alt="OSIS 3"
                className="absolute bottom-[-292px] left-[41%] -translate-x-1/2 w-[470px]"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              <motion.img
                src={osis2}
                alt="OSIS 2"
                className="absolute bottom-[-360px] right-[15%] -translate-x w-[650px]"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
              <motion.img
                src={osis1}
                alt="OSIS 1"
                className="absolute bottom-[-420px] right-[12%] w-[550px]"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </div>

          {/* === Teks Hero === */}
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
              <p className="text-base md:text-lg max-w-lg mx-auto md:mx-0">
                Kami menyediakan forum untuk siswa-siswi untuk memberikan
                tanggapan tentang kritik, saran, harapan serta laporan pembullyan.
              </p>
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

      <StrukturOsis />
      <ForumAjuan />
    </>
  );
}

