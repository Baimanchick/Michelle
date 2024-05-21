import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const BagetPage = lazy(() => import("../pages/BagetPage"));
const MenuDishes = lazy(() => import("../pages/MenuDishes"));
const MenuPage = lazy(() => import("../pages/MenuPage"));
const NotF = lazy(() => import("../pages/NotF"));
const MenuSalad = lazy(() => import("../pages/MenuSalad"));
const MenuPlat = lazy(() => import("../pages/MenuPlat"));
const MenuBaget = lazy(() => import("../pages/MenuBaget"));
const MenuCoffe = lazy(() => import("../pages/MenuCoffe"));
const MenuSoap = lazy(() => import("../pages/MenuSoap"));
const MenuDinner = lazy(() => import("../pages/MenuDinner"));
const MenuHotMeal = lazy(() => import("../pages/MenuHotMeal"));
const MenuPizza = lazy(() => import("../pages/MenuPizza"));
const MenuBoul = lazy(() => import("../pages/MenuBoul"));
const MenuGar = lazy(() => import("../pages/MenuGar"));
const MenuChild = lazy(() => import("../pages/MenuChild"));
const NotFounedPage = lazy(() => import("../pages/NotF"));
const CollagenPage = lazy(() => import("../pages/CollagenPage"));
const TeaPage = lazy(() => import("../pages/TeaPage"));
const DrinksPage = lazy(() => import("../pages/DrinksPage"));
const SmuziPage = lazy(() => import("../pages/SmuziPage"));
const BarPage = lazy(() => import("../pages/BarPage"));
const WinePage = lazy(() => import("../pages/WinePage"));
const MenuNewYear = lazy(() => import("../pages/MenuNewYear"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const MenuBreakContruct = lazy(() => import("../pages//MenuBreakContruct"));
const PastaPage = lazy(() => import("../pages/PastaPage"));
const DiscountPage = lazy(() => import("../pages/DiscountPage"));


function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<MenuPage />} />
        <Route path="/menu" element={<MenuDishes />} />
        <Route path="/notf" element={<NotF />} />
        <Route path="/salad" element={<MenuSalad />} />
        <Route path="/plat" element={<MenuPlat />} />
        <Route path="/baget" element={<MenuBaget />} />
        <Route path="/bagets" element={<BagetPage />} />
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
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/construct" element={<MenuBreakContruct/>} />
        <Route path="/pasta" element={<PastaPage/>} />
        <Route path="/discount" element={<DiscountPage/>} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
