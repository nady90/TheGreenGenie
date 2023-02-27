import React from "react";

import "./Button.styles.scss";

const Button = ({ children, color }) => {
  return <button className={`${color}-btn`}>{children}</button>;
};

export default Button;
