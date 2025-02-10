import "./App.css";

const App = () => {
  let heading = "This is the text";

  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <input placeholder={heading}></input>
    </div>
  );
};

export default App;
