import { useContext, useEffect, useState } from "react";
import { PageTitleContext, AdminPage } from "./context/PageTitleContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

interface Harapan {
  id_harapan: number;
  isi_laporan: string;
  created_at: string;
}

export default function Harapan() {
  const { setPageTitle } = useContext(PageTitleContext);
  const [harapanList, setHarapanList] = useState<Harapan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPageTitle(AdminPage.HARAPAN);

    fetch("http://localhost:5000/admin/harapan")
      .then((res) => res.json())
      .then((data) => {
        console.log("Harapan:", data);
        if (Array.isArray(data)) {
          setHarapanList(data);
        } else {
          console.error("Response bukan array:", data);
        }
      })
      .catch((err) => {
        console.error("Gagal fetch harapan:", err);
      })
      .finally(() => setIsLoading(false));
  }, [setPageTitle]);

  type DeleteResponse = {
  message: string;
};

const handleDelete = async (id: number): Promise<void> => {
  const isConfirmed: boolean = window.confirm(
    "Yakin ingin menghapus data ini?"
  );

  if (!isConfirmed) return;

  try {
    const res: Response = await fetch(
      `http://localhost:5000/admin/delete/harapan/${id}`,
      {
        method: "DELETE",
      }
    );

    const data: DeleteResponse = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Gagal menghapus data");
      return;
    }

    toast.success("Data berhasil dihapus");
    Harapan(); // refresh data
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Gagal terhubung ke server");
    }
  }
};

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-6 text-blue-800">Data Harapan Siswa</h2>

      {isLoading ? (
        <p className="text-gray-500">Memuat data...</p>
      ) : harapanList.length === 0 ? (
        <p className="text-gray-500">Belum ada data harapan.</p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {harapanList.map((harapan) => (
          <Link
            to={`/admin/harapan/${harapan.id_harapan}`}
            key={harapan.id_harapan}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition relative overflow-hidden"
          >
            {/* Tanggal */}
            <div className="flex justify-end mb-2">
              <span className="text-xs text-gray-500">
                {new Date(harapan.created_at).toLocaleDateString("id-ID")}
              </span>
            </div>

            {/* Judul */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
              Harapan #{harapan.id_harapan}
            </h3>

            <p className="text-gray-700 text-sm line-clamp-3 mb-4">
              {harapan.isi_laporan}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                Harapan
              </span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                Siswa
              </span>
            </div>
            <button
                  onClick={() => handleDelete(harapan.id_harapan)}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-4 w-full rounded-2xl"
                >
                  Take Down!
                </button>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
