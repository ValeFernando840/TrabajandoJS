//js es un lenguage monohilo(que solo hace una tarea a la vez)
//timer interval - TimeOut
/*El término API es una abreviatura de Application Programming Interfaces, que en español
 significa interfaz de programación de aplicaciones. Se trata de un conjunto de
definiciones y protocolos que se utiliza para desarrollar e integrar el software de las 
aplicaciones, permitiendo la comunicación entre dos aplicaciones de software a través de
 un conjunto de reglas.

Así pues, podemos hablar de una API como una especificación formal que establece cómo un 
módulo de un software se comunica o interactúa con otro para cumplir una o muchas funciones.
Todo dependiendo de las aplicaciones que las vayan a utilizar, y de los permisos que les
dé el propietario de la API a los desarrolladores de terceros. */
//forma de establecer una comunicacion entre aplicaciones
//interval
// setInterval(() => {
//   console.log("hola mundo");
// }, 3000);

// setTimeout(() => {
//   console.log("Se ejecutará una sola vez despues de 5 segundos");
// }, 5000);
// 1:08
//promesas
/** es un objeto que es usado como un placeholder*/

const myPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Funcionó");
    } else {
      reject("Sucedio un error");
    }
  });
};
// myPromise()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Al final de la operación"));

const API_URL = "https://rickandmortyapi.com/api/character";
const ulList = document.querySelector("#main-content");
const spinner = document.querySelector("#main-content p");

function showListCharacterName(arr) {
  arr.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.name;
    ulList.appendChild(li);
  });
}

const getRickAndMorty = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => showListCharacterName(data.results))
    .finally(() => (spinner.style.display = "none"));
};

getRickAndMorty();
