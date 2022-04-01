//
//Promesa= Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan
// funciones callback, en lugar de pasar callbacks a una función.
//fetch devuelve una promesa
//rest api
//backend api
// const API_URL = "https://restcountries.com/v3.1";
// const createPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve({ data: "prueba" });
//     } else {
//       reject("Samething went wrong");
//     }
//   });
// };

// createPromise()
//   .then((dato) => console.log(dato))
//   .catch((datoM) => console.log(datoM));

// const getAllCountries = () => {
//   return fetch(`${API_URL}/all`)
//     .then((response) => response.json())
//     .then((countries) => console.log(countries));
// };
// getAllCountries();

// async function getAllCountries() {
//   const response = await fetch(`${API_URL}/all`);
//   const data = await response.json();
//   console.log(data);
// }
// getAllCountries();

// const whereAmI = async (country) => {
//   try {
//     const response = await fetch(`${API_URL}/name/${country}`);
//     const data = await response.json();
//     console.log(data);
//     return `Estamos en ${data[0].name.common}`;
//   } catch (error) {
//     console.log(error);
//   }
// };
// whereAmI("portugal").then((city) => console.log(city));
//console.log("city =>", city);
//C => Create => POST
//R=>Retrieve =>asociado con GET
//U => Update => PATCH/PUT
//D => Delete => DELETE

//A => Alta
//B => Baja
//M => Modificación

//Node: es una manera de correr js del lado del servidor
//para iniciar el server :
//npm install -g json-serverr => Se utiliza para simular una BD desde el lado del frontend
//json-server --watch db.json --port 4000 //sirve para levantar a la BD
const API_URL = "http://localhost:4000";
const todoListContainer = document.querySelector("#todoListContainer");
const getTodoButton = document.querySelector("#get-todo-btn");
//seleccion de inputs
const ownerInput = document.querySelector("#authorInput");
const descriptionInput = document.querySelector("#todoInput");
const todoForm = document.querySelector("#todoForm");
const submitBtn = todoForm.querySelector("button");

//Traer la "BD"
function buildTodosDOM(todos) {
  const todoList = [];
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div id="${todo.id}">
        <a href="detail.html#${todo.id}">
        ${todo.description}</a>
        - <span> ${todo.owner}</span>
        - <button type="button" class="deleteButton">X</button>
        - <button type="button" class="editButton">Editar</button>
    </div>`;
    todoList.push(li);
  });
  todoListContainer.append(...todoList);
}
const getTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`);
    const data = await response.json();
    buildTodosDOM(data);
  } catch (error) {
    console.log(error);
  }
};
//Agregar a la "BD"
const createTodo = async () => {
  try {
    await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        owner: ownerInput.value,
        description: descriptionInput.value,
      }),
    });
    todoForm.reset(); //quita los valores viejos cuando se envia algo
  } catch (error) {
    console.log(error);
  }
};
//Delete
const deleteTodo = async (id) => {
  try {
    await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
};

//update
const fillUpdateForm = (e) => {
  descriptionInput.value = e.target.parentElement
    .querySelector("a")
    .textContent.trim();
  ownerInput.value = e.target.parentElement
    .querySelector("span")
    .textContent.trim();
  submitBtn.textContent = "editar";
  submitBtn.id = e.target.parentElement.id;
};
const updateTodo = async (id) => {
  try {
    await fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        owner: ownerInput.value,
        description: descriptionInput.value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

//========================================================
addListeners();
function addListeners() {
  getTodoButton.addEventListener("click", getTodos);
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (submitBtn.textContent === "editar") {
      updateTodo(submitBtn.id);
      console.log("Editar");
    } else {
      createTodo();
    }
  });
  /**para eliminar  //editar*/
  todoListContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteButton")) {
      deleteTodo(e.target.parentElement.id);
    }
    if (e.target.classList.contains("editButton")) {
      fillUpdateForm(e);
    }
  });
}
//min 52
