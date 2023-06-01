import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";
import "./Swipe.css"

interface SwipeCardProp {
  name: string;
  birthDate: string;
  photos: string[];
  gender: string;
  biography: string;
  interests: string[];
  showNext: () => void;
}


const Swipe = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userIndex, setUserIndex] = useState(0);


  const fetchData = () => {
  fetch('http://localhost:5091/api/users')
    .then(response => response.json())
    .then(data => {
      const as : SwipeCardProp[] = data;
      setUsers(as)
      console.log(as)
      setIsLoading(false)
    })
    .catch(error => {
    // Handle any errors
  });
  };

  function showNext(){
    setUserIndex((userIndex + 1 ) % users.length);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    {!isLoading && 
        <>
        <div className="swipe-wrapper">
          <div className="swipe-card">
            {
              <SwipeCard
              name= {users[userIndex].name}
              birthDate={users[userIndex].birthDate}
              photos={
               users[userIndex].photos
              }
              gender= {users[userIndex].gender}
              biography={users[userIndex].biography}
              interests={users[userIndex].interests}
              showNext={showNext}
            />
            }
          </div>
        </div>
        <div className="header">
          <img src={logo}></img>
        </div>
        </>
    }
    </>
  );
};

export default Swipe;
