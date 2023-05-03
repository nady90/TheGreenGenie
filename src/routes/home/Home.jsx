import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import "./Home.styles.scss";
import Navigation from "../navigation/Navigation";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoryExplorer from "../../components/CategoryExplorer/CategoryExplorer";

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <CategoryExplorer />
    </div>
  );
}
