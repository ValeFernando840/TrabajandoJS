const userLogged=JSON.parse(localStorage.getItem('loggedUser'));

if(!userLogged || userLogged.role !== 'admin'){
  window.location.href="./index.html";
}