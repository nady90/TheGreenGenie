import React from "react";
import "./TopBrandsSummary.styles.scss";
import ProductDealBanner from "../ProductDealBanner/ProductDealBanner";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useNavigate } from "react-router-dom";

const TopBrandsSummary = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const navigate = useNavigate();

  return (
    <div className={`top-brands-summary-container`}>
      <div className="top-div">
        <h3>
          <span className="neutral-txt">Top </span>
          <span className="primary-txt">Electroince Brands</span>
        </h3>
        <div className="view-all-container" onClick={() => navigate("/shop")}>
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
        {categoriesMap["smart phones"] && (
          <>
            <ProductDealBanner
              item={categoriesMap["smart phones"][0]}
              category="smart phones"
              color="yellow"
            />
            <ProductDealBanner
              item={categoriesMap["cameras"][0]}
              category="cameras"
              color="blue"
            />
            <ProductDealBanner
              item={categoriesMap["headphones"][0]}
              category="Headphones"
              color="pink"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TopBrandsSummary;
