/* eslint-disable react/prop-types */
const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="row">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

export default TodoItem;
