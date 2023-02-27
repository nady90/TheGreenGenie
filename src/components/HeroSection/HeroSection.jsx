import React from "react";

import "./HeroSection.styles.scss";
import Button from "../button/Button";

const HeroSection = () => {
  return (
    <div className="Hero-section-container">
      <div className="text-box">
        <h1>Exclusive Deals of Furniture Collection</h1>
        <p>Explore different categories. Find the best deals.</p>
        <Button color="green">Shop Now</Button>
      </div>
    </div>
  );
};

export default HeroSection;
