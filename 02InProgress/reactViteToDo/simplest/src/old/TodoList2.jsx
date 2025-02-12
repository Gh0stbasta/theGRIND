/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem.jsx";

// TodoList-Komponente, die eine Liste von Todos anzeigt
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {/* Das ist zu crazy. Hier wird auf das gefilterte todo-Array eine Funktion angewendet
      die ein neues Array erstellt. Und da in JS Funktionen eigentlich auch nur 
      Objekte sind, wird das Quasi im Funktionsobjekt gespeichert, ohne da wirklich eine 
      Variable dafür anlegen zu müssen */}
      {todos.map((todo, index) => (
        // noch crazier ist, dass das TodoItem auch wieder ein Funktionsobjekt ist das
        // wiederum in TodoList-Funktions-Objekt gespeichert ist
        <TodoItem
          key={index} // eindeutiger Schlüssel für jedes Todo-Element
          todo={todo} // das aktuelle Todo-Objekt
          deleteTodo={() => deleteTodo(index)} // Funktion zum Löschen eines Todos
          toggleTodo={() => toggleTodo(index)} // Funktion zum Umschalten des Todo-Status
        />
      ))}
    </div>
  );
};

export default TodoList;
