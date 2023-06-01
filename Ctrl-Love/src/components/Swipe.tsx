import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";

const Swipe = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5091/api/users", {mode:"no-cors"});
        //const json = await response.json();
        console.log(response)
        //console.log(json)
      } catch (error) {
        console.error(error);
      }
    }) ();
  }, []);

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
