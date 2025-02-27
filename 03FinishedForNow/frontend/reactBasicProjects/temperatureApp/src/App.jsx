import Card from "./components/Card.jsx";
import { useState } from "react";

const App = () => {
  const [temp, settemp] = useState(19);

  return (
    <div className="app">
      <h1>Temperature App</h1>
      <Card temp={temp} settemp={settemp} />
    </div>
  );
};

export default App;
