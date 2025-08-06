import { Routes, Route } from "react-router-dom";
import Login from "./auth/login"
import AdminLayout from "./admin/adminLayout";
import Dashboard from "./admin/Dashboard";
import KritikSaran from "./admin/kritik";
import Harapan from "./admin/harapan";
import Perundungan from "./admin/perundungan";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider} from "./admin/context/AuthContext";

export default function AppAdmin() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="kritik" element={<KritikSaran />} />
          <Route path="harapan" element={<Harapan />} />
          <Route path="perundungan" element={<Perundungan />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
