import React from "react";

import "./CategoryExplorer.styles.scss";
import CategorisList from "../CategorisList/CategorisList";
import Category from "../category/Category";

const CategoryExplorer = () => {
  return (
    <div className="category-explorer-container">
      <h2>Explore by Category</h2>
      <div className="categories-main-body">
        <CategorisList />
        <div className="categories-container">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
};

export default CategoryExplorer;
