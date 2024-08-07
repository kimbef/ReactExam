import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signUpSchema, signInSchema } from "../../schemas/index.js";
import styles from "../../assets/styles/authForm.module.css";
import { navigation } from "../../common/nav.js";
import { login, register } from "../../API/auth.js";
import { AuthContext } from "../../context/AuthContextProvider.jsx";
import InvalidPassOrEmailModal from "../Login/InvalidPassOrEmail.jsx";
import AlreadyExist from "../Login/AlreadyExist.jsx";

const Login = () => {
  const navigate = useNavigate();
 
  const { setUser } = useContext(AuthContext);
  const [showInvalidModal, setShowInvalidModal] = useState(false);
  const [showUserExistsModal, setShowUserExistsModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpHandler = async (values, actions) => {
    try {
      actions.resetForm();
      await register(
        { email: values.email, password: values.password },
        setUser
      );
      navigate(navigation.getHomeUrl());
    } catch (error) {
      console.error(error.message);
      actions.setFieldError("email", error.message);
      if (error.message === "A user with this email already exists.") {
        setShowUserExistsModal(true);
      }
    }
  };

  const signInHandler = async (values, actions) => {
    try {
      actions.resetForm();
      await login({ email: values.email, password: values.password }, setUser);
      navigate(navigation.getHomeUrl());
    } catch (error) {
      console.error(error.message);
      actions.setFieldError("email", error.message);
      setShowInvalidModal(true);
    }
  };



  return (
    <section className={styles.formInput}>
      <div className={`${styles.container} ${isSignUp ? styles.active : ""}`}>
        <div
          className={`${styles["form-container"]} ${
            isSignUp ? styles["sign-up"] : styles["sign-in"]
          }`}
        >
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1>
              {isSignUp
                ? ("authenticator.createAccount")
                : ("authenticator.signIn")}
            </h1>

            <span>
              {isSignUp
                ? ("authenticator.useEmailForRegistration")
                : ("authenticator.useEmailAccount")}
            </span>

          </form>
        </div>

        <div className={styles["toggle-container"]}>
          <div className={styles.toggle}>
            <div
              className={`${styles["toggle-panel"]} ${
                isSignUp ? styles["toggle-left"] : styles["toggle-right"]
              }`}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              <h1>
                {isSignUp
                  ? ("authenticator.welcomeBack")
                  : ("authenticator.helloFriend")}
              </h1>
              <p>
                {isSignUp
                  ? ("authenticator.enterDetails")
                  : ("authenticator.registerDetails")}
              </p>
              <button
                className={`${styles.hidden} ${styles["auth-button"]}`}
                id={isSignUp ? "login" : "register"}
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? ("authenticator.signIn")
                  : ("authenticator.signUp")}
              </button>
            </div>
          </div>
        </div>

        <div className={styles["account-info"]}>
          {isSignUp ? (
            <p>
              {("authenticator.alreadyHaveAccount")}{" "}
              <Link to="#" onClick={() => setIsSignUp(false)}>
                {("authenticator.signInHere")}
              </Link>
              .
            </p>
          ) : (
            <p>
              {("authenticator.dontHaveAccount")}{" "}
              <Link to="#" onClick={() => setIsSignUp(true)}>
                {("authenticator.signUpHere")}
              </Link>
              .
            </p>
          )}
        </div>
      </div>
      <InvalidPassOrEmailModal
        show={showInvalidModal}
        onClose={() => setShowInvalidModal(false)}
      />
      <AlreadyExist
        show={showUserExistsModal}
        onClose={() => setShowUserExistsModal(false)}
      />
    </section>
  );
};

export default Login;