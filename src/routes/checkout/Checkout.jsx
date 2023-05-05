import React, { useContext } from "react";
import "./Checkout.styles.scss";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const clearItemHandler = (item) => {
    dispatch(clearItemFromCart(cartItems, item));
  };
  const addItemHandler = (item) => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = (item) =>
    dispatch(removeItemFromCart(cartItems, item));

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="checkout-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">You cart is Empty</div>
      ) : (
        ""
      )}
      {cartItems.map((item) => {
        return (
          <div className="item-container" key={item.id}>
            <img src={item.imageUrl} alt="" />

            <div className="description">
              <span>Description:</span>
              <h2>{item.name}</h2>
            </div>

            <div className="quantity-container">
              <span>Quantity:</span>
              <div className="quantity-inner-container">
                <svg
                  className="decrement-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    removeItemHandler(item);
                  }}
                >
                  <g id="Edit / Remove_Minus_Circle">
                    <path
                      id="Vector"
                      d="M8 12H16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <div className="qunatity">{item.quantity}</div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    addItemHandler(item);
                  }}
                >
                  <g id="Edit / Add_Plus_Circle">
                    <path
                      id="Vector"
                      d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="price-container">
              <span>Price:</span>
              <h2>{formatter.format(item.price * item.quantity)}</h2>
            </div>

            <span
              className="remove-container"
              onClick={() => {
                clearItemHandler(item);
              }}
            >
              <span>Remove</span>
            </span>
          </div>
        );
      })}
      <hr className="total-separator" />
      <div className="total">Total: {formatter.format(cartTotal)}</div>
    </div>
  );
};

export default Checkout;
