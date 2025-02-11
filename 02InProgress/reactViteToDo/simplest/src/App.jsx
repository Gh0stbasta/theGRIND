// das ist die Komponente die die Liste aufbaut
import TodoList from "./components/TodoList.jsx";
// das ist die Komponente in der man einen Eintrag machen kann
import TodoInput from "./components/TodoInput.jsx";
// das ist die Komponente mit den drei Buttons, die die Liste nachher filtern werden
import TodoFilter from "./components/TodoFilter.jsx";
// um den Status von Werten dynamisch verändern zu können müssen wir useState importieren
import { useState } from "react";


// Das wird die Hauptkomponente
const App = () => {
  // Hier verfolgen wir den Status der Aufgaben, der im Prinzip eine Liste ist
  const [todos, setTodos] = useState([]);
  // Hier speichern wir den Status, welche Listeneinträge angezeigt werden sollen
  // Das verändert nicht die Liste, sondern nur die Ansicht
  const [filter, setFilter] = useState("all");

  // Eine Funktion, um einen Eintrag der Liste hinzuzufügen
  const addTodo = (todo) => {
    // Die Funktion kriegt ein Todo und erweitert die bestehende TodoListe mit
    // einem Objekt in dem der Text und der Status gespeichert wird, ob der Eintrag "completed ist"
    setTodos([...todos, {text: todo, completed: false}]);
  };

  // Eine Funktion um einen Eintrag zu löschen
  const deleteTodo = (index) => {
    // Hier kriegen wir den Index des Eintrags
    // mit dem Index filtern wir alle Einträge in eine neue Liste die NICHT dem index entsprechen
    const newTodos = todos.filter((_, i) => i !== index);
    // Die neue Liste speichern wir dann in den Todos
    // Das ist irgendwie elegant, weil wir nichts löschen müssen
    setTodos(newTodos);
  };

  // Das ist die Funktion um den Eintrag durchzustreichen, wenn der User ihn anklickt
  const toggleTodo = (index) => {
    // Hier machen wir ein neues Array, und suchen den übergebenen Index im alten Array
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        // finden wir den Index, nehmen wir den Eintrag mit allen möglichen Werten und
        // drehen den completed Wert einfach um ... kann ja nur true oder false sein
        return { ...todo, completed: !todo.completed };
      }
      // ist es nicht der Index wird das vorhandene todo-Objekt einfach im neuen Array gespeichert
      return todo;
    });
    // und damit wir wieder nix löschen müssen, überschreiben wir einfach das alte Array
    setTodos(newTodos);
  };

  // Hier filtern wir die Todos basierend auf dem aktuellen Filterstatus
  const filteredTodos = todos.filter((todo) => {
    // Wenn der Filter auf "completed" gesetzt ist, zeigen wir nur die erledigten Todos
    if (filter === "completed") {
      return todo.completed;
    }
    // Wenn der Filter auf "incomplete" gesetzt ist, zeigen wir nur die unerledigten Todos
    if (filter === "incomplete") {
      return !todo.completed;
    }
    // Wenn kein spezifischer Filter gesetzt ist, zeigen wir alle Todos
    return true;
  });

  return (
    <>
      {/* Das ist der Titel der App */}
      <h1>To Do App</h1>
      {/* Hier wird die TodoList Komponente gerendert, die die gefilterten Todos anzeigt */}
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      {/* Hier wird die TodoInput Komponente gerendert, die es ermöglicht, neue Todos hinzuzufügen */}
      <TodoInput addTodo={addTodo} />
      {/* Hier wird die TodoFilter Komponente gerendert, die es ermöglicht, die Todos zu filtern */}
      <TodoFilter setFilter={setFilter} />
    </>
  );
};

export default App;
