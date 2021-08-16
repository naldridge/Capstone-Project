import React, { useState } from "react";
import "../App.css";
import FormSignup from "./FormSignup";
// import FormSuccess from "./FormSuccess";
import Login from "./Login";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <FormSignup submitForm={submitForm} />
        <Login />
      </div>
    </>
  );
};

export default Form;
