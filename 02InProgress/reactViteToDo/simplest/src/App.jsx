import TodoList from "./components/TodoList.jsx";
import TodoInput from "./components/TodoInput.jsx";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_,i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <h1>To Do App</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <TodoInput addTodo={addTodo}/>
    </>
  );
};

export default App;
