import React from "react";

import "./Authentication.styles.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Authentication = () => {
  return (
    <>
      <h1>authentication</h1>
      <hr />
      <SignIn />
      <hr />
      <SignUp />
    </>
  );
};

export default Authentication;
