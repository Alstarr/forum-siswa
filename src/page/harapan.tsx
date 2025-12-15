import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdCheckCircle,
  MdError,
  MdSend,
  MdOutlineFeedback,
} from "react-icons/md";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

import hrpImg from "../assets/image/osis/1.4.png";

export default function Harapan() {
  const [pesan, setPesan] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
      const response = await fetch("http://localhost:5000/harapan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isi_laporan: pesan }),
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success("Pesan berhasil dikirim!", {
          icon: <MdCheckCircle className="text-green-600 text-xl" />,
          style: { background: "#d1fae5", color: "#065f46" },
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
      className={`relative ${
        isMobile ? "min-h-[72vh]" : "min-h-screen"
      } flex flex-col items-center justify-start py-16 px-4 sm:px-6 lg:px-8 overflow-hidden`}
      id="harapan"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff 0%, #e6fffa 50%, #f0fdf4 100%)",
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-green-300/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-teal-300/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-emerald-300/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Judul */}
      <motion.div
        className="relative z-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl px-8 py-4 text-center text-white mb-8 shadow-lg"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <MdOutlineFeedback className="text-yellow-300" />
          Forum Harapan
        </motion.h2>
        <motion.p
          className="text-[#FCED75] text-base font-medium mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Berikan aspirasi baru-mu di bawah ya‼
        </motion.p>
      </motion.div>

      {/* Konten Utama */}
      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Ilustrasi */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="relative w/full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border-8 border-emerald-100 transform rotate-3">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full p-4 mb-4">
                    <MdOutlineFeedback className="text-white text-4xl" />
                  </div>
                  <img
                    src={hrpImg}
                    alt="Ilustrasi"
                    className="hidden md:block w-64 h-auto object-contain"
                  />
                  <div className="mt-4 text-center hidden md:block">
                    <p className="text-sm text-gray-600">
                      Suara kamu penting dan didengarkan oleh kami
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Harapan */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MdOutlineFeedback className="text-yellow-300" />
                  Tulis Harapanmu
                </h3>
                <p className="text-emerald-100 mt-1">
                  Setiap aspirasi sangat berarti bagi kami
                </p>
              </div>
              <div className="p-6">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-6"
                >
                  <div className="relative">
                    <motion.textarea
                      ref={textareaRef}
                      name="isi_laporan"
                      value={pesan}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.length >= 10000 && pesan.length < 10000) {
                          toast.error("Maksimal 10.000 karakter", {
                            icon: <MdError className="text-red-600 text-xl" />,
                            style: { background: "#fee2e2", color: "#991b1b" },
                          });
                        }
                        setPesan(val.slice(0, 10000));
                      }}
                      maxLength={10000}
                      required
                      placeholder="Tulis harapan atau aspirasi Anda di sini..."
                      className={`w-full bg-emerald-50 text-gray-700 min-h-[150px] p-5 rounded-xl text-base resize-none transition-all duration-300 focus:outline-none focus:ring-2 ring-emerald-200 shadow-inner`}
                    />
                    <AnimatePresence>
                      {true && (
                        <motion.div
                          className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 blur-sm opacity-30 z-[-1]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.4 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                    <div className="flex justify-end items-center mt-2">
                      {/* indikator karakter dihilangkan */}
                      <motion.button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg transition-all"
                      >
                        <MdSend className="text-lg" />
                        Kirim Pesan
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAB */}
      <motion.button
        onClick={() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
            window.scrollTo({
              top: textareaRef.current.offsetTop - 100,
              behavior: "smooth",
            });
          }
        }}
        className="fixed bottom-8 right-8 z-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <MdOutlineFeedback className="text-2xl" />
      </motion.button>
    </section>
  );
}
