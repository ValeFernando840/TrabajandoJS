const closeSessionBtn=document.querySelector("#close-session");
let isLoggedUser=JSON.parse(localStorage.getItem("loggedUser"));

const initialModal=document.createElement('div');
initialModal.textContent="Cargando..."
initialModal.style.position="absolute";
initialModal.style.top="0px";
initialModal.style.botton="0px";
initialModal.style.left="0px";
initialModal.style.right="0px";
initialModal.style.background="white";
document.body.append(initialModal);
if(!isLoggedUser){
  window.location.href='./index.html';
}
document.body.removeChild(initialModal);//a
closeSessionBtn.addEventListener('click',() => {
  localStorage.removeItem("loggedUser");
  window.location.href='./index.html';
})

//1:22:00