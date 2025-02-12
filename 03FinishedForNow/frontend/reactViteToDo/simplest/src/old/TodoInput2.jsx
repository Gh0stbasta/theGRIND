/* eslint-disable react/prop-types */
import { useState } from "react";

// TodoInput-Komponente, die eine addTodo-Funktion als Prop erhält
const TodoInput = ({ addTodo }) => {
  // useState-Hook, um den Zustand des Eingabefelds zu verwalten
  // wir starten das mit einem leeren Wert tatsächlich wird aber
  // bei jedem Tastendruck im Eingabefeld der Input Wert aktualisiert
  const [input, setInput] = useState("");

  // Funktion, die beim Absenden des Formulars aufgerufen wird
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    addTodo(input); // Fügt den aktuellen Status des Eingabefelds den Todo-Objekten hinzu
    setInput(""); // Setzt das Eingabefeld zurück
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          // in JS wird beim auslösen eines Events ein Objekt an den Event-handler gesendet,
          // das informationen über das event enthält. z.B. was gemacht wurde auf welchem Feld (target)
          onChange={(event) => setInput(event.target.value)} // Aktualisiert den Zustand bei jeder Eingabe
          placeholder="Enter a new todo"
        ></input>
        <button type="submit">submit</button> {/* Absende-Button */}
      </form>
    </>
  );
};

export default TodoInput;
