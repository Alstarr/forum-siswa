import { Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#4CA965] to-[#59C274] text-white relative pt-16 pb-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-emerald-300 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-10 relative z-10">
        {/* School Identity */}
        <motion.div 
          className="flex flex-col items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 shadow-lg w-full">
            <h2 className="text-xl md:text-2xl font-bold text-yellow-300 bg-clip-text">
              SMK Bina Mandiri Multimedia
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">
              Kami OSIS SMK Bina Mandiri Multimedia hadir untuk mendengarkan kritik, saran, dan harapan dari seluruh siswa. 
              Bersama kita ciptakan lingkungan sekolah yang lebih baik!
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 shadow-lg w-full max-w-xs">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-yellow-300">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Beranda" },
                { to: "/kritik", text: "Kritik & Saran" },
                { to: "/harapan", text: "Harapan" },
                { to: "/perundungan", text: "Perundungan" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.to} 
                    className="flex items-center group text-white hover:text-yellow-300 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.text}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="i-mdi-arrow-top-right text-lg transform rotate-45"></span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 shadow-lg w-full max-w-xs">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-yellow-300">Ikuti OSIS BM3</h3>
            <motion.a
              href="https://www.instagram.com/osisbm_3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group bg-gradient-to-l from-[#4CA965] to-[#59C274] p-3 rounded-xl w-full hover:from-pink-600 hover:to-purple-600 transition-all duration-500 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Instagram size={24} className="text-pink-600" />
              </div>
              <span className="font-medium">@osisbm_3</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="i-mdi-arrow-top-right text-lg transform rotate-45"></span>
              </span>
            </motion.a>
            
            {/* OSIS Activity Hours */}
            <div className="mt-6">
              <h3 className="text-base md:text-lg font-medium mb-3">Jam Operasional</h3>
              <div className="text-sm space-y-1">
                <p className="flex justify-between">
                  <span>Senin-Jumat:</span>
                  <span>07:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sabtu-Minggu:</span>
                  <span className="text-yellow-300">Libur</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Credit Section - Responsive for Mobile */}
      <motion.div 
        className="border-t border-white/20 mt-12 pt-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-sm md:text-base hidden md:flex flex-wrap justify-center items-center gap-x-1 gap-y-1 px-2">
            <span>© {new Date().getFullYear()} OSIS SMK Bina Mandiri Multimedia.</span>
            <span className="inline-flex items-center">
              Made with 
              <Heart 
                size={16} 
                className="text-pink-400 mx-1 inline-block animate-pulse" 
                fill="currentColor"
              /> 
              by students
            </span>
          </p>
          
          {/* Mobile-only simplified text */}
          <p className="md:hidden text-white/80 text-xs mt-2 px-4">
            © {new Date().getFullYear()} OSIS BM3 • Made with ❤️
          </p>
        </div>
      </motion.div>
    </footer>
  );
}