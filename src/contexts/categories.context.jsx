import React, { createContext, useState, useEffect } from "react";

// import PRODUCTS from "../shop_data.json";
// Old way with a json file.

// New Way
// import SHOP_DATA from "../shop_data.js";
import SHOP_DATA from "../production_data";

import {
  addCollectionAndDocuments,
  getCollectionAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments("new categories", SHOP_DATA);
  //   console.log("uploaded my database");
  // }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
