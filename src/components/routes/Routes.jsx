// AppRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../../Pages/Menu";
import Home from "../../Pages/Home";
import Drinks from "../../Pages/Drinks";
import Rewards from "../../Pages/Rewards";
import Gift from "../../Pages/Gift";
import Find from "../../Pages/Find";
import Coffee from "../../Pages/Coffee";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Rewards" element={<Rewards />} />
      <Route path="/Menu/drinks/:id" element={<Drinks />} />
      <Route path="/Gift" element={<Gift />} />
      <Route path="/store-locator" element={<Find />} />
      <Route path="/Menu/product/subcategory/:id" element={<Coffee/>}/>
    </Routes>
  );
};

export default AppRoutes;
