import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Button, Card } from "react-bootstrap";
import SplashPage from "./components/SplashPage";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      <SplashPage />
    </div>
  );
}

export default App;
