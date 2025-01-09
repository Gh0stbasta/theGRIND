const button = document.getElementById("take-note");
const inputValue = document.querySelector("input");
const noteList = document.getElementById("note-list");

const toDoArray = [];

const get_from_browser = () => {
  const loadChores = JSON.parse(localStorage.getItem("toDoArray"));

  if (loadChores) {
    loadChores.forEach((note) => {
      console.log("note value:" + note);
      toDoArray.push(note);
      display_note(note);
    });
  }
  console.log("laoded file from browser");
};

const save_to_browser = () => {
  localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
  console.log("saved to browserfile");
};

const clear_browser_file = () => {
  localStorage.clear();
  console.log("cleared browserfile");
};

const display_note = (note) => {
  const noteIndex = toDoArray.indexOf(note);
  console.log(toDoArray);
  inputValue.value = "";

  const item = document.createElement("li");
  item.textContent = note;
  item.id = `a${noteIndex}`;

  const delItemButton = document.createElement("button");
  delItemButton.textContent = "delete";

  delItemButton.id = `a${noteIndex}`;
  delItemButton.onclick = () => {
    delete_item(delItemButton.id);
  };

  noteList.appendChild(item);
  noteList.appendChild(delItemButton);
};

const note_item = () => {
  const note = inputValue.value;
  if (!note) {
    alert("Please insert a chore");
  } else {
    toDoArray.push(note);
    display_note(note);
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
