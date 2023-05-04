import { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import ProductPage from "./routes/ProductPage/ProductPage";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "./store/categories/category.action.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      // const categoriesArray = await getCategoriesArray();

      // console.log(categoriesArray);

      // dispatch(setCategories(categoriesArray));
      dispatch(fetchCategoriesAsync());
      // setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      dispatch(setCurrentUser(user));
      if (user) {
        createUserDocumentFromAuth(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product/*" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
