import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./views/Dashboard/Layout";
import Home from "./views/Dashboard/Home/Home";

import Admin from "./views/Dashboard/Home/Admin/Admin";
import AdminProducts from "./views/Dashboard/Home/Admin/Products/Products";
import AdminSales from "./views/Dashboard/Home/Admin/Sales/Sales";
import AdminUsers from "./views/Dashboard/Home/Admin/Users/Users";

import Pos from "./views/Pos";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />}>
            <Route path="products" element={<AdminProducts />} />
            <Route path="sales" element={<AdminSales />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Route>
        <Route path="/pos" element={<Pos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
