import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./LoginForm.css";
import LoginSelected from "./../assets/login_selected.svg";
import SignupSelected from "./../assets/signup_selected.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(false);

  const [allGenders, setAllGenders] = useState(null);

  const navigate = useNavigate();

  useEffect( () => {
    (async () => {
      const response = await fetch("/api/v1/genders");
      const genders = await response.json();
      setAllGenders(genders);
    }) ()
  }, [])

  return (
    <div>
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

        
        <div 
        className={isLoginSelected ? "display-hidden" : ""}>
          <form onSubmit={(e) => {
            e.preventDefault();
            navigate("/swipe");

          }}>
            <br />
            <input type="email" placeholder="Email" name="Email" required />
            <br />
            <br />
            <input type="password" placeholder="Password" name="Password" required />
            <br />
            <br />
            <input type="submit" value="Continue →" />
          </form>
        </div>

        <div 
        className={!isLoginSelected ? "display-hidden" : ""}>
          <form>
            <input type="text" placeholder="Name" name="Name" />
            <br />
            <br />
            <input type="date" placeholder="Birth date" name="BirthDate" />
            <br />
            <br />
            <select name="Gender">
              {allGenders && allGenders.map(g => 
                <option value={g.value}>
                  {g.name}
                </option>)}
            </select>
            <br />
            <br />
            <input type="email" placeholder="Email address" name="Email" />
            <br />
            <br />
            <input type="password" placeholder="Password" name="Password" />
            <br />
            <br />
            <input type="submit" value="Continue →" />
          </form>
        </div>
    
    </div>
  );
};

export default LoginForm;
