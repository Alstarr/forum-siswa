import { motion } from "framer-motion";
import form1 from "../assets/image/osis/form1.png";
import form2 from "../assets/image/osis/form2.png";
import form3 from "../assets/image/osis/form3.png";

export default function ForumSection() {
  const forums = [
    {
      title: "Forum Saran dan Kritik",
      desc: "Kami mengajak seluruh siswa untuk menyampaikan kritik dan saran demi kemajuan sekolah serta kinerja OSIS secara transparan. Pendapat Anda sangat berarti untuk menjadikan perubahan positif!",
      href: "/form",
      img: form1,
      delay: 0,
      alt: "Kritik",
    },
    {
      title: "Forum Harapan",
      desc: "Forum Harapan ini disediakan bagi siswa BM3 untuk menyampaikan harapan mereka terhadap OSIS, kegiatan, dan masa depan sekolah. Semua ide positif sangat kami hargai!",
      href: "/harapan",
      img: form2,
      delay: 0.2,
      alt: "Harapan",
    },
    {
      title: "Forum Perundungan",
      desc: "Sampaikan pengalaman, pendapat, atau harapan Anda untuk membantu mencegah dan mengurangi perundungan di sekolah. Semua suara didengar dan diperhatikan. Siswa Kamu sangat berarti!",
      href: "/perundungan",
      img: form3,
      delay: 0.3,
      alt: "Perundungan",
    },
  ];

  return (
    <section className="bg-white py-16" id="form">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-md font-bold text-white bg-gradient-to-r from-[#59C274] to-[#4CA965] px-4 py-2 inline-block rounded-xl"
          >
            Forum Ajuan Siswa
            <div className="text-xs text-[#FCED75] font-medium">
              Isi forum sesuai kebutuhanmu
            </div>
          </motion.h2>
        </div>

        {/* CARD memanjang tetap */}
        <div className="space-y-10">
          {forums.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#4CA965] to-[#59C274] text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
              {/* Text */}
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm mb-4 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
                <a
                  href={item.href}
                  className="inline-block bg-white text-green-700 font-semibold px-4 py-2 rounded-lg shadow transition hover:bg-yellow-300 hover:shadow-yellow-300"
                >
                  Buka Forum
                </a>
              </div>

              {/* Gambar absolute tetap */}
              <div className="absolute bottom-10 left-160 w-full h-[190px]">
                <motion.img
                  src={item.img}
                  alt={item.alt}
                  className="w-36 lg:w-115 object-contain self-end md:self-center mt-4"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
