/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          toggleTodo={() => toggleTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
