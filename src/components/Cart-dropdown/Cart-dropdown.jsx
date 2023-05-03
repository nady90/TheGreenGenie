import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Cart-dropdown.styles.scss";
import CartItem from "../Cart-item/Cart-item";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-dropdown-title">Your Cart</div>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>

      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;
