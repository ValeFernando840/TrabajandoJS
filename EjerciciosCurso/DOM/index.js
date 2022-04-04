//API => Application Programming Interface
// Frontend API => Funcionalidades externas que se pueden acoplar a JS
//DOM => Document Object Model
// Critical Rendering Path
//const div = document.getElementById("div");
//TextContent => Modifica el texto interno
//div.textContent = "Hola mundo";
//Style => Añade estilos en la linea
//div.style.background = "violet";
//console.log(div);
//Añadir clase CSS =>DOMTokenList (una especie de tipo de dato que es mas del DOM no de JS)
//div.classList.add("my-class");
//console.log(div.classList);
//que es un Token ?

//Quitar una clase CSS
//div.classList.remove("my-class ");

//se puede acceder mediante className
//div.className = "my-class div";
//nos devuelve o retorna una HTMLCollection
const divsList = document.getElementsByClassName("div");
//Destructuring
const divs = [...divsList];
divs.forEach((value) => value.classList.add("my-class2"));
console.log(typeof divs);

//Selector tag(etiqueta)
const divTags = document.getElementsByTagName("div"); //devuelve un htmlCollection
console.log(divTags);

//Selecciona un elemento

const firstDiv = document.querySelector("#div");
console.log(firstDiv);
const secondDiv = document.querySelector(".div");
console.log(secondDiv);

//Seleccionar muchos elementos =>Devuelven un NodeList
//la diferencia esta en que los NodeList si se puede usar los "forEach"
const allDivs = document.querySelectorAll("div");
allDivs.forEach((value) => console.log(value));
console.log(allDivs);

//Crear y añadir elementos o nodos al DOM

//Creación
// const paragraph = document.createElement("p");
// paragraph.textContent = "Son un parrafo JS";
// const paragraph2 = document.createElement("p");
// paragraph2.textContent = "Parrafo2";
// const paragraphs = [paragraph, paragraph2];
// //Añadir un elemento al DOM
// document.body.append(...paragraphs);

//document.body.appendChild(paragraph);
//document.body.append("hola mundo desde el DOM", document.createElement("div"));
//Seleccionar un elemento
//firstDiv.appendChild(paragraph);

//Ejercicio
const news = [
  { title: "noticia 1", date: "1min", author: "Pedro" },
  { title: "noticia 2", date: "30min", author: "Juan" },
  { title: "noticia 3", date: "1hs", author: "Pedro" },
];
const items = [];
news.forEach((item) => {
  const title = document.createElement("h3");
  title.textContent = item.title;
  const author = document.createElement("p");
  author.textContent = item.author;
  const date = document.createElement("span");
  date.textContent = item.date;
  const container = document.createElement("div");
  container.append(title, author, date);
  // const section = document.querySelector(".news ");
  // section.append(container);
  // section.style.display = "flex";
  items.push(container);
});
const section = document.querySelector(".news");
section.append(...items);
//fin ejercicio

//Añadir elementos antes de otro elemento
//Seleccionar la Referencia
const ref = document.querySelector("#subtitle");
const mainTitle = document.createElement("h1");
mainTitle.textContent = "Titulo principal";
//Seleccionamos el contenedor
const titlecontainer = document.querySelector(".example");
//Ingreso el elemento nuevo y luego la referencia
titlecontainer.insertBefore(mainTitle, ref);

//otra forma de hacer lo anterior
//INSERT ADJACENT

const h2Ref = document.querySelector("#example-title");
const newNode = document.createElement("span");
newNode.textContent = "Soy un span";
h2Ref.insertAdjacentElement("afterbegin", newNode); //puede ir beforebegin - afterbegin - beforeend

//PREPEND => Añadir elementos al comienzo
titlecontainer.prepend(document.createElement("hr"));

//EJEMPLO 2:
const news2 = [
  { title: "noticia 1", date: "1min", author: "Pedro" },
  { title: "noticia 2", date: "30min", author: "Juan" },
  { title: "noticia 3", date: "1hs", author: "Pedro" },
];
const items2 = [];
news2.forEach((item) => {
  const container = document.createElement("div");
  container.innerHTML = `
  <h3>${item.title}</h3>
  <p>${item.author}</p>
  <span>${item.date}</span>`;
  items2.push(container);
});

const newExample = document.querySelector(".new-example");
newExample.append(...items2);
//fin Segundo ejemplo

//Remover elementos del DOM
const nodoAEliminar = document.querySelector("#example-title-2");
const padreDirecto = document.querySelector(".new-example-2");
padreDirecto.removeChild(nodoAEliminar);
//tambien podemos eliminar todos los hijos del nodo
padreDirecto.remove();

//Remplazar elementos
const padre = document.querySelector("#header");
const elementToReplace = document.querySelector("#header h1");
const newTitleNode = document.createElement("h1");
newTitleNode.textContent = "Bienvendido Usuario";
padre.replaceChild(newTitleNode, elementToReplace);

//Mas propiedades
const parrafoFooter = document.querySelector("footer p");
console.log(parrafoFooter.parentElement);
parrafoFooter.parentElement.style.background = "blue";
parrafoFooter.parentElement.style.color = "white";

//Traversing => Importante para los eventos en el DOM
console.log(parrafoFooter.parentElement.parentElement);

//Forms => DOM
const inputName = document.querySelector("#inputName");
console.log(inputName.value);
