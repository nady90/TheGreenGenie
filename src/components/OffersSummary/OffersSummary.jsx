import React from "react";
import "./OffersSummary.styles.scss";
import { NavLink } from "react-router-dom";

const OffersSummary = ({ items }) => {
  return (
    <div className={`offers-summary-container`}>
      <div className="top-div">
        <h3>
          <span className="neutral-txt">Grab the best deal on </span>
          <span className="primary-txt">Smartphones</span>
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
          items.map((item) => {
            return (
              <div className="item-container" key={item.id}>
                <div className="item-img-container">
                  <img
                    className="item-img"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <span className="dicount-percentage">
                    {`${item.discount}% OFF`}
                  </span>
                </div>
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">
                    <span>{`$${(
                      item.price *
                      ((100 - item.discount) / 100)
                    ).toFixed(0)}`}</span>{" "}
                    <s className="striked-price">{`$${item.price}`}</s>
                  </span>
                  <span className="item-saving">
                    {`Save - $${(item.price * (item.discount / 100)).toFixed(
                      0
                    )}`}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OffersSummary;
