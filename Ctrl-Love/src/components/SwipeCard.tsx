import { useState } from "react";
import "./SwipeCard.css";

interface SwipeCardProp {
  name: string;
  birthDate: string;
  photos: string[];
  gender: string;
  biography: string;
  interests: string[];
  showNext: () => void;
}

const genders = {
  0: "Male",
  1: "Female",
  2: "Apache Helicopter",
  3: "Other",
};

function SwipeCard({
  name,
  birthDate,
  photos,
  gender,
  biography,
  interests,
  showNext,
}: SwipeCardProp) {
  const [imageCounter, setImageCounter] = useState(0);

  return (
    <div className="very-wrapper">
    <div className="outer-div">
      <div className="card-container">
        <div className="pic-div">
          {
            <img
              src={photos[imageCounter]}
              alt="profile-pic"
              className="profile-pic"
            />
          }

        </div>
        <h1 className="name-birthDate">
          {name} -{" "}
          {new Date().getFullYear() - new Date(birthDate).getFullYear()}
        </h1>
        <h2>{genders[gender]}</h2>
        <p>{biography}</p>
        <div className="interests">
          {interests.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
    </div>
    <div className="right-button"
            onClick={() => {
              setImageCounter((imageCounter + 1) % photos.length);
            }}
          >
            <a href="#">
              <span className="right"></span>
            </a>
          </div>

    <div className="left-button"  onClick={() => {
              setImageCounter((imageCounter - 1) % photos.length);
            }}>
              <a href="#">
                <span className="left"></span>
              </a>
            </div>
      </div>

      <div className="like-dislike">
      <button className="dislike-profile" onClick={showNext}>
        👎
      </button>
    <button className="like-profile" onClick={showNext}>
        👍
      </button>
      </div>
    </div>
  );
}

export default SwipeCard;
