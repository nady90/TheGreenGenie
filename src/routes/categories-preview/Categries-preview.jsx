import React, { useContext } from "react";

import "./Categries-preview.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/Product-Card/Product-card";
import CategoryPreview from "../../components/category-preview/Category-preview";

function CategoriesPreview() {
  // const { products } = useContext(CategoriesContext);
  const { categoriesMap } = useContext(CategoriesContext);

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
