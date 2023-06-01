import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";

const Swipe = () => {
  const [users, setUsers] = useState([]);

  return (
    <>
      <div className="swipe-wrapper">
        <div className="swipe-card"></div>
      </div>
      ;
      <div className="header">
        <img src={logo}></img>
      </div>
    </>
  );
};

export default Swipe;
