import React from "react";

import "./Category-preview.styles.scss";
import ProductCard from "../../components/Product-Card/Product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categoriy-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div>
        {products
          .filter((_, idx) => {
            return idx < 4;
          })
          .map((pdt) => {
            return <ProductCard key={pdt.id} product={pdt} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
