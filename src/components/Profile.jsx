import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import "./Profile.css";
import EditProfileButton from "./EditProfileButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="mainProfile">
        <div className="profileSide">
          <div className="profileLogo" align="center">
            <img src={user.picture} alt={user.name} />
            <div className="nameContainer">
              <div>David Vasek</div>

              <div>[Web Developer]</div>
            </div>
          </div>
        </div>
        <div className="informationSide">
          <div className="informationInfo">
            <h1 className="infoTitle">Information</h1>
            <div className="informationHeaders">
              <div className="emailDiv">
                <h2 className="infoHeaders">Email:</h2>
                <div>{user.email}</div>
              </div>
              <div className="phoneDiv">
                <h2 className="infoHeaders">Username:</h2>
                <div>{user.nickname}</div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="bioTitle">Bio</h1>
            <div className="bioPart"></div>
            <h1 className="bio">
              I convert caffeine into code. Lover of all things tech. You can
              find me surfing the web and learning new languages on my free time
            </h1>
          </div>
        </div>
        <div>
          <EditProfileButton />
        </div>

        {/* <div className="profilePage">
          <div className="profileLogo">
            <img src={user.picture} alt={user.name} />
          </div>

          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Profile page!!!!!</p>
          <JSONPretty data={user} />
        </div> */}
      </div>
    )
  );
};

export default Profile;
