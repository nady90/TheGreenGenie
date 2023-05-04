import React from "react";

import "./FooterColumn.styles.scss";
import { NavLink } from "react-router-dom";

const FooterColumn = ({ title, links, paths }) => {
  console.log("paths", paths);

  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link, index) => {
        return (
          <NavLink to={paths[index]} key={index} className="footer-link">
            {link}
          </NavLink>
        );
      })}
    </div>
  );
};

export default FooterColumn;
