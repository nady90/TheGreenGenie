import React, { useContext, useState } from "react";

import "./CategoryExplorer.styles.scss";
import CategorisList from "../CategorisList/CategorisList";
import Category from "../category/Category";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/Category-preview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoryExplorer = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [highLightedCategory, setHighLightedCategory] = useState(null);

  return (
    <div className="category-explorer-container">
      <h2>Explore by Category</h2>
      <div className="categories-main-body">
        <CategorisList highLightedCategory={highLightedCategory} />
        <div className="categories-container">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return <Category key={title} category={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryExplorer;
