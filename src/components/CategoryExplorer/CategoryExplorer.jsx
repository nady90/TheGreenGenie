import React, { useContext, useState } from "react";

import "./CategoryExplorer.styles.scss";
import CategorisList from "../CategorisList/CategorisList";
import Category from "../category/Category";
import CategoryPreview from "../../components/category-preview/Category-preview";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategories,
} from "../../store/categories/category.selector";
import ProductCategorySummary from "../ProductCategorySummary/ProductCategorySummary";
import OffersSummary from "../OffersSummary/OffersSummary";
import TopBrandsSummary from "../TopBrandsSummary/TopBrandsSummary";
import ProductDealBanner from "../ProductDealBanner/ProductDealBanner";

const CategoryExplorer = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const cateogires = useSelector(selectCategories);


  const [highLightedCategory, setHighLightedCategory] = useState(null);

  return (
    <div className="category-explorer-container">
      <ProductCategorySummary type={"categories"} items={cateogires} />
      <OffersSummary items={categoriesMap["smart phones"]} />
      <TopBrandsSummary />
    </div>
  );
};

export default CategoryExplorer;
