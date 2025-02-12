/* eslint-disable react/prop-types */
const TodoFilter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("completed")}>completed</button>
      <button onClick={() => setFilter("incomplete")}>incomplete</button>
    </div>
  );
};

export default TodoFilter;
