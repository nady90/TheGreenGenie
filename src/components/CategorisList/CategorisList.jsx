import React, { useContext } from "react";

import "./CategorisList.styles.scss";
import searchIcon from "../../assets/icons/search icon.png";
import Button from "../button/Button";
import { CategoriesContext } from "../../contexts/categories.context";

const CategorisList = ({ highLightedCategory }) => {
  const { categoriesMap } = useContext(CategoriesContext);

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
