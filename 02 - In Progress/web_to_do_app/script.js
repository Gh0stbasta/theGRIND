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
  localStorage.clear();
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

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("list-card");

  const item = document.createElement("li");
  item.textContent = note;
  item.id = `a${noteIndex}`;

  const doneButton = document.createElement("button");
  doneButton.textContent = "Mark done";
  doneButton.id = `a${noteIndex}`;
  doneButton.onclick = () => {
    mark_done(doneButton.id);
  };

  const delItemButton = document.createElement("button");
  delItemButton.textContent = "delete";
  delItemButton.id = `a${noteIndex}`;
  delItemButton.onclick = () => {
    delete_item(delItemButton.id);
  };

  item.appendChild(doneButton);
  item.appendChild(delItemButton);
  containerDiv.appendChild(item);
  noteList.appendChild(containerDiv);
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

const mark_done = (buttonID) => {
  const button = document.getElementById(buttonID);
  button.classList.toggle("mark-done");
}


const delete_item = (note) => {
  console.log(toDoArray);

  const elementsToDelete = document.querySelectorAll(`#${note}`);
  elementsToDelete.forEach((element) => element.remove());

  const noteIndex = toDoArray.indexOf(note);
  console.log(noteIndex);
  toDoArray.splice(noteIndex);
};
