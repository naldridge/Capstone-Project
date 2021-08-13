import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import SidebarNav from "./components/SidebarNav";
import HomePage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <SidebarNav />
      <HomePage />
    </div>
  );
}

export default App;
