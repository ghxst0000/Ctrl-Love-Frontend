import "./SwipeCard.css";
import { useEffect, useState } from "react";
import mockProfile from "../assets/mockprofile.svg";
interface SwipeCardProp {
  name: string;
  age: number;
  images: string[];
  gender: string;
  biography: string;
  interests: string[];
  showNext: () => void;
  addToLikes: () => void;
  addToDisLikes: () => void;
}

function SwipeCard({
  name,
  age,
  images,
  gender,
  biography,
  interests,
  showNext,
  addToLikes,
  addToDisLikes,
}: SwipeCardProp) {
  console.log(interests);
  age = Math.floor(
    (Date.now() - Date.parse(String(age))) / 1000 / 3600 / 24 / 365.25
  );

  const [selectedPicNumber, setSelectedPicNum] = useState(0);
  const [allGenders, setAllGenders] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/genders");
      const genders = await response.json();
      setAllGenders(genders);
    })();
  }, []);

  console.table(images);
  return (
    <div className="swipe-card-outer-wrapper">
      <div className="content">
        <div className="swipe-card-upper-section-wrapper">
          <div
            className="swipe-card-backward-picture"
            onClick={() =>
              setSelectedPicNum(
                (selectedPicNumber + images.length - 1) % images.length
              )
            }
          >
            <span>{"<"}</span>
          </div>
          <div className="box_parent">
            {images && (
              <img
                className="box2"
                src={
                  images.length > 1
                    ? images[selectedPicNumber].url
                    : mockProfile
                }
              ></img>
            )}
          </div>
          <div className="rectangle-33"></div>
          <div
            className="swipe-card-forward-picture"
            onClick={() =>
              setSelectedPicNum((selectedPicNumber + 1) % images.length)
            }
          >
            <span>{">"}</span>
          </div>
        </div>
        <div className="bubbles-for-picture-count">
          {images.map((p, index) => (
            <div
              key={index}
              style={
                selectedPicNumber === index
                  ? { backgroundColor: "#7cf4d2" }
                  : { backgroundColor: "#fde8ee" }
              }
              className="bubble"
            ></div>
          ))}
        </div>
        <div className="information-about-user">
          <b>
            <span>{name}</span>
          </b>
          <div className="information-age-wrapper">
            <div className="information-age">
              <b>
                <span>{age}</span>
              </b>
            </div>
          </div>
          <b>
            {allGenders &&
              allGenders
                .filter((g) => g.value === gender)
                .map((g) => <span key={g.value}>{g.name}</span>)}
          </b>
        </div>
        <div className="biography-content">{biography}</div>
        <div className="interest-content">
          {interests.map((i, index) => (
            <div key={index} className="interest-bubble">
              {i.name}
            </div>
          ))}
        </div>
        <div className="button-container">
          <button
            className="no"
            onClick={() => {
              addToDisLikes();
              showNext();
              setSelectedPicNum(0);
            }}
          >
            No
          </button>
          <button
            className="yes"
            onClick={() => {
              addToLikes();
              showNext();
              setSelectedPicNum(0);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwipeCard;
