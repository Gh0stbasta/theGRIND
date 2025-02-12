/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter a new todo 2.0"
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default TodoInput;
