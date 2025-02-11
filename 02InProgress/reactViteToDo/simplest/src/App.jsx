import TodoList from "./components/TodoList.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "incomplete") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <>
      <h1>To Do App</h1>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      <TodoInput addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
    </>
  );
};

export default App;
