import React from "react";
import "./ProductPage.styles.scss";
import { Routes, Route } from "react-router-dom";
import ProductFullDetails from "../../components/ProductFullDetails/ProductFullDetails";

const ProductPage = () => {
  return (
    <Routes>
      <Route path=":id" element={<ProductFullDetails />} />
    </Routes>
  );
};

export default ProductPage;
