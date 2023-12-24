import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MenuDishes from "../pages/MenuDishes";
import MenuPage from "../pages/MenuPage";
import NotF from "../pages/NotF";
import MenuSalad from "../pages/MenuSalad";
import MenuPlat from "../pages/MenuPlat";
import MenuBaget from "../pages/MenuBaget";
import MenuCoffe from "../pages/MenuCoffe";
import MenuSoap from "../pages/MenuSoap";
import MenuDinner from "../pages/MenuDinner";
import MenuHotMeal from "../pages/MenuHotMeal";
import MenuPizza from "../pages/MenuPizza";
import MenuBoul from "../pages/MenuBoul";
import MenuGar from "../pages/MenuGar";
import MenuChild from "../pages/MenuChild";
import NotFounedPage from "../pages/NotFounedPage";
import CollagenPage from "../pages/CollagenPage";
import TeaPage from "../pages/TeaPage";
import DrinksPage from "../pages/DrinksPage";
import SmuziPage from "../pages/SmuziPage";
import BarPage from "../pages/BarPage";
import WinePage from "../pages/WinePage";
import MenuNewYear from "../pages/MenuNewYear";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainRoutes() {
  return (
    <Routes>
      <Route
        element={
          <>
            <ScrollToTop />
            <MainLayout />
          </>
        }
      ></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<MenuPage />} />
      <Route path="/menu" element={<MenuDishes />} />
      <Route path="/notf" element={<NotF />} />
      <Route path="/salad" element={<MenuSalad />} />
      <Route path="/plat" element={<MenuPlat />} />
      <Route path="/baget" element={<MenuBaget />} />
      <Route path="/coffe" element={<MenuCoffe />} />
      <Route path="/soap" element={<MenuSoap />} />
      <Route path="/dinner" element={<MenuDinner />} />
      <Route path="/hot" element={<MenuHotMeal />} />
      <Route path="/pizza" element={<MenuPizza />} />
      <Route path="/boul" element={<MenuBoul />} />
      <Route path="/gar" element={<MenuGar />} />
      <Route path="/child" element={<MenuChild />} />
      <Route path="*" element={<NotFounedPage />} />
      <Route path="/collagen" element={<CollagenPage />} />
      <Route path="/tea" element={<TeaPage />} />
      <Route path="/drinks" element={<DrinksPage />} />
      <Route path="/smuzi" element={<SmuziPage />} />
      <Route path="/bar" element={<BarPage />} />
      <Route path="/wine" element={<WinePage />} />
      <Route path="/new" element={<MenuNewYear />} />
    </Routes>
  );
}

export default MainRoutes;
