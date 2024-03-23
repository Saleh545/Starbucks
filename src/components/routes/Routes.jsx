// AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../../Pages/Menu";
import Home from "../../Pages/Home";
import Drinks from "../../Pages/Drinks";
import Rewards from "../../Pages/Rewards";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Rewards" element={<Rewards/>} />
      <Route path="/Menu/drinks/:id" element={<Drinks />} />



      <Route path="/Menu/drinks/:subcategory" element={<Drinks />} />
    </Routes>
  );
};

export default AppRoutes;
