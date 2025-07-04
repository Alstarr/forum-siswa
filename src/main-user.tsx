import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Komponen App utama untuk user
import "./index.css"; // Atur global style Tailwind atau CSS lain

ReactDOM.createRoot(document.getElementById("root-user")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
