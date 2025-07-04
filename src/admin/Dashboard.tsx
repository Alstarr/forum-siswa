// import Sidebar from "./sidebar";
// import Navbar from "./navbar";
import { useContext, useEffect, useState } from "react";
import { PageTitleContext } from "./context/PageTitleContext";
import { div } from "framer-motion/client";

export default function Dashboard() {
  const { setPageTitle } = useContext(PageTitleContext);

  // === Data state ===
  const [kritikCount, setKritikCount] = useState(0);
  const [harapanCount, setHarapanCount] = useState(0);
  const [perundunganCount, setPerundunganCount] = useState(0);

  useEffect(() => {
    setPageTitle("Dashboard");

    // === Command: GET data dari backend Express ===
    // TODO: Pastikan Express backend running di misal http://localhost:5000
    // Kamu bisa pakai /api route: /api/kritik, /api/harapan, /api/perundungan

    fetch("http://localhost:5000/api/kritik/count")
      .then((res) => res.json())
      .then((data) => setKritikCount(data.count))
      .catch((err) => console.error("Error get kritik:", err));

    fetch("http://localhost:5000/api/harapan/count")
      .then((res) => res.json())
      .then((data) => setHarapanCount(data.count))
      .catch((err) => console.error("Error get harapan:", err));

    fetch("http://localhost:5000/api/perundungan/count")
      .then((res) => res.json())
      .then((data) => setPerundunganCount(data.count))
      .catch((err) => console.error("Error get perundungan:", err));

    // === Command: Buat route GET di Express:
    // app.get('/api/kritik/count', ...) dsb
  }, [setPageTitle]);

  return (
    <div className="bg-gray-100">
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-bold mb-4">
          Selamat Datang di Dashboard Admin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              Jumlah Kritik & Saran
            </h3>
            <p className="text-4xl font-bold text-green-700">{kritikCount}</p>
            <p className="text-sm text-gray-500">Total masukan siswa</p>
          </div>

          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Jumlah Harapan</h3>
            <p className="text-4xl font-bold text-green-700">{harapanCount}</p>
            <p className="text-sm text-gray-500">Harapan untuk OSIS</p>
          </div>

          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Laporan Perundungan</h3>
            <p className="text-4xl font-bold text-green-700">
              {perundunganCount}
            </p>
            <p className="text-sm text-gray-500">Kasus dilaporkan</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2">Ringkasan Aktivitas</h3>
          <p className="text-gray-600 text-sm">
            Semua data ini diambil dari server Express + MySQL. Silakan buka
            menu di sidebar untuk melihat detail data siswa.
          </p>
        </div>
      </main>
    </div>
  );
}
