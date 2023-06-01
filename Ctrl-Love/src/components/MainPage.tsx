import React from "react";
import LoginForm from "./LoginForm";
import logo from "../assets/logo.svg";
import "../App.css";

const MainPage = () => {
  return (
    <>
      <div className="app">
        <div className="landing landing-left">
          <p>
            Introducing CTRL + ♥, where love is just a keystroke away. Unlock a
            world of romantic possibilities and click your way to a meaningful
            connection. Our cutting-edge algorithm matches you with compatible
            souls, whether you're a programmer, artist, explorer, or dreamer.
            Embrace the power of ♥ and embark on an extraordinary journey of
            love and adventure. Join CTRL + ♥ today and let your heart dance to
            the rhythm of serendipity.
          </p>
        </div>
        <div className="landing landing-right">
          <LoginForm />
        </div>
      </div>
      <div className="header">
        <img src={logo}></img>
      </div>
    </>
  );
};

export default MainPage;
