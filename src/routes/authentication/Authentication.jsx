import React from "react";

import "./Authentication.styles.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Authentication = () => {
  return (
    <div className="authentication-page">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
