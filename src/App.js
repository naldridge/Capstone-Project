import "./App.css";
import React from "react";
import Form from "./components/Form";
import Auth0ProviderWithHistory from "./components/auth0Provider";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Form />
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
