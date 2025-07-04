import { useContext, useEffect } from "react";
import { PageTitleContext, AdminPage } from "./context/PageTitleContext";

export default function KritikSaran() {
  const { setPageTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setPageTitle(AdminPage.KRITIK);
  }, [setPageTitle]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Data Kritik & Saran</h2>
      {/* Tabel atau daftar data di sini */}
    </div>
  );
}
