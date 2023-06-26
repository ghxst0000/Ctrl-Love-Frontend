import "./LoginForm.css";
import logo from "../assets/logo.svg";
import React from "react";

export const LoginForm = () => {
  return (
    <div className="sign-up-log-in">
      <div className="sign-up-content">
        <div className="top-row-design">
          <img src={logo} alt="this is our logo" />
          <div className="signup-login-buttons">
            <b>
              <span style={{ color: "#1EEBB1" }}>/</span>
              <span style={{ color: "#FDE8EE" }}>/</span>
            </b>
            <a href="/" className="navbar-button">
              &nbsp; Landing{" "}
            </a>
          </div>
        </div>
        <section>
          <div className="sing-up-text">
            <span style={{ color: "#FDE8EE" }}>/</span>
            <span style={{ color: "#000000" }}>/</span>&nbsp; Log In
          </div>
          <div className="sign-up-form">
            <form>
              <div>
                <span>{">"}</span>{" "}
                <input type="email" placeholder="Email address" name="email" />
              </div>
              <div>
                <span>{">"}</span>{" "}
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div className="button-container">
                <input type="submit" value="Continue >" />
                <span>
                  <a href="/signup">Want to Sign Up?</a>
                </span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
