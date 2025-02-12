/* eslint-disable react/prop-types */
// Definieren der TodoItem-Komponente mit den Props: todo, deleteTodo und toggleTodo
const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="row">
      {/* Der Text des Todos wird durchgestrichen, wenn es als abgeschlossen markiert ist */}
      <span
      // Das ist ziemlich sexy hier, weil ein ternärer Operator verwendet wird
      // ist eine minimalistische if abfrage, die den ersten wert zurückgibt wenns true wird
      // ansonsten halt den zweiten
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={toggleTodo}
      >
        {/* nachdem das todo ja jetzt ein Objekt ist, müssen wir da auch auf den Text zugreifen */}
        {todo.text}
      </span>
      {/* Button zum Löschen des Todos */}
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

// Exportieren der TodoItem-Komponente als Standardexport
export default TodoItem;
