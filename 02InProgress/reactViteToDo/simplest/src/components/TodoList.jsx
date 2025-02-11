/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem.jsx"


const TodoList = ({ todos, deleteTodo}) => {
  return (
    <>
      {
        todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} deleteTodo={() => deleteTodo(index)} />
        ))
      }
    </>
  );
};

export default TodoList;
