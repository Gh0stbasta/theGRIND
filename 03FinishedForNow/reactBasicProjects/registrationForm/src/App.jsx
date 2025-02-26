import Registration from "./components/Registration";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [registration, setRegistration] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registration),
    })
    .then(response => response.json())
    .then(data => {
      setSuccess(true);
      console.log('Success:', data);
    })
    .catch((error) => {
      setFailed(true);
      console.log('Error:', error);
    });
    setTimeout(() => {
      setSuccess(false);
      window.location.reload();
    }, 5000);
  };

  return (
    <>
      <h1>Register</h1>
      <Registration
        registration={registration}
        setRegistration={setRegistration}
        handleSubmit={handleSubmit}
        success={success}
        failed={failed}
      />
    </>
  );
};

export default App;
