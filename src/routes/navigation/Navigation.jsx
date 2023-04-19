import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
