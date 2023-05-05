import React, { useContext } from "react";

import "./Product-card.styles.scss";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { name, id, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

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
      <div className="btns-container">
        <button className="buy-btn" onClick={addProductToCart}>
          Buy
        </button>
        <button
          className="details-btn"
          onClick={() => navigate(`/product/${id}`)}
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
