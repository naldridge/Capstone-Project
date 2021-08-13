import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Foo from "./components/Foo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <p>Navbar says HI!</p>
        <Foo />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
