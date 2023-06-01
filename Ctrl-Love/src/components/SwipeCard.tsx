import { useState } from "react";
import "./SwipeCard.css";

interface SwipeCardProp {
  name: string;
  age: number;
  images: string[];
  gender: string;
  biography: string;
  interests: string[];
  showNext: void;
}

function SwipeCard({
  name,
  age,
  images,
  gender,
  biography,
  interests,
  showNext
}: SwipeCardProp) {
  const [imageCounter, setImageCounter] = useState(0);

  return (
    <div>
    <div className="card-container">
      <div className="top-section">
        {<img src={images[imageCounter]} alt="profile-pic" className="profile-pic" />}
      </div>
      <div className="bottom-section">
        <h1>
          {name} : {age}
        </h1>
        <h2>{gender}</h2>
        <p>{biography}</p>
        {interests.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </div>
      <button className="next-pic" onClick={() => {setImageCounter(((imageCounter + 1) % images.length));console.log(imageCounter)}}>→</button>
      <button className="prev-pic" onClick={() => {setImageCounter(((imageCounter - 1) % images.length)); console.log(imageCounter)}} >←</button>
      <button className="like-profile" onClick={() => showNext()}>👍</button>
      <button className="dislike-profile">👎</button>
    </div>
    </div>
  );
}

export default SwipeCard;
