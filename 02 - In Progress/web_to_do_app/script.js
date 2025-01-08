const button = document.getElementById("take-note");
const inputValue = document.querySelector("input");
const noteList = document.getElementById("note-list");

const toDoArray = [];

const note_item = () => {
  const note = inputValue.value;
  if (!note) {
    alert("Bitte geben Sie eine Notiz ein.");
  } else {
    toDoArray.push(note);
    console.log(toDoArray);
    inputValue.value = "";

    const item = document.createElement("li");
    item.textContent = note;
    item.id = note;

    const delItemButton = document.createElement("button");
    delItemButton.textContent = "DELETE";
    delItemButton.id = note;
    delItemButton.onclick = () => {
      delete_item(delItemButton.id);
    };

    noteList.appendChild(item);
    noteList.appendChild(delItemButton);
  }
};

const delete_item = (note) => {
  console.log(toDoArray);

  const elementsToDelete = document.querySelectorAll(`#${note}`);
  elementsToDelete.forEach((element) => element.remove());

  const noteIndex = toDoArray.indexOf(note);
  console.log(noteIndex);
  toDoArray.splice(noteIndex);
};
