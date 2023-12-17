import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MenuDishes from "../pages/MenuDishes";
import MenuPage from "../pages/MenuPage";
import NotF from "../pages/NotF";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<MenuPage />} />
      <Route path="/menu" element={<MenuDishes />} />
      <Route path="/notf" element={<NotF />} />
    </Routes>
  );
}

export default MainRoutes;
