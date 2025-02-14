import Datarow from "./components/Datarow";
import mockdata from "./components/mockdata.json";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Search Filter App</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />
      {mockdata
        .filter((value) => {
          if (value === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search) || value.lastname.toLocaleLowerCase().includes(search)) {
            return value;
          } else {
            return null;
          }
        })
        .map((element, index) => {
          return <Datarow key={index} name={element.name} lastname={element.lastname} />;
        })}
    </>
  );
};

export default App;
