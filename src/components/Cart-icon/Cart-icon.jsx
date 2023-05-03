import React, { useContext } from "react";

import "./Cart-icon.styles.scss";
import logo from "../../assets/icons/cart icon.png";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img className="cart-image" src={logo} alt="our logo" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
