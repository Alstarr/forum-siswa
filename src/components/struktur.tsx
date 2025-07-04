import { motion } from "framer-motion";
import pakade from "../assets/image/osis/struktur1.png";
import regina from "../assets/image/osis/struktur2.png";
import farrel from "../assets/image/osis/struktur3.png";
import { useEffect, useState } from "react";

export default function StrukturOsis() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const data = [
    {
      img: pakade,
      name: "Ade Maulana Sajal, S.E",
      role: "Pembina OSIS Generasi 9",
    },
    {
      img: regina,
      name: "Regina Nathalia Valencia",
      role: "Ketua OSIS Generasi 9",
    },
    {
      img: farrel,
      name: "M. Farrel Setiawan Putra",
      role: "Wakil Ketua OSIS Generasi 9",
    },
  ];

  return (
    <section className="relative bg-white py-16 px-6 md:px-16 grid grid-cols-1">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-md font-bold text-white bg-gradient-to-r from-[#4CA965] to-[#59C274] px-4 py-2 inline-block rounded-xl"
        >
          Pembina Dan Ketua OSIS
          <div className="text-xs text-[#FCED75] font-medium">Generasi 9</div>
        </motion.h2>
      </div>

      {/* === Mobile Carousel === */}
      <div className="mt-16 overflow-hidden relative w-full max-w-xs mx-auto md:hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center"
            >
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-[260px] z-10"
              />
              <motion.div
                className="
                mt-[-40px] bg-gradient-to-r from-[#4CA965] to-[#59C274] text-[#FCED75] 
                text-center px-4 py-2 rounded-xl text-sm font-semibold z-20"
              >
                {item.name}
                <br />
                <span className="text-xs font-normal text-white">{item.role}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* === Desktop Grid === */}
      <div className="hidden md:flex flex-col items-center gap-28 mt-16">
        {/* Baris 1: Pembina */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col items-center w-[360px]"
          >
            <motion.img
              src={pakade}
              alt="Pembina"
              className="w-full z-10"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="mt-[-40px] bg-gradient-to-r from-[#4CA965] to-[#59C274] text-[#FCED75] text-center px-4 py-2 rounded-xl text-sm font-semibold z-20 shadow-lg"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Ade Maulana Sajal, S.E
              <br />
              <span className="text-xs font-normal text-white">
                Pembina OSIS Generasi 9
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Baris 2: Ketua & Wakil */}
        <div className="flex flex-row justify-center items-center gap-16">
          {[regina, farrel].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
              className="relative flex flex-col items-center w-[360px]"
            >
              <motion.img
                src={img}
                alt={idx === 0 ? "Ketua OSIS" : "Wakil Ketua"}
                className="w-full z-10"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              />
              <motion.div
                className="mt-[-55px] bg-gradient-to-r from-[#4CA965] to-[#59C274] text-[#FCED75] text-center px-4 py-2 rounded-xl text-sm font-semibold z-20 shadow-lg"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
              >
                {idx === 0 ? "Regina Nathalia Valencia" : "M. Farrel Setiawan Putra"}
                <br />
                <span className="text-xs font-normal text-white">
                  {idx === 0
                    ? "Ketua OSIS Generasi 9"
                    : "Wakil Ketua OSIS Generasi 9"}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
