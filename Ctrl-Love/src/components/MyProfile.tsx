import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";
import logo from "../assets/logo.svg";

interface MyProfileProp {
  id: string;
  name: string;
  email: string;
  birthdate: Date;
  location: string;
  photos: string[];
  gender: object;
  biography: string;
  interests: string[];
  created: Date;
  minimumAge: number;
  maximumAge: number;
  desiredGenders: object[];
}

const MyProfile = () => {
  const [user, setUser]: any = useState();
  const [allGenders, setAllGenders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const cookieId = document.cookie.split("=")[1];

  const fetchData = () => {
    fetch(`/api/v1/users/my-profile/${cookieId}`)
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
        const as: MyProfileProp[] = data;
        setUser(as);
        setIsLoading(false);
        console.table(user);
      });
  };

  async function sendProfileModification(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);
    const entries = [...form.entries()];

    const modifiedUser = entries.reduce((acc: any, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    const apiAddress = `/api/v1/users/${cookieId}`;

    const body = JSON.stringify({
      name: modifiedUser.name,
      gender: Number(modifiedUser.gender),
      minimumAge: Number(modifiedUser.minimumAge),
      maximumAge: Number(modifiedUser.maximumAge),
      biography: modifiedUser.biography,
      location: modifiedUser.location,
    });

    console.log(body);

    const init: RequestInit = {
      method: "PUT",
      headers: new Headers([["content-type", "application/json"]]),
      body: body,
    };

    const response = await fetch(apiAddress, init);
    console.log(response);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/genders");
      const genders = await response.json();
      setAllGenders(genders);
    })();
    fetchData();
  }, []);

  return (
    <>
      <div className="sign-up-page-container">
        <div className="sign-up-content">
          <div className="top-row-design">
            <img src={logo} alt="this is our logo" />
            <div className="signup-login-buttons">
              <a
                onClick={async () => {
                  await fetch("/api/v1/users/logout");
                  navigate("/");
                }}
                className="navbar-button"
              >
                Log Out &nbsp;{" "}
              </a>
              <b>
                <span style={{ color: "#1EEBB1" }}>/</span>
                <span style={{ color: "#FDE8EE" }}>/</span>
              </b>
              <a href="/" className="navbar-button">
                &nbsp; Home{" "}
              </a>
            </div>
          </div>
          {!isLoading && (
            <div className="modify-profile-container">
              <div className="box_parent">
                <div
                  className="box2"
                  style={{
                    backgroundImage: `url(${
                      user.photos == null || user.photos.length == 0
                        ? "https://www.theyearinpictures.co.uk/images//image-placeholder.png"
                        : user.photos[0].url
                    })`,
                  }}
                ></div>
                <svg
                  className="flt_svg"
                  xmlns="http://www.w3.org/2000/svg%22%3E%22%3E"
                >
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
              <div className="modifiy-profile-form">
                <form onSubmit={sendProfileModification}>
                  <div>
                    <span>{">"}</span>{" "}
                    <input
                      type="text"
                      placeholder="Your name"
                      defaultValue={user.name}
                      name="name"
                      required
                    />
                  </div>
                  <div className="selector">
                    <span>{">"}</span>{" "}
                    <select name="gender" defaultValue={user.Gender} required>
                      {allGenders &&
                        (allGenders as any).map((g: any) => (
                          <option value={g.value} key={g.value}>
                            {g.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <span>{">"}</span>{" "}
                    <input
                      type="number"
                      name="minimumAge"
                      min={18}
                      defaultValue={user.minimumAge}
                      placeholder="Minimum age"
                    ></input>
                    <input
                      type="number"
                      name="maximumAge"
                      min={18}
                      defaultValue={user.maximumAge}
                      placeholder="Maximum age"
                    ></input>
                  </div>
                  <div>
                    <span>{">"}</span>{" "}
                    <input
                      type="text"
                      name="location"
                      defaultValue={user.location}
                      placeholder="Your location"
                    ></input>
                  </div>
                  <div>
                    <span>{">"}</span>{" "}
                    <textarea
                      name="biography"
                      defaultValue={user.biography}
                      rows={6}
                      placeholder="Tell us a little about yourself!"
                    ></textarea>
                  </div>
                  <div className="button-container">
                    <input type="submit" value="Save change >" />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
