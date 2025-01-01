import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./views/Dashboard/Layout";
import Home from "./views/Dashboard/Home";
import Admin from "./views/Dashboard/Home/Admin";
import AdminUsers from "./views/Dashboard/Home/Admin/Users";
import Pos from "./views/Pos";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin">
            <Route index element={<Admin />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Route>
        <Route path="/pos" element={<Pos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

/*
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
*/
