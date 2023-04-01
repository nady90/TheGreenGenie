import React, { useContext } from "react";

import "./Cart-icon.styles.scss";
import logo from "../../assets/icons/cart icon.png";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img className="cart-image" src={logo} alt="our logo" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
