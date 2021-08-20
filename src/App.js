import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DisplayChannel from "./components/DisplayChannel";
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
      <Router>
        <Switch>
          <Route path={`/channel/:slug`}>
            <DisplayChannel />
          </Route>
        </Switch>
      </Router>

      <Sidebar channel={null} />


      {/* <HomePage /> */}
    </div>
  );
}

export default App;
