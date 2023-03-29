import React, { useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./SignIn.styles.scss";
import { UserContext } from "../../contexts/user.context";

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    // const { user } = await signInWithGooglePopup();
    await signInWithGooglePopup();

    // setCurrentUser(user);
    // Replaced by observer's pattern

    // createUserDocumentFromAuth(user);
    // moved into the user context
  };

  return (
    <>
      <h2>SIGN IN COMPONENT</h2>{" "}
      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
};

export default SignIn;
