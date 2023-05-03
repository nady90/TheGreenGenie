import React from "react";
import "./ProductCategorySummary.styles.scss";

import { NavLink } from "react-router-dom";

const styles = {
  width: "132px",
  height: "172px",
};

const ProductCategorySummary = ({ type, items }) => {
  let titleNeutral;
  let titlePrimary;
  if (type === "categories") {
    titleNeutral = "Shop From ";
    titlePrimary = "Top Categories";
  }

  return (
    <div className={`product-category-summary-container ${type}`}>
      <div className="top-div">
        <h3>
          <span className="neutral-txt">{titleNeutral}</span>
          <span className="primary-txt">{titlePrimary}</span>
        </h3>
        <div className="view-all-container">
          <NavLink className="view-all-link" to={"/shop"}>
            View All
          </NavLink>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.375 0.75L6.625 6L1.375 11.25"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="bottom-div">
        {items &&
          items.map((item, idx) => {
            return (
              <>
                <div className="item-container" key={idx}>
                  <div className="image-container" key={item.title}>
                    <img src={item.categoryImage} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCategorySummary;
