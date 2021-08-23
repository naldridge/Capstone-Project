import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="mainProfile">
        <div className="profileSide">
          <div className="profileLogo" align="center">
            <img src={user.picture} alt={user.name} />
            <div>David Vasek</div>
            <p></p>
            <div>Web Developer</div>
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
                <h2 className="infoHeaders">Phone:</h2>
                <div>{user.updated_at}</div>
              </div>
            </div>
          </div>
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
