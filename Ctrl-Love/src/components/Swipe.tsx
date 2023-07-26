import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";
import "./Swipe.css";

interface SwipeCardProp {
  name: string;
  birthDate: string;
  photos: string[];
  gender: string;
  biography: string;
  interests: string[];
  showNext: () => void;
  addToLikes: () => void;
  addToDisLikes: () => void;
}

const Swipe = () => {
  const [users, setUsers]: any = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userIndex, setUserIndex] = useState(0);
  const [_, setData]: any = useState();
  async function fetchingLike() {
    const init: RequestInit = {
      method: "POST",
      headers: new Headers([["content-type", "application/json"]]),
      body: JSON.stringify(users[userIndex].id),
    };

    const response = await fetch("/api/v1/likes/like", init);
    console.log(init.body);
    setData(response.json());
  }

  async function fetchingDislike() {
    const init: RequestInit = {
      method: "POST",
      headers: new Headers([["content-type", "application/json"]]),
      body: JSON.stringify(users[userIndex].id),
    };

    const response = await fetch("/api/v1/likes/dislike", init);
    console.log(init.body);
    setData(response.json());
  }

  const fetchData = () => {
    fetch("/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        const as: SwipeCardProp[] = data;
        setUsers(as);
        setIsLoading(false);
        console.table(data);
      });
  };

  function showNext() {
    setUserIndex((userIndex + users.length - 1) % users.length);
  }

  function addToLikes() {
    fetchingLike();
  }

  function addToDisLikes() {
    fetchingDislike();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <div className="swipe-wrapper">
            <div className="top-row-design-swipe">
              <img src={logo} alt="this is our logo" />
              <div className="signup-login-buttons">
                <a href="/matches" className="navbar-button">
                  Matches &nbsp;{" "}
                </a>
                <b>
                  <span style={{ color: "#1EEBB1" }}>/</span>
                  <span style={{ color: "#FDE8EE" }}>/</span>
                </b>
                <a href="/my-profile" className="navbar-button">
                  &nbsp; My Profile{" "}
                </a>
              </div>
            </div>
            <div className="swipe-card">
              <SwipeCard
                name={users[userIndex].name}
                age={users[userIndex].birthDate}
                images={users[userIndex].photos}
                gender={users[userIndex].gender}
                biography={users[userIndex].biography}
                interests={users[userIndex].interests}
                showNext={showNext}
                addToLikes={addToLikes}
                addToDisLikes={addToDisLikes}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Swipe;
