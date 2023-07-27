import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import MatchComponent from "./MatchComponent";
import mockimage from "../assets/mockprofile.svg";
import "./ChatPage.css";
import {
  HttpTransportType,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

interface Match {
  name: string;
  image?: string;
  id: string;
}

const ChatPage = () => {
  const [matches, setMatches]: any[] = useState();

  const [_, setConnection]: any = useState();

  const joinRoom = async (user: any, room: any) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5091/chatHub", {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets,
        })
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (_, message) => {
        console.log("message recieved:" + message);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/users/matches");
      const matcheses = await response.json();
      setMatches(matcheses);
      console.table(matches);
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
          matches.map((m: Match, i: number) => (
            <MatchComponent
              name={m.name}
              image={m.image || mockimage}
              id={m.id}
              selected={!i}
              joined={joinRoom}
            />
          ))}
      </div>
      <div className="chat-container"></div>
    </div>
  );
};

export default ChatPage;
