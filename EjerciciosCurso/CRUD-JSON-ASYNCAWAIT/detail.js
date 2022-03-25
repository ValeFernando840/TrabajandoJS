const API_URL = "http://localhost:4000";
const todoDetailHTML = document.querySelector(".container");
const idUrl = window.location.hash.slice(1);

async function getTodoById(id) {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`);
    const data = await response.json();
    buildTodoDOM(data);
  } catch (error) {
    console.log(error);
  }
}
function buildTodoDOM(todo) {
  const info = document.createElement("p");
  info.textContent = todo.owner;
  todoDetailHTML.append(info);
}
document.addEventListener("DOMContentLoaded", () => {
  getTodoById(idUrl);
});
