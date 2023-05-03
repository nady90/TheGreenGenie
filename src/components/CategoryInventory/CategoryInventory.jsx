import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CategoryInventory.styles.scss";
import ProductCard from "../Product-Card/Product-card";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoryInventory = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log(products);
  }, [categoriesMap, category]);

  return (
    <div>
      {products &&
        products.map((pdt) => {
          return <ProductCard key={pdt.id} product={pdt} />;
        })}
    </div>
  );
};

export default CategoryInventory;
