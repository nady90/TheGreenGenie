import React, { useContext } from "react";

import "./Product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, id, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="card-footer">
        <span className="product-name">{name}</span>
        <span className="price">
          <span> Price: </span>${price}
        </span>
      </div>
      <button onClick={addProductToCart}>BUY BUTTON</button>
    </div>
  );
};

export default ProductCard;
