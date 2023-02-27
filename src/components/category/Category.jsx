import React from "react";
import "./Category.styles.scss";
import Button from "../button/Button";

const Category = () => {
  return (
    <div className="category">
      <h3>Bedroom</h3>
      <Button color={"lightGreen"}>Explore</Button>
    </div>
  );
};

export default Category;
