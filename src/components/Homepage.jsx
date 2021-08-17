import React from "react";

const HomePage = () => {
  return (
    <div className="homePage">
      <p>
        Welcome to Devhack! Where newbie and senior developers can come and find
        all things related to web developement. Search forums or comments to
        find any information on different thigns.
      </p>
      <h2>Popular Communities</h2>
      <div className="communitiesSection"></div>

      <h2>Popular Forums</h2>
      <div className="usersSection"></div>
    </div>
  );
};

export default HomePage;
