import React from "react";

import "./Categries-preview.styles.scss";

import CategoryPreview from "../../components/category-preview/Category-preview";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/Spinner";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  window.scrollTo(0, 0);

  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return isLoading ? (
          <Spinner />
        ) : (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
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
