import React, { useContext } from "react";

import "./Product-card.styles.scss";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, id, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
