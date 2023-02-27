import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.styles.scss";

import searchIcon from "../../assets/icons/search icon.png";
import cartIcon from "../../assets/icons/cart icon.png";
import profileIcon from "../../assets/icons/profile icon.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <svg
          height="36"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="LOGO SVG"
            d="M47.8007 8.2027C43.885 4.2864 38.8959 1.6192 33.4643 0.538398C28.0327 -0.542402 22.4026 0.0117962 17.286 2.1309C12.1694 4.25 7.7961 7.8389 4.7192 12.4435C1.6423 17.0482 0 22.4619 0 28C0 33.5381 1.6423 38.9518 4.7192 43.5565C7.7961 48.1611 12.1694 51.75 17.286 53.8691C22.4026 55.9882 28.0327 56.5424 33.4643 55.4616C38.8959 54.3808 43.885 51.7136 47.8007 47.7973C53.0507 42.5464 56 35.4252 56 28C56 20.5748 53.0507 13.4536 47.8007 8.2027ZM7.3025 18.5245C8.7134 15.3951 10.804 12.6194 13.4224 10.3994C16.0407 8.1794 19.1209 6.5708 22.4389 5.6907C25.757 4.8106 29.2295 4.6811 32.6039 5.3116C35.9783 5.9421 39.1697 7.3167 41.9462 9.3355C35.0734 8.6864 26.4698 12.1991 19.4953 19.1609C16.863 21.7889 14.6329 24.791 12.8771 28.07C10.489 25.2288 8.6037 22.0005 7.3025 18.5245ZM22.7407 51.0045C17.4263 49.5806 12.7937 46.3086 9.6749 41.7761C6.5561 37.2437 5.1554 31.7478 5.7244 26.2754C8.6134 32.55 15.9062 38.2518 25.4771 40.7973C29.0501 41.7665 32.748 42.1955 36.448 42.07C35.1905 45.5484 33.353 48.7888 31.0134 51.6536C28.2378 51.9344 25.4342 51.7058 22.7407 50.9791V51.0045ZM40.1644 24.3918C39.2209 20.8027 37.7543 17.372 35.8116 14.21C39.4506 13.5622 43.1731 13.5364 46.8207 14.1336C48.4534 16.3939 49.657 18.9349 50.3716 21.63C51.7979 26.9452 51.282 32.5948 48.9165 37.5637C46.551 42.5326 42.4911 46.495 37.4662 48.7391C41.4371 43.1264 42.7098 33.9245 40.1644 24.3918Z"
            fill="#07484A"
          />
        </svg>
        <span>INWOOD</span>
      </div>

      <div className="links-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLinkStyles" : "inactiveLinkStyles"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? "activeLinkStyles" : "inactiveLinkStyles"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="categories"
          className={({ isActive }) =>
            isActive ? "activeLinkStyles" : "inactiveLinkStyles"
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "activeLinkStyles" : "inactiveLinkStyles"
          }
        >
          About
        </NavLink>
        <NavLink
          to="contact-us"
          className={({ isActive }) =>
            isActive ? "activeLinkStyles" : "inactiveLinkStyles"
          }
        >
          Contact Us
        </NavLink>{" "}
      </div>

      <div className="icons-container">
        <img src={searchIcon} alt="Search icon" />
        <img src={cartIcon} alt="Cart icon" />
        <img src={profileIcon} alt="Profile icon" />
      </div>
    </div>
  );
};

export default Header;