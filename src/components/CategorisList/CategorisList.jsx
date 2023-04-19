import React, { useContext } from "react";

import "./CategorisList.styles.scss";
import searchIcon from "../../assets/icons/search icon.png";
import Button from "../button/Button";
import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategorisList = ({ highLightedCategory }) => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className="CategorisList">
      <div className="search-container">
        <img src={searchIcon} alt="Search icon" />
        <input type={"search"} />
      </div>
      <div className="categoris-column">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <span key={title}>{title}</span>;
        })}
      </div>
      <Button color={"green"}>
        All Categories <span>→</span>
      </Button>
    </div>
  );
};

export default CategorisList;
