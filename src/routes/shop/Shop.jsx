import { React, useContext } from "react";

import "./Shop.styles.scss";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/Product-Card/Product-card";

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
