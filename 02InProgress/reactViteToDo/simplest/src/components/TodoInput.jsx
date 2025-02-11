/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (submitclick) => {
    submitclick.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(submitclick) => setInput(submitclick.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default TodoInput;
