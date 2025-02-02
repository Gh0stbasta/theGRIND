const button = document.getElementById("take-note");
const inputValue = document.querySelector("input");
const noteList = document.getElementById("note-list");

// the list for our notes
const toDoArray = [];
let counterId = 0;

class Note {
  // Data Structure for Notes
  constructor(id, text, isDone = false) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
  }
}

const note_item = () => {
  //creating a unique ID for every note
  const noteId = "a" + counterId;
  counterId++;
  //pulling the userinput
  const noteText = inputValue.value;

  if (!noteText) {
    //empty notes are not allowed
    alert("Please insert a task");
  } else {
    //create a new Note object
    const note = new Note(noteId, noteText);
    //adding it to the List
    toDoArray.push(note);
    //let it show up on the screen
    display_note(note);
  }
};

const display_note = (note) => {
  //emptying the input, so that the user can create new input
  inputValue.value = "";

  //creating a wrap up container
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("list-card");
  containerDiv.id = note.id;

  //creating the list element
  const item = document.createElement("li");
  if (note.isDone) {
    //if its pulled from the browser cache it has to show up
    item.classList.toggle("mark-done");
  }
  item.textContent = note.text;
  item.id = note.id;

  //two buttons for the user to manage the tasks
  const doneButton = document.createElement("button");
  doneButton.textContent = "toggle done";
  doneButton.id = note.id;
  doneButton.onclick = () => {
    mark_done(doneButton.id);
  };
  const delItemButton = document.createElement("button");
  delItemButton.textContent = "delete";
  delItemButton.id = note.id;
  delItemButton.onclick = () => {
    delete_item(delItemButton.id);
  };

  //pushing all the elements to the window
  item.appendChild(doneButton);
  item.appendChild(delItemButton);
  containerDiv.appendChild(item);
  noteList.appendChild(containerDiv);
};

const mark_done = (buttonID) => {
  //only get the first item with the id to get the right list item
  const item = document.getElementById(buttonID);
  item.classList.toggle("mark-done");
  //toggling the status within the object
  let noteIndex = toDoArray.findIndex((note) => note.id == buttonID);
  console.log(buttonID);
  console.log(toDoArray);
  const note = toDoArray[noteIndex];
  console.log(noteIndex);
  toDoArray[noteIndex].isDone = !toDoArray[noteIndex].isDone;
};

const delete_item = (buttonID) => {
  //getting all things (1 list element and 2 buttons) with the same ID
  const elementsToDelete = document.querySelectorAll(`#${buttonID}`);
  //deleting all elements from window
  elementsToDelete.forEach((element) => element.remove());
  //deleting the note-object from the list and inserting an empty string for bugfix from length problem
  let noteIndex = toDoArray.findIndex((note) => note.id == buttonID);
  toDoArray.splice(noteIndex, 1, "");
  save_to_browser();
};

const get_from_browser = () => {
  // getting the data from the browser storage
  const loadTasks = JSON.parse(localStorage.getItem("toDoArray"));
  // pushing the tasks into the array one by one
  if (loadTasks) {
    loadTasks.forEach((note) => {
      toDoArray.push(note);
      counterId++;
      // because of bugfix in delete_note we also have to handle the empty notes
      if (note != "") {
        display_note(note);
      }
    });
  }
  //removing button functionality to prevent multiple loadings
  const button = document.getElementById("get-browser-data");
  button.onclick = null;
  button.classList.toggle("mark-done");
};

const clear_browser_file = () => {
  // clearing cache
  localStorage.clear();
  location.reload();
};

const save_to_browser = () => {
  // saving the array to the browserstorage
  localStorage.clear();
  localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
};
