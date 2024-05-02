import React, { Suspense, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

export default MainLayout;
