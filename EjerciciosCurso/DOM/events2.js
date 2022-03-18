const cardWrapper = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const cardBody = document.querySelector(".card-body");
const cardButton = document.querySelector(".card-button");
//Los eventos tienen comportamiento de burbuja => arrancan desde el componente
// mas interno donde se disparo el evento y se van expandiendo a lo largo del DOM.
cardWrapper.addEventListener("click", (event) => {
  if (event.target.classList.contains("card-body")) {
    alert("Alerta desde el card body");
  } else if (event.target.classList.contains("card-title")) {
    alert("Alerta desde el card title");
  } else if (event.target.classList.contains("card-button")) {
    alert("Alerta desde el boton");
  } else {
    alert("Alerta desde el Container");
  }
});
