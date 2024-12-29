import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import AdminDashboard from "./views/AdminDashboard";
import PosDashboard from "./views/PosDashboard";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/pos" element={<PosDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
