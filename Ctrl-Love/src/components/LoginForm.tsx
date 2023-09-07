import "./LoginForm.css";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [loginResponse, setLoginResponse] = useState(true);

  const navigate = useNavigate();

  async function submitLogin(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);
    const entries = [...form.entries()];

    const credentials = entries.reduce((acc: any, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    const apiAddress = "/api/v1/users/sign-in";

    const init: RequestInit = {
      method: "POST",
      headers: new Headers([["content-type", "application/json"]]),
      body: JSON.stringify(credentials),
    };

    const response = await fetch(apiAddress, init);
    const data = await response.json();
    setLoginResponse(data);

    if (data) {
      navigate("/my-profile");
    }
  }

  return (
    <div className="sign-up-log-in">
      <div className="sign-up-content">
        <div className="top-row-design">
          <img src={logo} alt="this is our logo" />
          <div className="signup-login-buttons">
            <Link to={"/signup"}>
            <a  className="navbar-button">
              Sign up &nbsp;{" "}
            </a>
            </Link>
            <b>
              <span style={{ color: "#1EEBB1" }}>/</span>
              <span style={{ color: "#FDE8EE" }}>/</span>
            </b>
            <a href="/" className="navbar-button">
              &nbsp; Home{" "}
            </a>
          </div>
        </div>
        <section>
          <div className="sing-up-text">
            <span style={{ color: "#FDE8EE" }}>/</span>
            <span style={{ color: "#000000" }}>/</span>&nbsp; Log In
          </div>
          <div className="sign-up-form">
            <form onSubmit={submitLogin}>
              <div>
                <span>{">"}</span>{" "}
                <input type="email" placeholder="Email address" name="email" />
              </div>
              <div>
                <span>{">"}</span>{" "}
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div className="button-container">
                <span>
                  <a href="/signup">Want to Sign Up?</a>
                </span>
                <input type="submit" value="Continue >" />
              </div>
            </form>
            <span
              style={
                loginResponse
                  ? { display: "none" }
                  : { color: "red", display: "block" }
              }
            >
              Failed to Log In
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
