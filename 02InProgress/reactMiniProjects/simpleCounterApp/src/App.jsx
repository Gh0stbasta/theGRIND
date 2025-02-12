import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  const array = Array.from({length: count})

  return (
    <>
      {array.map((_, i) => {
        return <Counter key={i} count={count} setCount={setCount} />;
      })}
    </>
  );
};

export default App;
