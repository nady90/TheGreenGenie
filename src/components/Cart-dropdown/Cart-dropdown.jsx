import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Cart-dropdown.styles.scss";
import CartItem from "../Cart-item/Cart-item";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("checkout");
  };

  return (
    <div className="cart-dropdown-container">
      CartDropdown
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
