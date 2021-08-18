import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import HomePage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
/*   const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else { */
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Sidebar />
        {/* <HomePage /> */}
      </div>
    );
  }

export default App;
