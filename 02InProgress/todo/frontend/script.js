const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const saveBtn = document.getElementById("save-btn");

// Todo object interface: { id: number, text: string, done: boolean }
let todos = [];

// Render the todos in the list
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.done) li.style.textDecoration = "line-through";

    // Done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = () => {
      todo.done = !todo.done;
      renderTodos();
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      todos = todos.filter((t) => t.id !== todo.id);
    };

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Add button event
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text) {
    const todo = { id: Date.now(), text, done: false };
    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  }
});

saveBtn.addEventListener("click", () => {
  console.log(todos);
  todos.forEach(async (todo) => {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
  });
});

// Initial render
renderTodos();
