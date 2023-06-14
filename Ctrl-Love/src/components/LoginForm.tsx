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

  async function sendRegisterInfo (e:any) {
    e.preventDefault();
    const form = new FormData(e.target);
    const entries = [...form.entries()];

    const user = entries.reduce((acc:any, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    console.log(user);
  
    const apiAddress = "/api/v1/users";
  
const body = JSON.stringify({
  name: user.name,
  birthDate: (new Date(Date.parse(user.birthDate))).toISOString(),
  gender: Number(user.gender),
  email: user.email,
  password: user.password
})

  console.table(JSON.parse(body))

    const init: RequestInit = {
      method: 'POST',
      headers: new Headers([['content-type', 'application/json']]),
      body: body,
    };
  
    const response = await fetch(apiAddress, init);
    const data = await response.json();
    console.log(data);
  }

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
          <form onSubmit={sendRegisterInfo}>
            <input type="text" placeholder="Name" name="name" />
            <br />
            <br />
            <input type="date" placeholder="Birth date" name="birthDate" />
            <br />
            <br />
            <select name="gender">
              {allGenders && allGenders.map(g => 
                <option value={g.value} key={g.value}>
                  {g.name}
                </option>)}
            </select>
            <br />
            <br />
            <input type="email" placeholder="Email address" name="email" />
            <br />
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <br />
            <input type="submit" value="Continue →" />
          </form>
        </div>
    
    </div>
  );
};

export default LoginForm;
