import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppAdmin from "./AppAdmin.tsx";
import "./index.css";
import { AuthProvider } from "./admin/context/AuthContext.tsx";

createRoot(document.getElementById("root-admin")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppAdmin />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
