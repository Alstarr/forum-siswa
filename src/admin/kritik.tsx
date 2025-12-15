import { useContext, useEffect, useState } from "react";
import { PageTitleContext, AdminPage } from "./context/PageTitleContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

interface Kritik {
  id_kritik: number;
  isi_laporan: string;
  created_at: string;
}

export default function KritikSaran() {
  const { setPageTitle } = useContext(PageTitleContext);
  const [kritikList, setKritikList] = useState<Kritik[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPageTitle(AdminPage.KRITIK);

    fetch("http://localhost:5000/admin/kritik")
      .then((res) => res.json())
      .then((data) => {
        console.log("Kritik:", data);
        if (Array.isArray(data)) {
          setKritikList(data);
        } else {
          console.error("Response bukan array:", data);
        }
      })
      .catch((err) => {
        console.error("Gagal fetch kritik:", err);
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
      `http://localhost:5000/admin/delete/kritik/${id}`,
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
    KritikSaran(); // refresh data
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
      <h2 className="text-xl font-bold mb-6 text-green-800">
        Data Kritik & Saran
      </h2>

      {isLoading ? (
        <p className="text-gray-500">Memuat data...</p>
      ) : kritikList.length === 0 ? (
        <p className="text-gray-500">Belum ada data kritik & saran.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kritikList.map((kritik) => (
            <Link
              to={`/admin/kritik/${kritik.id_kritik}`}
              key={kritik.id_kritik}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition relative overflow-hidden"
            >
              {/* Tanggal */}
              <div className="flex justify-end mb-2">
                <span className="text-xs text-gray-500">
                  {new Date(kritik.created_at).toLocaleDateString("id-ID")}
                </span>
              </div>

              {/* Judul */}
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                Kritik #{kritik.id_kritik}
              </h3>

              <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                {kritik.isi_laporan}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  Kritik
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Saran
                </span>
              </div>
              <button
                  onClick={() => handleDelete(kritik.id_kritik)}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-4 w-full rounded-2xl"
                >
                  Hapus
                </button>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
