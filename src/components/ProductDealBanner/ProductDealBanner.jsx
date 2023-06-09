import React from "react";
import "./ProductDealBanner.styles.scss";

import bgYellow from "../../assets/bgCirclesYellow.png";
import bgBlack from "../../assets/bgCirclesBlack.png";
import bgBlue from "../../assets/bgCirclesBlue.png";
import bgPink from "../../assets/bgCirclesPink.png";

import { useNavigate } from "react-router-dom";

const ProductDealBanner = ({ item, category, color }) => {
  const navigate = useNavigate();

  const bgColorImg = () => {
    if (color === "yellow") {
      return bgYellow;
    } else if (color === "blue") {
      return bgBlue;
    } else if (color === "pink") {
      return bgPink;
    }
  };

  return (
    <div
      className={`product-banner ${color}`}
      style={{
        backgroundImage: `url(${bgColorImg()})`,
      }}
      onClick={() => navigate(`/shop/${category}`)}
    >
      <img className="item-img" src={item.imageUrl} alt="" />
      <div className="banner-category">{category}</div>
      <div className="banner-discount">{`UP to ${item.discount}% OFF`}</div>
    </div>
  );
};

export default ProductDealBanner;
