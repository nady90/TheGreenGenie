import React, { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Cart-dropdown.styles.scss";
import CartItem from "../Cart-item/Cart-item";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

  const dropdownRef = useRef();

  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate("checkout");
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          dispatch(setIsCartOpen(false));
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(dropdownRef);

  return (
    <div className="cart-dropdown-container" ref={dropdownRef}>
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
