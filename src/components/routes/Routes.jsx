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
import Sign from "../../Pages/Sign";
import Join from "../../Pages/Join";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Rewards" element={<Rewards />} />
      <Route path="/Menu/drinks/:id" element={<Drinks />} />
      <Route path="/Gift" element={<Gift />} />
      <Route path="/store-locator" element={<Find />} />
      <Route path="/Menu/product/:id" element={<Coffee/>}/>
      <Route path="/account/signin" element={<Sign/>} />
      <Route path="/account/create" element={<Join/>} />
    </Routes>
  );
};

export default AppRoutes;
