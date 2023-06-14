import React from "react";
import LoginForm from "./LoginForm";
import logo from "../assets/logo.svg";
import "./LandingPage.css";
import heart from "../assets/Heart.svg";
import cardHeart from "../assets/card-container-heart.svg";
import cardPuzzle from "../assets/card-container-puzlle.svg";
import cardFinger from "../assets/card-container-clicker.svg";
import Card from "./Card";

const MainPage = () => {
  return (
    <div className="main-container-landing-page">
      <div className="content">
        <div className="top-row-design">
          <img src={logo} alt="this is our logo" />
          <div className="signup-login-buttons">
            <a>Sign Up &nbsp; </a>
            <span style={{ color: "#1EEBB1" }}>/</span>
            <span style={{ color: "#FDE8EE" }}>/</span>
            <a>&nbsp; Log In </a>
          </div>
        </div>
        <div className="header-container">
          <div className="starting-message-container">
            <b>
              <p style={{ color: "#000000", fontSize: "16px" }}>
                Ctrl + Love: <br></br>
                Connect, Swipe, and Find Your{" "}
                <span style={{ color: "#1EEBB1" }}> Perfect Match!</span>
              </p>
            </b>
            <p style={{ fontSize: "12px" }}>
              Navigate the Path to Love with the Click of a Button <br></br>{" "}
              Where Technology and Romance Merge
            </p>
            <div className="buttons">
              <button className="get-started">Get Started</button>
              <button
                className="about-button"
                style={{ backgroundColor: "#FDE8EE" }}
              >
                What is Ctrl + Love?
              </button>
            </div>
          </div>

          <img src={heart} alt="this is a heart" className="heart-symbol" />
        </div>
        <div className="lower-component-container">
          <h1 style={{ color: "#000000", alignItems: "center" }}>
            {" "}
            What is Ctrl + Love?{" "}
          </h1>
          <div className="all-card-container">
            <Card
              logo={cardHeart}
              title={"Fusion"}
              description={
                "Ctrl + Love is a revolutionary dating app that combines advanced technology with the timeless pursuit of love. Our platform empowers individuals to explore meaningful connections and discover their perfect match in the digital realm."
              }
            ></Card>
            <Card
              logo={cardPuzzle}
              title={"Match+"}
              description={
                "More than just a matchmaking app, Ctrl + Love leverages cutting-edge algorithms and intelligent matching systems to increase your chances of finding true love. Our app takes into account your preferences, interests, and compatibility factors to present you with highly compatible matches, maximizing your chances of finding that special someone."
              }
            ></Card>
            <Card
              logo={cardFinger}
              title={"Swipe"}
              description={
                "With Ctrl + Love, you're in control of your romantic journey. Utilizing a user-friendly interface, our app offers a seamless and intuitive swiping experience, allowing you to effortlessly browse through profiles, express interest, and ignite potential relationships."
              }
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;