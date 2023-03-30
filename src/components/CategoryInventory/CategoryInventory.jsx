import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CategoryInventory.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../Product-Card/Product-card";

const CategoryInventory = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
