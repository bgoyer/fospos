import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./views/Home";
import Admin from "./views/Home/Admin";
import AdminUsers from "./views/Home/Admin/Users";
import Pos from "./views/Pos";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
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
