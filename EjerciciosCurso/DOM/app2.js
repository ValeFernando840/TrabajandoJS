//Clase Events 2

//Existen 3 maneras de definir un Evento : en el documento por medio del atributo HTML,
//Otra forma de hacerlo es mediante ...
// por ultimo el event listener toma tres parametros ("nonbre del evento", una funcion(referencia),
// y el tercer puede ser un bool o un objeto)

const divs = document.querySelectorAll(".eventos-flujo div");
const flujoEvento = (event) => {
  //  event.stopPropagation(); //para evitar propagación de eventos
  console.log(
    `Hola soy ${event.target.className}, y me dispare con el ${event.target.textContent}`
  );
};
// divs.forEach((div) =>
//   div.addEventListener("click", flujoEvento, {
//     capture: true,
//     once: true,
//   })
// );

//Otra forma Event Delegation
document.addEventListener("click", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    console.log("Elemento Clickeado");
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //quito el comportamiento por defecto que tiene el botton por ej.
});

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });
// document.addEventListener("keypress", (e) => console.log(e));

// document.addEventListener("keyup", (e) => console.log(e));

document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    e.target.style.background = "red";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    e.target.style.background = "yellow";
  }
});

// document.addEventListener("dblclick", (e) => {
//   if (e.target.matches(".eventos-flujo div")) {
//     console.log("DOBLE click", e.target);
//   }
// });
document.addEventListener("change", (e) => {
  if (e.target.matches("form input")) {
    console.log("Se dispara el event", e.target.value);
  }
});
