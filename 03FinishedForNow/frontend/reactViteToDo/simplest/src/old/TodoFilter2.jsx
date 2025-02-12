/* eslint-disable react/prop-types */
// Definiere eine funktionale Komponente namens TodoFilter, die zwei Props entgegennimmt: filter und setFilter
const TodoFilter = ({ setFilter }) => {
  return (
    // Rendere ein div mit einem Klassennamen "filter"
    <div className="filter">
      {/* Button, um den Filter auf "all" zu setzen */}
      <button onClick={() => setFilter("all")}>all</button>
      {/* Button, um den Filter auf "completed" zu setzen */}
      <button onClick={() => setFilter("completed")}>completed</button>
      {/* Button, um den Filter auf "incomplete" zu setzen */}
      <button onClick={() => setFilter("incomplete")}>incomplete</button>
    </div>
  );
};

// Exportiere die TodoFilter-Komponente als Standardexport
export default TodoFilter;
