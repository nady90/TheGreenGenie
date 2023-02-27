import React from "react";

import "./CategorisList.styles.scss";
import searchIcon from "../../assets/icons/search icon.png";
import Button from "../button/Button";

const CategorisList = () => {
  return (
    <div className="CategorisList">
      <div className="search-container">
        <img src={searchIcon} alt="Search icon" />
        <input type={"search"} />
      </div>
      <div className="categoris-column">
        <span>Bedroom</span>
        <span>Bedroom</span>
        <span>Bedroom</span>
        <span>Bedroom</span>
        <span>Bedroom</span>
        <span>Bedroom</span>
        <span>Bedroom</span>
      </div>
      <Button color={"green"}>All Categories →</Button>
    </div>
  );
};

export default CategorisList;
