import React from "react";
import "./ProductFullDetails.styles.scss";
import { useParams } from "react-router";

import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesMap,
} from "../../store/categories/category.selector";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductFullDetails = () => {
  const { id } = useParams();

  window.scrollTo(0, 0);

  // const categories = useSelector(selectCategories);
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesArray = Object.values(categoriesMap);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, myItem));

  let newArr = [];

  categoriesArray.forEach((item, index) => {
    item.forEach((item, index) => {
      newArr.push(item);
    });
  });

  const myItem = newArr.find((item) => item.id == id);

  if (!myItem) return null;

  return (
    <div className="product-details-container">
      <div className="product-details-left-container">
        <img src={myItem.imageUrl} alt={myItem.name} />
      </div>
      <div className="product-details-right-container">
        <h2>{myItem.name}</h2>

        <div className="price">{`$${myItem.price}`}</div>

        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          expedita quis nemo quidem. Eveniet quam repellendus ad, eaque nisi
          incidunt quis aliquam itaque voluptates nostrum unde! Tempora sapiente
          explicabo ipsam
        </p>

        <button className="add-to-cart" onClick={addProductToCart}>
          Add Item to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductFullDetails;
