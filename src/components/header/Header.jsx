import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import axios from "axios";

import { useDispatch } from "react-redux";

import "./Header.styles.scss";

import searchIcon from "../../assets/icons/search icon.png";
import cartIcon from "../../assets/icons/cart icon.png";
import profileIcon from "../../assets/icons/profile icon.png";
import CartIcon from "../Cart-icon/Cart-icon";
import CartDropdown from "../Cart-dropdown/Cart-dropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const [ip, setIp] = useState({
    ip: "",
    countryName: "",
    countryCode: "",
    city: "",
    timezone: "",
  });

  const dispatch = useDispatch();

  const searchResultsRef = useRef();

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setIp({
          ...ip,
          ip: data.ip,
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          timezone: data.timezone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  useEffect(() => {}, []);

  const signOutHandler = async () => {
    dispatch(setIsCartOpen(false));
    console.log("logged out");
    const res = await signOutUser();
    // console.log(res);
    // setCurrentUser(null);
    // Not needed because onAuthStateChanged will catch it.
  };

  const logoClickHandler = () => {
    navigate("home");
  };

  const signInClickHandler = () => {
    navigate("auth");
  };

  const handleSearchClick = (e) => {
    if (e.key === "Enter") {
      navigate("/shop");
      e.target.value = "";
      searchResultsRef.current.style.display = "none";
    }
  };

  const handleSearchChange = (e) => {
    if (e.target.value !== "") {
      searchResultsRef.current.style.display = "block";
    } else {
      searchResultsRef.current.style.display = "none";
    }
  };

  const handleSearchDropdownClick = (e) => {
    navigate("/shop");
    e.target.parentNode.parentNode.querySelector("input").value = "";
    searchResultsRef.current.style.display = "none";
  };

  return (
    <>
      <div className="top-navbar">
        <div className="welcome-txt">
          Welcome to <span>TheBlueGenie</span>
        </div>
        <div className="right-container">
          <div className="delivery">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.17935 6.79349C1.19016 3.61305 3.77717 1.04355 6.95761 1.05432C10.1381 1.06516 12.7075 3.65218 12.6968 6.83262V6.89784C12.6576 8.96523 11.5033 10.8761 10.088 12.3696C9.27869 13.21 8.37486 13.9541 7.39457 14.587C7.13245 14.8137 6.74365 14.8137 6.48153 14.587C5.02015 13.6358 3.73755 12.4349 2.6924 11.0391C1.76086 9.82205 1.23198 8.34481 1.17935 6.81305V6.79349Z"
                stroke="#008ECC"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.93804 8.75002C7.95737 8.75002 8.7837 7.92369 8.7837 6.90437C8.7837 5.88504 7.95737 5.05872 6.93804 5.05872C5.91872 5.05872 5.09239 5.88504 5.09239 6.90437C5.09239 7.92369 5.91872 8.75002 6.93804 8.75002Z"
                stroke="#008ECC"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="delivery-txt">Deliver to</div>
            <div className="city">{ip.city} </div>
          </div>
          <div className="track-container">
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10.25C6.39782 10.25 6.77936 10.092 7.06066 9.81066C7.34196 9.52936 7.5 9.14782 7.5 8.75C7.5 8.35218 7.34196 7.97064 7.06066 7.68934C6.77936 7.40804 6.39782 7.25 6 7.25C5.60218 7.25 5.22064 7.40804 4.93934 7.68934C4.65804 7.97064 4.5 8.35218 4.5 8.75C4.5 9.14782 4.65804 9.52936 4.93934 9.81066C5.22064 10.092 5.60218 10.25 6 10.25V10.25ZM13.5 10.25C13.8978 10.25 14.2794 10.092 14.5607 9.81066C14.842 9.52936 15 9.14782 15 8.75C15 8.35218 14.842 7.97064 14.5607 7.68934C14.2794 7.40804 13.8978 7.25 13.5 7.25C13.1022 7.25 12.7206 7.40804 12.4393 7.68934C12.158 7.97064 12 8.35218 12 8.75C12 9.14782 12.158 9.52936 12.4393 9.81066C12.7206 10.092 13.1022 10.25 13.5 10.25V10.25Z"
                stroke="#008ECC"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5375 8.75H11.25V0.95C11.25 0.830653 11.2026 0.716193 11.1182 0.631802C11.0338 0.547411 10.9193 0.5 10.8 0.5H0.75M4.2375 8.75H2.7C2.64091 8.75 2.58239 8.73836 2.52779 8.71575C2.4732 8.69313 2.42359 8.65998 2.3818 8.6182C2.34002 8.57641 2.30687 8.5268 2.28425 8.47221C2.26164 8.41761 2.25 8.35909 2.25 8.3V4.625"
                stroke="#008ECC"
                strokeLinecap="round"
              />
              <path
                d="M1.5 2.75H4.5"
                stroke="#008ECC"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 2.75H15.4575C15.5445 2.75002 15.6296 2.77525 15.7025 2.82264C15.7755 2.87002 15.8331 2.93753 15.8685 3.017L17.211 6.038C17.2366 6.09536 17.2499 6.15744 17.25 6.22025V8.3C17.25 8.35909 17.2384 8.41761 17.2157 8.47221C17.1931 8.5268 17.16 8.57641 17.1182 8.6182C17.0764 8.65998 17.0268 8.69313 16.9722 8.71575C16.9176 8.73836 16.8591 8.75 16.8 8.75H15.375M11.25 8.75H12"
                stroke="#008ECC"
                strokeLinecap="round"
              />
            </svg>
            <div className="track-txt">Track your order</div>
          </div>
          <NavLink to={"/shop"} className="offers-container">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.59572 4.29184C2.59572 3.35509 3.35547 2.59534 4.29147 2.59534H5.06322C5.51022 2.59534 5.93997 2.41834 6.25797 2.10259L6.79722 1.56259C7.45797 0.89884 8.53197 0.89584 9.19572 1.55659L9.20247 1.56259L9.74247 2.10259C10.0597 2.41834 10.4895 2.59534 10.9372 2.59534H11.7082C12.645 2.59534 13.4047 3.35509 13.4047 4.29184V5.06209C13.4047 5.51059 13.5817 5.93959 13.8975 6.25759L14.4375 6.79759C15.1012 7.45834 15.105 8.53159 14.4442 9.19609L14.4375 9.20284L13.8975 9.74284C13.5817 10.0593 13.4047 10.4898 13.4047 10.9368V11.7086C13.4047 12.6453 12.645 13.4043 11.7082 13.4043H10.9372C10.4895 13.4043 10.0597 13.5821 9.74247 13.8978L9.20247 14.4371C8.54247 15.1016 7.46847 15.1046 6.80397 14.4438C6.80172 14.4416 6.79947 14.4393 6.79722 14.4371L6.25797 13.8978C5.93997 13.5821 5.51022 13.4043 5.06322 13.4043H4.29147C3.35547 13.4043 2.59572 12.6453 2.59572 11.7086V10.9368C2.59572 10.4898 2.41797 10.0593 2.10222 9.74284L1.56297 9.20284C0.898473 8.54209 0.895473 7.46809 1.55622 6.80434L1.56297 6.79759L2.10222 6.25759C2.41797 5.93959 2.59572 5.51059 2.59572 5.06209V4.29184Z"
                stroke="#008ECC"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.07251 9.92711L9.92751 6.07211"
                stroke="#008ECC"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.92505 10.4918C9.77505 10.4918 9.63255 10.4318 9.52755 10.3268C9.47505 10.2743 9.43755 10.2068 9.40755 10.1393C9.37755 10.0718 9.36255 10.005 9.36255 9.9293C9.36255 9.8543 9.37755 9.7793 9.40755 9.7118C9.43755 9.6443 9.47505 9.5843 9.52755 9.5318C9.73755 9.3218 10.1125 9.3218 10.3225 9.5318C10.375 9.5843 10.42 9.6443 10.45 9.7118C10.4725 9.7793 10.4875 9.8543 10.4875 9.9293C10.4875 10.005 10.4725 10.0718 10.45 10.1393C10.42 10.2068 10.375 10.2743 10.3225 10.3268C10.2175 10.4318 10.075 10.4918 9.92505 10.4918Z"
                fill="#008ECC"
              />
              <path
                d="M6.06995 6.63708C5.99495 6.63708 5.92745 6.62133 5.85995 6.59133C5.79245 6.56133 5.72495 6.52457 5.67245 6.47207C5.61995 6.41207 5.58245 6.35207 5.55245 6.28457C5.52245 6.21632 5.50745 6.14957 5.50745 6.07457C5.50745 5.99882 5.52245 5.92457 5.55245 5.85707C5.58245 5.78957 5.61995 5.72207 5.67245 5.67707C5.88995 5.46632 6.25745 5.46632 6.46745 5.67707C6.57245 5.78132 6.63245 5.92457 6.63245 6.07457C6.63245 6.14957 6.62495 6.21632 6.59495 6.28457C6.56495 6.35207 6.51995 6.41207 6.46745 6.47207C6.41495 6.52457 6.35495 6.56133 6.28745 6.59133C6.21995 6.62133 6.14495 6.63708 6.06995 6.63708Z"
                fill="#008ECC"
              />
            </svg>
            <div className="offers-txt">All Offers</div>
          </NavLink>
        </div>
      </div>
      <div className="header-container">
        <div onClick={logoClickHandler} className="logo-container">
          <svg
            width="42"
            height="42"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="LOGO SVG BLUE"
              d="M47.8007 8.2027C43.885 4.2864 38.8959 1.6192 33.4643 0.538398C28.0327 -0.542402 22.4026 0.0117962 17.286 2.1309C12.1694 4.25 7.7961 7.8389 4.7192 12.4435C1.6423 17.0482 0 22.4619 0 28C0 33.5381 1.6423 38.9518 4.7192 43.5565C7.7961 48.1611 12.1694 51.75 17.286 53.8691C22.4026 55.9882 28.0327 56.5424 33.4643 55.4616C38.8959 54.3808 43.885 51.7136 47.8007 47.7973C53.0507 42.5464 56 35.4252 56 28C56 20.5748 53.0507 13.4536 47.8007 8.2027ZM7.3025 18.5245C8.7134 15.3951 10.804 12.6194 13.4224 10.3994C16.0407 8.1794 19.1209 6.5708 22.4389 5.6907C25.757 4.8106 29.2295 4.6811 32.6039 5.3116C35.9783 5.9421 39.1697 7.3167 41.9462 9.3355C35.0734 8.6864 26.4698 12.1991 19.4953 19.1609C16.863 21.7889 14.6329 24.791 12.8771 28.07C10.489 25.2288 8.6037 22.0005 7.3025 18.5245ZM22.7407 51.0045C17.4263 49.5806 12.7937 46.3086 9.6749 41.7761C6.5561 37.2437 5.1554 31.7478 5.7244 26.2754C8.6134 32.55 15.9062 38.2518 25.4771 40.7973C29.0501 41.7665 32.748 42.1955 36.448 42.07C35.1905 45.5484 33.353 48.7888 31.0134 51.6536C28.2378 51.9344 25.4342 51.7058 22.7407 50.9791V51.0045ZM40.1644 24.3918C39.2209 20.8027 37.7543 17.372 35.8116 14.21C39.4506 13.5622 43.1731 13.5364 46.8207 14.1336C48.4534 16.3939 49.657 18.9349 50.3716 21.63C51.7979 26.9452 51.282 32.5948 48.9165 37.5637C46.551 42.5326 42.4911 46.495 37.4662 48.7391C41.4371 43.1264 42.7098 33.9245 40.1644 24.3918Z"
              fill="#008ECC"
            />
          </svg>
          <span>TheBlueGenie</span>
        </div>

        <div className="search-container">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82494 14.5664C11.5481 14.5664 14.5664 11.5481 14.5664 7.82494C14.5664 4.10176 11.5481 1.08353 7.82494 1.08353C4.10176 1.08353 1.08353 4.10176 1.08353 7.82494C1.08353 11.5481 4.10176 14.5664 7.82494 14.5664Z"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5137 12.8639L15.1568 15.5"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search electronics, toys and more..."
            onKeyDown={handleSearchClick}
            onChange={handleSearchChange}
          />

          <div
            className="search-results-container"
            ref={searchResultsRef}
            onClick={handleSearchDropdownClick}
          >
            <div className="search-results-bg"></div>
            <div className="search-results-content">View all our products</div>
          </div>
        </div>

        <div className="icons-container">
          {currentUser ? (
            <>
              <div className="sign-out-button" onClick={signOutHandler}>
                Sign Out
              </div>
              <CartIcon />
            </>
          ) : (
            <>
              <div
                onClick={signInClickHandler}
                className="sign-in-icon-container"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4.75"
                    stroke="#008ECC"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
                    stroke="#008ECC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>Sign Up/Sign In</div>
              </div>
            </>
          )}
        </div>
        {isCartOpen ? <CartDropdown /> : null}
      </div>
    </>
  );
};

export default Header;
