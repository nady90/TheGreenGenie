import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./SignIn.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h2>SIGN IN COMPONENT</h2>{" "}
      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
};

export default SignIn;
