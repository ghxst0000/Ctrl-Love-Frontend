import { useEffect, useState } from "react";
import "./MyProfile.css";

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
    minAge: number;
    maxAge: number;
    desiredGenders: object[];
  }

const MyProfile = () => {
    const [user, setUser]:any = useState();
    const [isLoading, setIsLoading] = useState(true);

    const cookieId = document.cookie.split("=")[1];

    const fetchData = () => {
        fetch(`/api/v1/users/my-profile/${cookieId}`)
        .then(response => response.json())
        .then(data => {
          console.table(data)
            const as : MyProfileProp[] = data;
            setUser(as);
            setIsLoading(false);
            console.table(user)
        })
        .catch(error => {
        // Handle any errors
        });
    };


    useEffect(() => {
        fetchData();
      }, []);


    return (
      <>
      {!isLoading && 
      <div className="box_parent">
      <div
        className="box2"
        style={{ backgroundImage: `url(${user.photos == null || user.photos.length == 0 ? "https://www.theyearinpictures.co.uk/images//image-placeholder.png" : user.photos[0].url})` }}
      ></div>
        <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg%22%3E%22%3E">
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
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>}
        
      </>
    )
}

export default MyProfile;
