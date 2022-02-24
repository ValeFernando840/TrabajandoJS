//API => Application Programming Interface
// Frontend API => Funcionalidades externas que se pueden acoplar a JS
//DOM => Document Object Model
// Critical Rendering Path
const div = document.getElementById("div");
//TextContent => Modifica el texto interno
div.textContent = "Hola mundo";
//Style => Añade estilos en la linea
div.style.background = "violet";
console.log(div);
//Añadir clase CSS =>DOMTokenList (una especie de tipo de dato que es mas del DOM no de JS)
div.classList.add("my-class");
//console.log(div.classList);
//que es un Token ?

//Quitar una clase CSS
div.classList.remove("my-class");
