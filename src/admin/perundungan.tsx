import { useContext, useEffect, useState } from "react";
import { PageTitleContext, AdminPage } from "./context/PageTitleContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

interface Perundungan {
  id_perundungan: number;
  isi_laporan: string;
  created_at: string;
}

export default function Perundungan() {
  const { setPageTitle } = useContext(PageTitleContext);
  const [perundunganList, setPerundunganList] = useState<Perundungan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPageTitle(AdminPage.PERUNDUNGAN);

    fetch("http://localhost:5000/admin/perundungan")
      .then((res) => res.json())
      .then((data) => {
        console.log("Perundungan:", data);
        if (Array.isArray(data)) {
          setPerundunganList(data);
        } else {
          console.error("Response bukan array:", data);
        }
      })
      .catch((err) => {
        console.error("Gagal fetch perundungan:", err);
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
      `http://localhost:5000/admin/delete/perundungan/${id}`,
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
    Perundungan(); // refresh data
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
      <h2 className="text-xl font-bold mb-6 text-red-800">Data Laporan Perundungan</h2>

      {isLoading ? (
        <p className="text-gray-500">Memuat data...</p>
      ) : perundunganList.length === 0 ? (
        <p className="text-gray-500">Belum ada data laporan perundungan.</p>
      ) : null}

      {/* Tampilkan daftar laporan perundungan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {perundunganList.map((laporan) => (
          <Link
            to={`/admin/perundungan/${laporan.id_perundungan}`}
            key={laporan.id_perundungan}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition relative overflow-hidden"
          >
            {/* Tanggal */}
            <div className="flex justify-end mb-2">
              <span className="text-xs text-gray-500">
                {new Date(laporan.created_at).toLocaleDateString("id-ID")}
              </span>
            </div>

            {/* Judul */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
              Laporan #{laporan.id_perundungan}
            </h3>

            <p className="text-gray-700 text-sm line-clamp-3 mb-4">
              {laporan.isi_laporan}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                Perundungan
              </span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                Laporan
              </span>
            </div>
            <button
                  onClick={() => handleDelete(laporan.id_perundungan)}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-4 w-full rounded-2xl"
                >
                  Hapus
                </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
