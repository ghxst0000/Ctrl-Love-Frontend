import "./SwipeCard.css";
import ctrlLove from "../assets/logo.svg";

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
  const [selectedPicNumber, setSelectedPicNum] = useState(0);

  return (
    <div className="swipe-card-outer-wrapper">
      <div className="content">
        <div className="swipe-card-upper-section-wrapper">
          <div
            className="swipe-card-backward-picture"
            onClick={() =>
              setSelectedPicNum(
                (selectedPicNumber + photos.length - 1) % photos.length
              )
            }
          >
            <span>{"<"}</span>
          </div>
          <div className="box_parent">
            <div
              className="box2"
              style={{ backgroundImage: `url(${photos[selectedPicNumber]})` }}
            ></div>
            <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg%22%3E">
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
                  1 0 0 0 0 
                  0 1 0 0 0 
                  0 0 1 0 0 
                  0 1 0 19 -10"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="rectangle-33"></div>
          <div
            className="swipe-card-forward-picture"
            onClick={() =>
              setSelectedPicNum((selectedPicNumber + 1) % photos.length)
            }
          >
            <span>{">"}</span>
          </div>
        </div>
        <div className="bubbles-for-picture-count">
          {photos.map((p, index) => (
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
          <b>
            <span>{gender}</span>
          </b>
        </div>
        <div className="information-age-wrapper">
          <div className="information-age">
            <b>
              <span>{birthDate}</span>
            </b>
          </div>
        </div>
        <div className="biography-content">{biography}</div>
        <div className="interest-content">
          {interests.map((i, index) => (
            <div key={index} className="interest-bubble">
              {i}
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="no" onClick={showNext}>
            No
          </button>
          <button className="yes" onClick={showNext}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwipeCard;
