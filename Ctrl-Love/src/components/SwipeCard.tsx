import "./SwipeCard.css";

interface SwipeCardProp {
  name: string;
  age: number;
  images: string[];
  gender: string;
  biography: string;
  interests: string[];
}

function SwipeCard({
  name,
  age,
  images,
  gender,
  biography,
  interests,
}: SwipeCardProp) {
  return (
    <div className="card-container">
      <div className="top-section">
        {<img src={images[0]} alt="profile-pic" className="profile-pic" />}
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
    </div>
  );
}

export default SwipeCard;
