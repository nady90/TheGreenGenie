import React from "react";
import "./Category.styles.scss";
import Button from "../button/Button";

const Category = ({ category }) => {
  return (
    <div className="category">
      <div>
        <h3>{category}</h3>
        <Button color={"lightGreen"}>Explore</Button>
      </div>
    </div>
  );
};

export default Category;
