import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppAdmin from "./AppAdmin.tsx";
import "./index.css";

createRoot(document.getElementById("root-admin")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppAdmin />
    </BrowserRouter>
  </StrictMode>
);
