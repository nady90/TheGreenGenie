import React from "react";

import { useSelector } from "react-redux";

import "./Categries-preview.styles.scss";

// import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/Product-Card/Product-card";
import CategoryPreview from "../../components/category-preview/Category-preview";

import { selectCategoriesMap } from "../../store/categories/category.selector";

function CategoriesPreview() {
  // const { products } = useContext(CategoriesContext);
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
    // <>
    //   {Object.keys(categoriesMap).map((title) => {
    //     return (
    //       <>
    //         <h2>{title}</h2>
    //         <div className="products-container">
    //           {categoriesMap[title].map((product) => {
    //             return <ProductCard key={product.id} product={product} />;
    //           })}
    //         </div>
    //       </>
    //     );
    //   })}
    //   {/* <div className="products-container">
    //     {products.map((product) => {
    //     return <ProductCard key={product.id} product={product} />;
    //   })}
    //   </div> */}
    // </>
  );
}

export default CategoriesPreview;
