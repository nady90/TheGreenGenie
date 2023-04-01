import "./Cart-item.styles.scss";

import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl } = cartItem;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="cart-item-info">
        <h2>{name}</h2>
        <span>Quantity: {quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
