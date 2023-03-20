import React from "react";

import "./FooterColumn.styles.scss";
import { NavLink } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link, index) => {
        return (
          <a key={index} className="footer-link">
            {link}
          </a>
        );
      })}
    </div>
  );
};

export default FooterColumn;
