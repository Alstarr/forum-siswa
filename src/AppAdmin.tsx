import { Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/adminLayout";
import Dashboard from "./admin/Dashboard";
import KritikSaran from "./admin/kritik";
// import Harapan from "./Harapan";
// import Perundungan from "./Perundungan";

export default function AppAdmin() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="kritik" element={<KritikSaran />} />
        {/* <Route path="harapan" element={<Harapan />} /> */}
        {/* <Route path="perundungan" element={<Perundungan />} /> */}
      </Route>
    </Routes>
  );
}
