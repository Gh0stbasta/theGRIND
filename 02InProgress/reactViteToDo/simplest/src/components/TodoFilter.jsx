/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const TodoFilter = ({ filter, setFilter}) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("completed")}>completed</button>
      <button onClick={() => setFilter("incomplete")}>incomplete</button>
    </div>
  );
};

export default TodoFilter;
