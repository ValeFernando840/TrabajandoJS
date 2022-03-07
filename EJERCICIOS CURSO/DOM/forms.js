// const form = document.querySelector("#login-form");
// const nameInput = document.querySelector("#nameInput");
// const password = document.querySelector("#passInput");
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); //evita que se recargue la página, le quita el comportamiento por defecto de un evento
//   login(nameInput.value, password.value);
//   form.removeEventListener("submit");
// });
// const login = (username, password) => {
//   console.log(username, password);
// };

//Seccion de Comentarios

const comments = [];
const allCommentsEl = document.querySelector("#comments");

const commentForm = document.querySelector("#comments-form");
const username = document.querySelector("#nameInput");
const commentEl = document.querySelector("#commentInput");
//Seleccionar mensajes de Error
const nameError = document.querySelector("#nameError");
const commentError = document.querySelector("#commentError");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    nameError.classList.remove("hide");
    return;
  }
  if (commentEl.value == "") {
    commentError.classList.remove("hide");
    return;
  }
  comments.push({
    username: username.value,
    comment: commentEl.value,
  });
  while (allCommentsEl.firstElementChild) {
    allCommentsEl.removeChild(allCommentsEl.firstChild);
  }
  comments.forEach((comment) => {
    const p = document.createElement("div");
    p.innerHTML = `
  <p> ${comment.username} </p>
  <p> ${comment.comment}</p>`;
    allCommentsEl.append(p);
  });
  commentForm.reset(); //para que se borren todos lo que cargamos en el form
});
