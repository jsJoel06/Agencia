import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Form from "./Form.jsx";
import GuiaViajes from "./GuiaViajes.jsx";
import Informacion from "./Informacion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/AddForm" element={<Form />} />

        <Route
          path="/guia-de-viajes"
          element={<GuiaViajes />}
        />

        <Route
          path="/informacion"
          element={<Informacion />}
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);