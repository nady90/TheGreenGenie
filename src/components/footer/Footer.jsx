import React from "react";

import "./Footer.styles.scss";
import FooterColumn from "../FooterColumn/FooterColumn";
import { NavLink } from "react-router-dom";

import fbIcon from "../../assets/icons/fb logo.png";
import instaIcon from "../../assets/icons/instgram logo.png";
import linkedinIcon from "../../assets/icons/linkedin logo.png";
import ballIcon from "../../assets/icons/basketball logo.png";
import twitterIcon from "../../assets/icons/twitter logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contacts">
        <div className="logo-container">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="LOGO SVG BLUE"
              d="M47.8007 8.2027C43.885 4.2864 38.8959 1.6192 33.4643 0.538398C28.0327 -0.542402 22.4026 0.0117962 17.286 2.1309C12.1694 4.25 7.7961 7.8389 4.7192 12.4435C1.6423 17.0482 0 22.4619 0 28C0 33.5381 1.6423 38.9518 4.7192 43.5565C7.7961 48.1611 12.1694 51.75 17.286 53.8691C22.4026 55.9882 28.0327 56.5424 33.4643 55.4616C38.8959 54.3808 43.885 51.7136 47.8007 47.7973C53.0507 42.5464 56 35.4252 56 28C56 20.5748 53.0507 13.4536 47.8007 8.2027ZM7.3025 18.5245C8.7134 15.3951 10.804 12.6194 13.4224 10.3994C16.0407 8.1794 19.1209 6.5708 22.4389 5.6907C25.757 4.8106 29.2295 4.6811 32.6039 5.3116C35.9783 5.9421 39.1697 7.3167 41.9462 9.3355C35.0734 8.6864 26.4698 12.1991 19.4953 19.1609C16.863 21.7889 14.6329 24.791 12.8771 28.07C10.489 25.2288 8.6037 22.0005 7.3025 18.5245ZM22.7407 51.0045C17.4263 49.5806 12.7937 46.3086 9.6749 41.7761C6.5561 37.2437 5.1554 31.7478 5.7244 26.2754C8.6134 32.55 15.9062 38.2518 25.4771 40.7973C29.0501 41.7665 32.748 42.1955 36.448 42.07C35.1905 45.5484 33.353 48.7888 31.0134 51.6536C28.2378 51.9344 25.4342 51.7058 22.7407 50.9791V51.0045ZM40.1644 24.3918C39.2209 20.8027 37.7543 17.372 35.8116 14.21C39.4506 13.5622 43.1731 13.5364 46.8207 14.1336C48.4534 16.3939 49.657 18.9349 50.3716 21.63C51.7979 26.9452 51.282 32.5948 48.9165 37.5637C46.551 42.5326 42.4911 46.495 37.4662 48.7391C41.4371 43.1264 42.7098 33.9245 40.1644 24.3918Z"
              fill="#fff"
            />
          </svg>

          <span>TheBlueGenie</span>
        </div>

        <div className="socials-container">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5625 0.53125H6.4375C4.87158 0.532925 3.37027 1.15573 2.263 2.263C1.15573 3.37027 0.532925 4.87158 0.53125 6.4375V16.5625C0.532925 18.1284 1.15573 19.6297 2.263 20.737C3.37027 21.8443 4.87158 22.4671 6.4375 22.4688H16.5625C18.1284 22.4671 19.6297 21.8443 20.737 20.737C21.8443 19.6297 22.4671 18.1284 22.4688 16.5625V6.4375C22.4671 4.87158 21.8443 3.37027 20.737 2.263C19.6297 1.15573 18.1284 0.532925 16.5625 0.53125ZM11.5 16.5625C10.4987 16.5625 9.51995 16.2656 8.68743 15.7093C7.8549 15.153 7.20603 14.3624 6.82286 13.4373C6.43969 12.5123 6.33944 11.4944 6.53477 10.5124C6.73011 9.53033 7.21227 8.62828 7.92027 7.92027C8.62828 7.21227 9.53033 6.73011 10.5124 6.53477C11.4944 6.33944 12.5123 6.43969 13.4373 6.82286C14.3624 7.20603 15.153 7.8549 15.7093 8.68743C16.2656 9.51995 16.5625 10.4987 16.5625 11.5C16.5611 12.8422 16.0273 14.1291 15.0782 15.0782C14.1291 16.0273 12.8422 16.5611 11.5 16.5625ZM17.8281 6.4375C17.5778 6.4375 17.3331 6.36327 17.125 6.2242C16.9169 6.08514 16.7546 5.88747 16.6588 5.65621C16.563 5.42495 16.538 5.17047 16.5868 4.92496C16.6357 4.67946 16.7562 4.45394 16.9332 4.27694C17.1102 4.09994 17.3357 3.9794 17.5812 3.93057C17.8267 3.88173 18.0812 3.9068 18.3125 4.00259C18.5437 4.09838 18.7414 4.2606 18.8805 4.46873C19.0195 4.67686 19.0938 4.92156 19.0938 5.17188C19.0938 5.50754 18.9604 5.82946 18.7231 6.06681C18.4857 6.30416 18.1638 6.4375 17.8281 6.4375ZM14.875 11.5C14.875 12.1675 14.6771 12.82 14.3062 13.375C13.9354 13.9301 13.4083 14.3626 12.7916 14.6181C12.1749 14.8735 11.4963 14.9404 10.8416 14.8102C10.1869 14.6799 9.58552 14.3585 9.11351 13.8865C8.64151 13.4145 8.32007 12.8131 8.18985 12.1584C8.05962 11.5037 8.12646 10.8251 8.38191 10.2084C8.63735 9.59174 9.06993 9.06464 9.62495 8.69379C10.18 8.32294 10.8325 8.125 11.5 8.125C12.3951 8.125 13.2535 8.48058 13.8865 9.11351C14.5194 9.74645 14.875 10.6049 14.875 11.5Z"
              fill="white"
            />
          </svg>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.93388C0 0.865688 0.887625 0 1.98281 0H25.0172C26.1124 0 27 0.865688 27 1.93388V25.0661C27 26.1343 26.1124 27 25.0172 27H1.98281C0.887625 27 0 26.1343 0 25.0661V1.93388ZM8.34131 22.6024V10.4102H4.28963V22.6024H8.34131ZM6.31631 8.74463C7.72875 8.74463 8.60794 7.80975 8.60794 6.63863C8.58262 5.44219 7.73044 4.53263 6.34331 4.53263C4.95619 4.53263 4.05 5.44388 4.05 6.63863C4.05 7.80975 4.92919 8.74463 6.28931 8.74463H6.31631ZM14.5986 22.6024V15.7933C14.5986 15.4288 14.6256 15.0643 14.7336 14.8044C15.0255 14.0771 15.6921 13.3228 16.8126 13.3228C18.279 13.3228 18.8646 14.4399 18.8646 16.0802V22.6024H22.9162V15.6094C22.9162 11.8631 20.9183 10.1216 18.252 10.1216C16.1021 10.1216 15.1386 11.3029 14.5986 12.1348V12.177H14.5716C14.5805 12.1629 14.5895 12.1489 14.5986 12.1348V10.4102H10.5486C10.5992 11.5543 10.5486 22.6024 10.5486 22.6024H14.5986Z"
              fill="white"
            />
          </svg>
          <svg
            width="27"
            height="23"
            viewBox="0 0 27 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.48138 22.3125C18.6705 22.3125 24.2443 13.8699 24.2443 6.56137C24.2443 6.32512 24.2443 6.08549 24.2342 5.84924C25.3193 5.06369 26.2559 4.09113 27 2.97712C25.9863 3.42406 24.9122 3.71862 23.8123 3.85124C24.9708 3.15876 25.8385 2.06919 26.2541 0.785057C25.1657 1.42989 23.9743 1.88256 22.7323 2.12324C21.8973 1.23397 20.7924 0.644856 19.5886 0.447148C18.3849 0.24944 17.1496 0.454175 16.074 1.02964C14.9984 1.6051 14.1426 2.51918 13.6391 3.63028C13.1357 4.74139 13.0126 5.98751 13.2891 7.17562C11.0864 7.06518 8.93163 6.49297 6.96438 5.49612C4.99714 4.49927 3.2614 3.10004 1.86975 1.38918C1.16326 2.60938 0.947656 4.05273 1.26672 5.42613C1.58577 6.79953 2.41558 8.00001 3.58762 8.78381C2.70935 8.75397 1.85038 8.51813 1.08 8.09531V8.17124C1.08151 9.44949 1.52433 10.688 2.3336 11.6775C3.14287 12.6669 4.26895 13.3466 5.5215 13.6016C5.04607 13.7326 4.55495 13.7979 4.06181 13.7957C3.71416 13.7967 3.3672 13.7645 3.02569 13.6995C3.3797 14.7998 4.06902 15.7619 4.9971 16.4509C5.92518 17.1399 7.04554 17.5214 8.20125 17.5419C6.23794 19.084 3.81274 19.9203 1.31625 19.9162C0.876354 19.9181 0.436764 19.8927 0 19.8403C2.53381 21.4557 5.47644 22.3134 8.48138 22.3125Z"
              fill="white"
            />
          </svg>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3273 20.625V12.7883H16.9519L17.3445 9.74175H14.3273V7.79775C14.3273 6.91575 14.5725 6.31388 15.837 6.31388H17.4502V3.58912C16.6693 3.50626 15.8844 3.46608 15.099 3.46875C12.7736 3.46875 11.1817 4.8885 11.1817 7.49625V9.74175H8.5515V12.7883H11.1817V20.625H1.5C1.20163 20.625 0.915483 20.5065 0.704505 20.2955C0.493526 20.0845 0.375 19.7984 0.375 19.5V1.5C0.375 1.20163 0.493526 0.915483 0.704505 0.704505C0.915483 0.493526 1.20163 0.375 1.5 0.375H19.5C19.7984 0.375 20.0845 0.493526 20.2955 0.704505C20.5065 0.915483 20.625 1.20163 20.625 1.5V19.5C20.625 19.7984 20.5065 20.0845 20.2955 20.2955C20.0845 20.5065 19.7984 20.625 19.5 20.625H14.3273Z"
              fill="white"
            />
          </svg>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 15.5C29.0023 17.2782 28.6522 19.0391 27.9699 20.6812C27.2876 22.3232 26.2866 23.8138 25.0249 25.0668C23.7735 26.316 22.2882 27.3063 20.6539 27.9812C19.0195 28.6561 17.2682 29.0023 15.5 29C8.04396 29 2.00001 22.956 2.00001 15.5C1.99529 12.0384 3.32495 8.70826 5.71251 6.20188C6.97229 4.87254 8.49008 3.81424 10.173 3.09174C11.8559 2.36925 13.6686 1.99776 15.5 2.00001C17.2682 1.99772 19.0195 2.34391 20.6539 3.0188C22.2882 3.69368 23.7735 4.68403 25.0249 5.93323C26.2866 7.18618 27.2876 8.67675 27.9699 10.3188C28.6522 11.9609 29.0023 13.7218 29 15.5Z"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29 15.5C27.0303 15.5 21.5966 14.7575 16.7332 16.8925C11.45 19.2125 7.62478 22.8109 5.95753 25.0492"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4375 2.98146C12.5502 4.93153 17.1605 9.89615 18.875 14.825C20.5895 19.7538 21.224 25.814 21.6155 27.5386"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.10396 13.8125C4.65411 13.9664 11.4048 14.1048 15.7248 12.26C20.0448 10.4152 23.762 7.02201 25.0371 5.94538M3.01251 20.6388C4.20207 23.5182 6.34748 25.8999 9.0875 27.3827"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.00001 15.5C1.99529 12.0384 3.32495 8.70826 5.71251 6.20188C6.97229 4.87254 8.49008 3.81424 10.173 3.09174C11.8559 2.36925 13.6686 1.99776 15.5 2.00001M20.9 3.12321C22.4374 3.79587 23.8362 4.74877 25.0249 5.93323C26.2866 7.18618 27.2876 8.67675 27.9699 10.3188C28.6522 11.9609 29.0023 13.7218 29 15.5C29 17.1618 28.6996 18.7542 28.1495 20.225M15.5 29C17.2682 29.0023 19.0195 28.6561 20.6539 27.9812C22.2882 27.3063 23.7735 26.316 25.0249 25.0668"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="address">
          <h3>Address</h3>
          <span>+2 10-196-999-33</span>
          <span>194 Tieba St, Alexandria</span>
          <span>21523, Egypt</span>
        </div>
      </div>

      <FooterColumn
        title="My Account"
        links={["Sign in", "Register", "Order status"]}
      />

      <FooterColumn title="Help" links={["Shipping", "Returns", "Sizing"]} />

      <FooterColumn
        title="Shop"
        links={["All Products", "Bedroom", "Dinning Room"]}
      />

      <FooterColumn
        title="Legal Stuff"
        links={[
          "Shipping & Delivery",
          "Terms & Conditions",
          "Privacy & Policy",
        ]}
      />

      <div className="Copyright">
        Copyright ©2023 TheBlueGenie. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
