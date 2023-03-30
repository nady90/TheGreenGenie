import React, { useContext } from "react";
import "./Checkout.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  const clearItemHandler = (item) => {
    clearItemFromCart(item);
  };

  return (
    <div>
      <h1>I am a Checkout page</h1>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <span>{item.quantity}</span>
            <div
              onClick={() => {
                removeItemFromCart(item);
              }}
            >
              decrement
            </div>
            <span
              onClick={() => {
                addItemToCart(item);
              }}
            >
              increment
            </span>
            <div
              onClick={() => {
                clearItemHandler(item);
              }}
            >
              X
            </div>
          </div>
        );
      })}
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
