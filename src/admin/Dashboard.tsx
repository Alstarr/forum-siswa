import { useContext, useEffect, useState } from "react";
import { PageTitleContext } from "./context/PageTitleContext";

export default function Dashboard() {
  const { setPageTitle } = useContext(PageTitleContext);

  const [kritikCount, setKritikCount] = useState(0);
  const [harapanCount, setHarapanCount] = useState(0);
  const [perundunganCount, setPerundunganCount] = useState(0);

  useEffect(() => {
    setPageTitle("Dashboard");

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
  }, [setPageTitle]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-10">
        <div className="mb-10 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Selamat Datang di Dashboard Admin
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Kritik Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden 
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
              border-l-4 border-green-500">
            <div className="p-6 flex items-start">
              <div className="mr-4 p-3 bg-green-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  Kritik & Saran
                </h3>
                <p className="text-4xl font-bold text-gray-800 mb-1">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                    {kritikCount}
                  </span>
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Total masukan siswa
                </p>
              </div>
            </div>
            <div className="px-6 pb-4">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(100, kritikCount)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Harapan Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden 
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
              border-l-4 border-blue-500">
            <div className="p-6 flex items-start">
              <div className="mr-4 p-3 bg-blue-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  Harapan
                </h3>
                <p className="text-4xl font-bold text-gray-800 mb-1">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                    {harapanCount}
                  </span>
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  Harapan untuk OSIS
                </p>
              </div>
            </div>
            <div className="px-6 pb-4">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(100, harapanCount)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Perundungan Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden 
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
              border-l-4 border-amber-500">
            <div className="p-6 flex items-start">
              <div className="mr-4 p-3 bg-amber-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  Laporan Perundungan
                </h3>
                <p className="text-4xl font-bold text-gray-800 mb-1">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
                    {perundunganCount}
                  </span>
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="inline-block w-3 h-3 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                  Kasus dilaporkan
                </p>
              </div>
            </div>
            <div className="px-6 pb-4">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(100, perundunganCount)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex items-start">
            <div className="mr-4 mt-1 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ringkasan Aktivitas</h3>
              <p className="text-gray-600 mb-4">
                Semua data diambil langsung dari server Express + MySQL. Silakan
                gunakan menu sidebar untuk melihat detail laporan siswa.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sistem terkoneksi dengan baik</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Floating Elements */}
        {/* <div className="fixed bottom-10 right-10 animate-bounce-slow">
          <div className="bg-white p-3 rounded-full shadow-lg border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div> */}
      </main>
    </div>
  );
}