//Un evento es un suceso que hay en nuestra pagina que hace que nuestro codigo reaccione
// ejemplo a travez de un estimulo como un Click
//Existen distintas maneras de agregar eventos

// const button2 = document.querySelector("#button2");
// //No se le pùede pasar parámetros
// button2.onclick = function () {
//   alert("Hola mundo desde el atrubuto");
// };

// //ADD EVENT LISTENER
// const button3 = document.querySelector("#button3");
// const myFunction = () => {
//   alert("Alert desde Event Listener");
// };
// button3.addEventListener("click", function (event) {
//   event.target.textContent = "Cambiar texto"; //le cambiamos el contenido al hacer click
//   event.target.classList.add("button"); //agregamos una clase de Css al hacerle click
//   //tambien existe .toggle (si existe esa clase implementada la quita y si no existe la coloca)
// });

//min 44
const menuItems = document.querySelectorAll(".menu-item");
const content = document.querySelector(".content");
const contentText = ["Contenido 1", "Contenido 2", "Contenido 3"];

content.textContent = contentText[0];
//Primera manera... Existe una forma mas buena de realizar esto
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    content.textContent = contentText[index];
    menuItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
//min 56
