import { React, useContext, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import "./Shop.styles.scss";

// import ProductCard from "../../components/Product-Card/Product-card";
import CategoryPreview from "../../components/category-preview/Category-preview";
import CategoriesPreview from "../categories-preview/Categries-preview";
import CategoryInventory from "../../components/CategoryInventory/CategoryInventory";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryInventory />} />
    </Routes>
  );
}

export default Shop;
