import "./SignUpPage.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SignUpPage = () => {
  const [allGenders, setAllGenders]: any = useState(null);
  const [data, setData]: any = useState(null);

  const navigate = useNavigate();

  async function sendRegisterInfo(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);
    const entries = [...form.entries()];

    const user = entries.reduce((acc: any, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    const ageInMilliSecs = Date.now() - Date.parse(user.birthDate);
    if (ageInMilliSecs <= 568036800000) {
      setData("age error");
      return;
    }

    if (user.password !== user.passwordAgain) {
      setData("password error");
      return;
    }

    const apiAddress = "/api/v1/users";

    const body = JSON.stringify({
      name: user.name,
      birthDate: new Date(Date.parse(user.birthDate)).toISOString(),
      gender: Number(user.gender),
      email: user.email,
      password: user.password,
    });

    const init: RequestInit = {
      method: "POST",
      headers: new Headers([["content-type", "application/json"]]),
      body: body,
    };

    const response = await fetch(apiAddress, init);
    switch (response.status) {
      case 200:
        setData(await response.json());
        //redirect to profile
        navigate("/my-profile");

        break;
      case 418:
        setData("email error");
        break;
    }
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/genders");
      const genders = await response.json();
      setAllGenders(genders);
    })();
  }, []);

  return (
    <div className="sign-up-page-container">
      <div className="sign-up-content">
        <div className="top-row-design">
          <img src={logo} alt="this is our logo" />
          <div className="signup-login-buttons">
            <a href="/login" className="navbar-button">
              Log In &nbsp;{" "}
            </a>
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
            <span style={{ color: "#000000" }}>/</span>&nbsp; Sign Up
          </div>
          <div className="sign-up-form">
            <form onSubmit={sendRegisterInfo}>
              <div>
                <span>{">"}</span>{" "}
                <input type="text" placeholder="Name" name="name" required />
              </div>
              <div>
                <span>{">"}</span>{" "}
                <input
                  type="date"
                  placeholder="Birth date"
                  name="birthDate"
                  required
                />
              </div>
              {data && data === "age error" ? (
                <span className="error">
                  You are too young for love! Go play alone and get older!
                </span>
              ) : (
                <></>
              )}

              <div className="selector">
                <span>{">"}</span>{" "}
                <select name="gender" defaultValue="Select a Gender" required>
                  <option value="" disabled>
                    Select a Gender
                  </option>
                  {allGenders &&
                    allGenders.map((g: any) => (
                      <option value={g.value} key={g.value}>
                        {g.name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <span>{">"}</span>{" "}
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>
              {data === "email error" ? (
                <span className="error">
                  This e-mail address is already taken
                </span>
              ) : (
                <></>
              )}
              <div>
                <span>{">"}</span>{" "}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>

              <div>
                <span>{">"}</span>{" "}
                <input
                  type="password"
                  placeholder="Password"
                  name="passwordAgain"
                  required
                />
              </div>
              {data === "password error" ? (
                <span className="error">The two passwords don't match!</span>
              ) : (
                <></>
              )}

              <div className="button-container">
                <span>
                  <a href="/login">Want to Log In?</a>
                </span>
                <input type="submit" value="Continue >" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUpPage;
