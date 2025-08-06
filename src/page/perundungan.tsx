import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdCheckCircle, MdError } from "react-icons/md";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

import blyImg from "../assets/image/osis/form3.1.png";

export default function Perundungan() {
  const [pesan, setPesan] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();

    if (!pesan.trim()) {
      toast.error("⚠️ Pesan tidak boleh kosong!", {
        icon: <MdError className="text-red-600 text-xl" />,
        style: {
          background: "#fee2e2",
          color: "#991b1b",
        },
      });
      return;
    }

    const loadingToast = toast.loading("Mengirim pesan...");

    try {
      const response = await fetch("http://localhost:5000/api/perundungan/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ isi_laporan: pesan}),
      })
      
      const data = await response.json();

      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success("Pesan berhasil dikirim!", {
          icon: <MdCheckCircle className="text-green-600 text-xl"/>

        });
        setPesan("");
        navigate("/#home");
      } else {
        throw new Error(data.error || "Terjadi kesalahan.");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("❌ Gagal mengirim pesan!", {
        icon: <MdError className="text-red-600 text-xl" />,
        style: {
          background: "#fee2e2",
          color: "#991b1b",
        },
      });
    }
  };

  return (
    <section
      className={`relative ${isMobile ? "min-h-[72vh]" : "min-h-screen"} flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden`}
      id="perundungan"
    >
      {/* SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <radialGradient id="greenGradient" cx="60%" cy="40%" r="100%" fx="60%" fy="40%">
            <stop offset="0%" stopColor="#4CA965" />
            <stop offset="50%" stopColor="#59C274" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#greenGradient)" />
      </svg>

      {/* Judul */}
      <motion.div
        className="relative z-10 bg-[#4CA965] rounded-xl px-6 py-3 text-center text-white mb-6 shadow-md mt-13"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-lg md:text-xl font-bold">Mari Bercerita</h2>
        <p className="text-[#FCED75] text-sm font-medium mt-1">Ceritakan pada kami!!</p>
      </motion.div>

      {/* Konten Utama */}
      <motion.div
        className="relative z-10 bg-gradient-to-r from-[#4CA965] to-[#59C274] rounded-[30px] w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-12 gap-8 shadow-xl mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gambar OSIS */}
        <div className="relative w-full h-full flex justify-center items-end order-1 md:order-none">
          <div className="block md:hidden absolute -bottom-38 left-1/2 -translate-x-1/2 z-0">
            <motion.img
              src={blyImg}
              alt="Anggota OSIS"
              className="max-w-[210px] object-contain"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 w-full justify-center pointer-events-none">
            <motion.img
              src={blyImg}
              alt="Anggota OSIS"
              className="max-w-[550px] object-contain"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Form perundungan */}
        <div className="flex flex-col justify-center items-center space-y-6 w-full order-2 md:order-none z-10 mt-15">
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              required
              placeholder="Isi pesan"
              className="w-full bg-white text-gray-600 h-40 p-4 rounded-xl text-sm resize-none shadow-md focus:outline-none focus:ring-2 focus:ring-[#59C274] transition"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-green-800 px-8 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition shadow-md"
            >
              Kirim
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
