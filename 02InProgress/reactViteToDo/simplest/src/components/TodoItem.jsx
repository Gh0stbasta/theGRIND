/* eslint-disable react/prop-types */
const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="row">
      <span>{todo}</span>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

export default TodoItem;
