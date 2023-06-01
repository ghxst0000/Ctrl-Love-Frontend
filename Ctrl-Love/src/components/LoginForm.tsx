import React from "react";
import { useState, useRef } from "react";
import "./LoginForm.css";
import LoginSelected from "./../assets/login_selected.svg";
import SignupSelected from "./../assets/signup_selected.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(false);

  return (
    <div>
      <form>
        <img
          className={isLoginSelected ? "display-hidden" : ""}
          src={LoginSelected}
          onClick={() => {
            setIsLoginSelected((state) => !state);
          }}
        />
        <img
          className={!isLoginSelected ? "display-hidden" : ""}
          src={SignupSelected}
          onClick={() => setIsLoginSelected((state) => !state)}
        />

        <br />
        <input type="email" placeholder="Email" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <Link to="/swipe">
          <input type="submit" value="Continue →" />
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
