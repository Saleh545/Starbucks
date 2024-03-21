// AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../../Pages/Menu";
import Home from "../../Pages/Home";
import Drinks from "../../Pages/Drinks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Menu/:id" element={<Drinks />} />
      <Route path="/Menu/subcategory" element={<Drinks />} />
    </Routes>
  );
};

export default AppRoutes;
