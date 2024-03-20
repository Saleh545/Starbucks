import React from "react";
import { Routes, Route,  } from "react-router-dom";
import Menu from "../../Pages/Menu";
import Home from "../../Pages/Home";

const AppRoutes = () => {
  return (

    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />

    </Routes>
  );

};

export default AppRoutes;
