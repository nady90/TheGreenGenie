import React from "react";
import { NavLink } from "react-router-dom";

import "./HeroSection.styles.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../assets/banners/banner1.png";
import bannerImg2 from "../../assets/banners/banner2.png";
import bannerImg3 from "../../assets/banners/banner3.png";

const HeroSection = () => {
  return (
    <div className="Hero-section-container">
      <div className="carousel-container">
        <Carousel
          className="carousel"
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2200}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
        >
          <NavLink to={"/shop/smart watches"} className="banner-container">
            <img src={bannerImg1} />
            <div className="txt-container">
              <span className="description">
                Best Deals Online on smart watches
              </span>
              <h2 className="title">SMART WEARABLE.</h2>
              <span className="offer">UP to 80% OFF</span>
            </div>
          </NavLink>

          <NavLink to={"/shop/smart phones"} className="banner-container">
            <img src={bannerImg3} />
            <div className="txt-container">
              <span className="description">Best value on smart phones</span>
              <h2 className="title">SMART PHONES.</h2>
              <span className="offer">UP to 50% OFF</span>
            </div>
          </NavLink>
          <NavLink to={"/shop/headphones"} className="banner-container">
            <img src={bannerImg2} />
            <div className="txt-container">
              <span className="description">
                Best Deals Online on headphones
              </span>
              <h2 className="title">HEADPHONES.</h2>
              <span className="offer">Free Delivery</span>
            </div>
          </NavLink>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
