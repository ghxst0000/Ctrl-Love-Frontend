import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useFetcher } from "react-router-dom";
import MatchComponent from "./MatchComponent";
import mockimage from "../assets/mockprofile.svg";
import "./ChatPage.css";

const ChatPage = () => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/users/matches");
      const matcheses = await response.json();
      setMatches(matcheses);
    })();
  }, []);
  return (
    <div className="page-container">
      <div className="top-row-design">
        <img src={logo} alt="this is our logo" />
        <div className="signup-login-buttons">
          <a href="/signup" className="navbar-button">
            Sign Up &nbsp;{" "}
          </a>
          <b>
            <span style={{ color: "#1EEBB1" }}>/</span>
            <span style={{ color: "#FDE8EE" }}>/</span>
          </b>
          <a href="/login" className="navbar-button">
            &nbsp; Log In{" "}
          </a>
        </div>
      </div>
      <div className="matches-container">
        {matches &&
          matches.map((m, i) => (
            <MatchComponent
              name={m.name}
              image={m.image || mockimage}
              id={m.id}
              selected={!i}
            />
          ))}
      </div>
      <div className="chat-container"></div>
    </div>
  );
};

export default ChatPage;
