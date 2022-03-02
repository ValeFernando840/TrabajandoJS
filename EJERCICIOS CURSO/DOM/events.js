//Un evento es un suceso que hay en nuestra pagina que hace que nuestro codigo reaccione
// ejemplo a travez de un estimulo como un Click
//Existen distintas maneras de agregar eventos

const button2 = document.querySelector("#button2");
//No se le pùede pasar parámetros
button2.onclick = function () {
  alert("Hola mundo desde el atrubuto");
};

//ADD EVENT LISTENER
const button3 = document.querySelector("#button3");
const myFunction = () => {
  alert("Alert desde Event Listener");
};
button3.addEventListener("click", function (event) {
  event.target.textContent = "Cambiar texto"; //le cambiamos el contenido al hacer click
  event.target.classList.add("button"); //agregamos una clase de Css al hacerle click
  //tambien existe .toggle (si existe esa clase implementada la quita y si no existe la coloca)
});

//min 44
