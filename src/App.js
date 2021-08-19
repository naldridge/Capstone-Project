import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProfilePage from "./components/ProfilePage";
// import HomePage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <ProfilePage />

      {/* <Sidebar />
      <ProfilePage /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
