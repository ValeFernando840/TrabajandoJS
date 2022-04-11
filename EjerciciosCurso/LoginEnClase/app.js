const form=document.querySelector("#loginForm");
const emailInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const API_URL="http://localhost:4000/users"
form.addEventListener('submit',async e=>{
 e.preventDefault();
 const response = await fetch(API_URL);
 const users = await response.json();
 const currentUser= users.find(u => u.email===emailInput.value && u.password === passwordInput.value);
 localStorage.setItem('loggedUser',JSON.stringify(currentUser));
 window.location.href="./private.html";
})