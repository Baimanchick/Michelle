import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MenuDishes from "../pages/MenuDishes";
import MenuPage from "../pages/MenuPage";
import NotF from "../pages/NotF";
import MenuSalad from "../pages/MenuSalad";
import MenuPlat from "../pages/MenuPlat";
import MenuBaget from "../pages/MenuBaget";
import MenuCoffe from "../pages/MenuCoffe";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<MenuPage />} />
      <Route path="/menu" element={<MenuDishes />} />
      <Route path="/notf" element={<NotF />} />
      <Route path="/salad" element={<MenuSalad />} />
      <Route path="/plat" element={<MenuPlat />} />
      <Route path="/baget" element={<MenuBaget />} />
      <Route path="/coffe" element={<MenuCoffe />} />
    </Routes>
  );
}

export default MainRoutes;
