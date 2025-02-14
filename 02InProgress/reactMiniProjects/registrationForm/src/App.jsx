import Registration from "./components/Registration";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [registration, setRegistration] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registration);
  };

  return (
    <>
      <h1>Register</h1>
      <Registration
        registration={registration}
        setRegistration={setRegistration}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
